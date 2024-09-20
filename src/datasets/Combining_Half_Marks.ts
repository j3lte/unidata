import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Combining Half Marks**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **65056**
 *
 * _End Code:_ **65071**
 *
 * _Total Characters:_ **16**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Combining_Half_Marks,
  startCode: 65056,
  endCode: 65071,
  characters: [
    { "code": 65056, "name": "COMBINING LIGATURE LEFT HALF", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 65057, "name": "COMBINING LIGATURE RIGHT HALF", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 65058, "name": "COMBINING DOUBLE TILDE LEFT HALF", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 65059, "name": "COMBINING DOUBLE TILDE RIGHT HALF", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 65060, "name": "COMBINING MACRON LEFT HALF", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 65061, "name": "COMBINING MACRON RIGHT HALF", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 65062, "name": "COMBINING CONJOINING MACRON", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 65063, "name": "COMBINING LIGATURE LEFT HALF BELOW", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 65064, "name": "COMBINING LIGATURE RIGHT HALF BELOW", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 65065, "name": "COMBINING TILDE LEFT HALF BELOW", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 65066, "name": "COMBINING TILDE RIGHT HALF BELOW", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 65067, "name": "COMBINING MACRON LEFT HALF BELOW", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 65068, "name": "COMBINING MACRON RIGHT HALF BELOW", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 65069, "name": "COMBINING CONJOINING MACRON BELOW", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 65070, "name": "COMBINING CYRILLIC TITLO LEFT HALF", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 65071, "name": "COMBINING CYRILLIC TITLO RIGHT HALF", "cat": "Mn", "comb": 230, "bidi": "NSM" },
  ],
};
