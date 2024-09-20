import { resolve } from "jsr:@std/path@^1.0.6";
import { extract } from "jsr:@quentinadam/zip@^0.1.1";
import { exists, getBlocks, getCharacters } from "./utils/mod.ts";

const runVersion = async (UNICODE_VERSION: string) => {
  const UNICODE_URL = `https://www.unicode.org/Public/zipped/${UNICODE_VERSION}/UCD.zip`;
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
    if (!["Blocks.txt", "UnicodeData.txt"].includes(file.name)) {
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

  console.log("Generating blocks...");

  const blocksTxt = await Deno.readTextFile(resolve(OUTPUT_DIR, "Blocks.txt"));
  const blocks = getBlocks(blocksTxt);
  const blocksEnums = blocks.map((block) => {
    return `  ${block.enumName} = "${block.blockName}",`;
  }).join("\n");

  await Deno.writeTextFile(
    resolve(SRC_DIR, "enums.ts"),
    `/**
 * Enum for the type of the character set.
 *
 * See [Character Code Charts](https://www.unicode.org/charts/) for more information.
 */
export enum CharacterSetType {
${blocksEnums}
}`,
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
    const output = resolve(SRC_DIR, `datasets/${block.enumName}.ts`);
    done.push(...blockCharacters.map((char) => char.code));

    await Deno.writeTextFile(
      output,
      `import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

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
          return `    ${JSON.stringify(char)},`;
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
};

await runVersion("16.0.0");
