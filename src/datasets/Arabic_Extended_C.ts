import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Arabic Extended-C**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **69312**
 *
 * _End Code:_ **69375**
 *
 * _Total Characters:_ **7**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Arabic_Extended_C,
  startCode: 69312,
  endCode: 69375,
  characters: [
    { "code": 69314, "name": "ARABIC LETTER DAL WITH TWO DOTS VERTICALLY BELOW", "cat": "Lo", "bidi": "AL" },
    { "code": 69315, "name": "ARABIC LETTER TAH WITH TWO DOTS VERTICALLY BELOW", "cat": "Lo", "bidi": "AL" },
    { "code": 69316, "name": "ARABIC LETTER KAF WITH TWO DOTS VERTICALLY BELOW", "cat": "Lo", "bidi": "AL" },
    { "code": 69372, "name": "ARABIC COMBINING ALEF OVERLAY", "cat": "Mn", "bidi": "NSM" },
    { "code": 69373, "name": "ARABIC SMALL LOW WORD SAKTA", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 69374, "name": "ARABIC SMALL LOW WORD QASR", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 69375, "name": "ARABIC SMALL LOW WORD MADDA", "cat": "Mn", "comb": 220, "bidi": "NSM" },
  ],
};
