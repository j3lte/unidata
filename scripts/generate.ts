import { resolve } from "@std/path";
import { extract } from "@quentinadam/zip";
import { exists, updateText } from "./utils/misc.ts";
import { getBlocks } from "./utils/blocks.ts";
import { getCharacters } from "./utils/character.ts";
import { stringifyCharacter } from "./utils/character.ts";
import { getPropertyValueAliases } from "./utils/propertyValues.ts";
import { getDerivedAges } from "./utils/age.ts";

const runVersion = async (UNICODE_VERSION: string) => {
  const UNICODE_URL = `https://www.unicode.org/Public/${UNICODE_VERSION}/ucd/UCD.zip`;
  const OUTPUT_DIR = resolve(import.meta.dirname!, `../data/${UNICODE_VERSION}`);

  if (!await exists(OUTPUT_DIR)) {
    await Deno.mkdir(OUTPUT_DIR, { recursive: true });
  }
  const SRC_DIR = resolve(import.meta.dirname!, "../src");

  const zipName = `UCD-${UNICODE_VERSION.replaceAll(".", "_")}.zip`;
  const zipPath = resolve(OUTPUT_DIR, zipName);

  if (!await exists(zipPath)) {
    console.log("Downloading Unicode data...");

    await fetch(UNICODE_URL).then(async (res) => {
      if (!res.ok) {
        throw new Error(`Failed to download Unicode data: ${res.statusText}`);
      }
      Deno.writeFile(zipPath, new Uint8Array(await res.arrayBuffer()));
    });
  }

  console.log("Cleaning up old data...");

  const dir = await Deno.readDir(OUTPUT_DIR);
  for await (const file of dir) {
    if (file.name === ".gitkeep") continue;
    if (file.name === zipName) continue;
    await Deno.remove(resolve(OUTPUT_DIR, file.name), { recursive: true });
  }

  console.log("Extracting Unicode data...");

  const buff = await Deno.readFile(zipPath);
  const files = await extract(buff);

  for (const file of files) {
    const dest = resolve(OUTPUT_DIR, file.name);
    if (!["Blocks.txt", "UnicodeData.txt", "PropertyValueAliases.txt", "DerivedAge.txt"].includes(file.name)) {
      continue;
    }
    if (file.data.length === 0) {
      // Create directory
      await Deno.mkdir(dest, { recursive: true });
    } else {
      // Write file
      await Deno.writeFile(dest, file.data);
    }
  }

  console.log("Done extracting Unicode data.");

  console.log("Generating property value aliases...");
  const propertyValueAliasesTxt = await Deno.readTextFile(resolve(OUTPUT_DIR, "PropertyValueAliases.txt"));
  const propertyValueAliases = getPropertyValueAliases(propertyValueAliasesTxt);

  console.log("Derive age...");
  const derivedAgeTxt = await Deno.readTextFile(resolve(OUTPUT_DIR, "DerivedAge.txt"));
  const derivedAges = getDerivedAges(derivedAgeTxt);

  console.log("Generating blocks...");

  const blocksTxt = await Deno.readTextFile(resolve(OUTPUT_DIR, "Blocks.txt"));
  const blocks = getBlocks(blocksTxt);
  const blocksEnums = blocks.map((block) => {
    return `  ${block.enumName} = "${block.blockName}",`;
  }).join("\n");

  await Deno.writeTextFile(
    resolve(SRC_DIR, "enums.ts"),
    `/**
 * Type of the character set.
 *
 * See [Character Code Charts](https://www.unicode.org/charts/) for more information.
 */
export enum CharacterSetType {
${blocksEnums}
}

/**
 * General Category of the character.
 *
 * See [General Category Values](https://www.unicode.org/reports/tr44/tr44-36.html#General_Category_Values) for more information.
 */
export enum Category {
${
      propertyValueAliases.categories.map(([category, abbreviation]) => {
        return `  ${category} = "${abbreviation}",`;
      }).join("\n")
    }
}

/**
 * Bidirectional Class Values of the character.
 *
 * See [Bidi Category Values](https://www.unicode.org/reports/tr44/tr44-36.html#Bidi_Class_Values) for more information.
 */
export enum BidiClass {
${
      propertyValueAliases.bidi.map(([bidi, abbreviation]) => {
        return `  ${bidi} = "${abbreviation}",`;
      }).join("\n")
    }
}

/**
 * Character Age of the character.
 *
 * The Age property indicates the first version in which a particular Unicode character was assigned.
 *
 * See [Character Age](https://www.unicode.org/reports/tr44/tr44-36.html#Character_Age) for more information.
 */
export enum Age {
${
      propertyValueAliases.ages.map(([age, abbreviation]) => {
        return `  ${age} = "${abbreviation}",`;
      }).join("\n")
    }
}
`,
  );

  console.log("Cleaning up old character data...");

  const charDir = resolve(SRC_DIR, "datasets");
  const charDirExists = await exists(charDir);
  if (charDirExists) {
    const dir = await Deno.readDir(charDir);
    for await (const file of dir) {
      await Deno.remove(resolve(charDir, file.name));
    }
  } else {
    await Deno.mkdir(charDir, { recursive: true });
  }

  console.log("Generating characters...");

  const characterTxt = await Deno.readTextFile(resolve(OUTPUT_DIR, "UnicodeData.txt"));
  const characters = getCharacters(characterTxt);
  const done: number[] = [];

  await Promise.all(blocks.map(async (block) => {
    const blockCharacters = characters.filter((char) => char.code >= block.startCode && char.code <= block.endCode);
    const hasBidi = blockCharacters.some((char) => typeof char.bidi !== "undefined");
    const output = resolve(SRC_DIR, `datasets/${block.enumName}.ts`);
    done.push(...blockCharacters.map((char) => char.code));

    await Deno.writeTextFile(
      output,
      `import type { CharacterSet } from "../types.ts";
import { Age, ${hasBidi ? "BidiClass, " : ", "}Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **${block.blockName}**
 *
 * _Unicode Version:_ **${UNICODE_VERSION}**
 *
 * _Start Code:_ **${block.startCode}**
 *
 * _End Code:_ **${block.endCode}**
 *
 * _Total Characters:_ **${blockCharacters.length}**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.${block.enumName},
  startCode: ${block.startCode},
  endCode: ${block.endCode},
  characters: [
${
        blockCharacters.map((char) => {
          return `    ${
            stringifyCharacter(char, {
              categories: propertyValueAliases.categories,
              bidi: propertyValueAliases.bidi,
              ages: propertyValueAliases.ages,
              derivedAges: derivedAges,
            })
          },`;
        }).join("\n")
      }
  ]
};
`,
    );
  }));

  console.log("Checking for missing characters...");
  const missing = characters.filter((char) => !done.includes(char.code));

  if (missing.length > 0) {
    console.log("Missing characters:");
    console.log(missing);
    Deno.exit(1);
  }

  await Deno.writeTextFile(
    resolve(SRC_DIR, "datasets/mod.ts"),
    `${
      blocks.map((block) => {
        return `import { dataSet as ${block.enumName} } from "./${block.enumName}.ts";`;
      }).join("\n")
    }

export {
${
      blocks.map((block) => {
        return `  ${block.enumName},`;
      }).join("\n")
    }
};
`,
  );

  await Deno.writeTextFile(
    resolve(SRC_DIR, "datasets/data.ts"),
    `import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

import {
${
      blocks.map((block) => {
        return `  ${block.enumName},`;
      }).join("\n")
    }
} from "./mod.ts";

/**
 * Character set data
 *
 * @internal
 */
export const data: Record<CharacterSetType, CharacterSet> = {
${
      blocks.map((block) => {
        return `  [CharacterSetType.${block.enumName}]: ${block.enumName},`;
      }).join("\n")
    }
};
`,
  );

  const modFile = await Deno.readTextFile(resolve(SRC_DIR, "mod.ts"));
  const newModFile = modFile.replace(/UNICODE_VERSION = "[\d.]+";/, `UNICODE_VERSION = "${UNICODE_VERSION}";`);
  await Deno.writeTextFile(resolve(SRC_DIR, "mod.ts"), newModFile);

  // Generate Markdown table for README.md
  const tableHeader =
    `| Name | Start Code | End Code | Total Characters |\n|------|------------|----------|------------------|`;
  const tableRows = blocks
    .map((block) => {
      const blockCharacters = characters.filter((char) => char.code >= block.startCode && char.code <= block.endCode);
      return {
        name: block.blockName,
        startCode: `U+${block.startCode.toString(16).toUpperCase().padStart(4, "0")}`,
        endCode: `U+${block.endCode.toString(16).toUpperCase().padStart(4, "0")}`,
        total: blockCharacters.length,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((row) => `| ${row.name} | ${row.startCode} | ${row.endCode} | ${row.total} |`)
    .join("\n");
  const table = `${tableHeader}\n${tableRows}`;

  // Read README.md
  const readmePath = resolve(import.meta.dirname!, "../README.md");
  const readmeText = await Deno.readTextFile(readmePath);
  const { updatedText, hasChanges } = updateText(
    "CharacterSets",
    readmeText,
    table,
  );
  if (hasChanges) {
    await Deno.writeTextFile(readmePath, updatedText);
    console.log("README.md CharacterSets table updated.");
  } else {
    console.log("README.md CharacterSets table is up to date.");
  }
};

await runVersion("17.0.0");
