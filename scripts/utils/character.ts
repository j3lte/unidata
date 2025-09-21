import { type DerivedAge, getDerivedAge } from "./age.ts";
import type { PropertyValueAliasReturn } from "./propertyValues.ts";

interface Character {
  code: number;
  name: string;
  cat: string;
  comb?: number;
  bidi?: string;
  decompType?: string;
  decomp?: number[];
  num?: string;
  bidiMirror?: boolean;
  oldName?: string;
  upper?: number;
  lower?: number;
  title?: number;
  age: string;
}

export const getCharacters = (txt: string) =>
  txt
    .split(/\n/)
    .filter((line) => line !== "")
    .map((line) => {
      // parse out the raw values
      // the ignored variables are:
      //   [6] => numDecimal
      //   [7] => numDigit
      //   [11] => isoComment
      const [
        code,
        name,
        cat,
        comb,
        bidi,
        decomp,
        _decimal,
        _digit,
        num,
        bidiMirror,
        oldName,
        _isoComment,
        upper,
        lower,
        title,
      ] = line.split(
        ";",
      );
      // initialize the character with required fields
      const character: Character = {
        // code is hexadecimal
        code: parseInt(code, 16),
        // name is a string
        name: name,
        // cat is a string
        cat: cat,
        // bidi is a string
        bidi: bidi.trim().toUpperCase(),
        // age is a string
        age: "",
      };
      if (!character.bidi) {
        console.error(`No bidi class found for ${name}, code: ${code}`);
      }
      // skip comb if it is '0', which it is in 97% of cases (26,523 / 27,268)
      if (comb !== "0") {
        character.comb = parseInt(comb, 10);
      }
      // skip decomp if it is empty, which it is in 79% of cases (21,547 / 27,268)
      if (decomp !== "") {
        const [, decompType, decompMapping] = decomp.match(/^(?:<(\w+)> )?([0-9A-F ]+)$/) || [];
        // decompMapping will be a string of hexadecimal character codes,
        // e.g., '0041 0301' for U+00C1 LATIN CAPITAL LETTER A ACUTE
        character.decomp = decompMapping.split(" ").map((code) => parseInt(code, 16));
        if (decompType) {
          character.decompType = decompType;
        }
      }
      // we ignore numDecimal and numDigit (which are always empty if num is empty)
      // skip num if it is empty, which it is in 95% of cases (25,914 / 27,268)
      if (num !== "") {
        character.num = num;
      }
      // skip bidiMirror if it is N, which it is in 98% of cases (26,723 / 27,268)
      if (bidiMirror !== "N") {
        character.bidiMirror = true;
      }
      // skip oldName if it is empty, which it is in 93% of cases (25,290 / 27,268)
      if (oldName !== "") {
        character.oldName = oldName;
      }
      // isoComment is always empty
      // upper, lower, title are one character, if they are anything
      if (upper !== "") {
        character.upper = parseInt(upper, 16);
      }
      if (lower !== "") {
        character.lower = parseInt(lower, 16);
      }
      if (title !== "") {
        character.title = parseInt(title, 16);
      }
      return character;
    });

export const stringifyCharacter = (
  character: Character,
  opts: PropertyValueAliasReturn & { derivedAges: DerivedAge[] },
) => {
  const { categories, bidi, derivedAges, ages } = opts;
  const category = categories.find(([, abbreviation]) => abbreviation === character.cat);
  let catString = "";
  if (category) {
    catString = `Category.${category[0]}`;
    character.cat = catString;
  } else {
    throw new Error(`Category ${character.cat} not found in categories`);
  }
  const bidiCategory = character.bidi ? bidi.find(([, abbreviation]) => abbreviation === character.bidi) : null;
  let bidiString = character.bidi ? `BidiCategory.${character.bidi}` : "";
  if (bidiCategory) {
    bidiString = `BidiClass.${bidiCategory[0]}`;
    character.bidi = bidiString;
  }
  const age = getDerivedAge(derivedAges, character.code);
  if (!age) {
    throw new Error(`Age not found for character ${character.code}`);
  }
  const ageCategory = ages.find(([, version]) => version === age);
  let ageString = "";
  if (ageCategory) {
    ageString = `Age.${ageCategory[0]}`;
    character.age = ageString;
  } else {
    throw new Error(`Age ${age} not found in ages`);
  }
  const base = JSON.stringify(character);
  const cleaned = base.replace(/"(\w+)":/g, "$1: ").replace(`"${catString}"`, catString).replace(
    `"${ageString}"`,
    ageString,
  ).replace(
    `"${bidiString}"`,
    bidiString,
  );

  return cleaned;
};
