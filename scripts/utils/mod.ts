export const exists = async (path: string) => {
  try {
    await Deno.stat(path);
    return true;
  } catch {
    return false;
  }
};

export const getBlocks = (txt: string) =>
  txt
    .split(/\n/)
    .map((line) => line.match(/^([A-F0-9]+)\.\.([A-F0-9]+); (.+)$/))
    .filter((match) => match !== null)
    .map((match) => {
      const [, startCode, endCode, blockName] = match;
      const enumName = blockName
        .replace(/[^a-zA-Z0-9]/g, "_")
        .replace(/_+$/, "")
        .replace(/^_+/, "");
      return {
        enumName: enumName,
        blockName: blockName,
        startCode: parseInt(startCode, 16),
        endCode: parseInt(endCode, 16),
      };
    });

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
      const [code, name, cat, comb, bidi, decomp, , , num, bidiMirror, oldName, , upper, lower, title] = line.split(
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
      };
      // skip comb if it is '0', which it is in 97% of cases (26,523 / 27,268)
      if (comb !== "0") {
        character.comb = parseInt(comb, 10);
      }
      // skip bidi if it is 'L', which it is in 66% of cases (17,936 / 27,268)
      if (bidi !== "L") {
        character.bidi = bidi;
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
