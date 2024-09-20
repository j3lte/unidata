import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Small Kana Extension**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **110896**
 *
 * _End Code:_ **110959**
 *
 * _Total Characters:_ **9**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Small_Kana_Extension,
  startCode: 110896,
  endCode: 110959,
  characters: [
    { "code": 110898, "name": "HIRAGANA LETTER SMALL KO", "cat": "Lo" },
    { "code": 110928, "name": "HIRAGANA LETTER SMALL WI", "cat": "Lo" },
    { "code": 110929, "name": "HIRAGANA LETTER SMALL WE", "cat": "Lo" },
    { "code": 110930, "name": "HIRAGANA LETTER SMALL WO", "cat": "Lo" },
    { "code": 110933, "name": "KATAKANA LETTER SMALL KO", "cat": "Lo" },
    { "code": 110948, "name": "KATAKANA LETTER SMALL WI", "cat": "Lo" },
    { "code": 110949, "name": "KATAKANA LETTER SMALL WE", "cat": "Lo" },
    { "code": 110950, "name": "KATAKANA LETTER SMALL WO", "cat": "Lo" },
    { "code": 110951, "name": "KATAKANA LETTER SMALL N", "cat": "Lo" },
  ],
};
