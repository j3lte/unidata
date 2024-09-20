import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Devanagari Extended-A**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **72448**
 *
 * _End Code:_ **72543**
 *
 * _Total Characters:_ **10**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Devanagari_Extended_A,
  startCode: 72448,
  endCode: 72543,
  characters: [
    { "code": 72448, "name": "DEVANAGARI HEAD MARK", "cat": "Po" },
    { "code": 72449, "name": "DEVANAGARI HEAD MARK WITH HEADSTROKE", "cat": "Po" },
    { "code": 72450, "name": "DEVANAGARI SIGN BHALE", "cat": "Po" },
    { "code": 72451, "name": "DEVANAGARI SIGN BHALE WITH HOOK", "cat": "Po" },
    { "code": 72452, "name": "DEVANAGARI SIGN EXTENDED BHALE", "cat": "Po" },
    { "code": 72453, "name": "DEVANAGARI SIGN EXTENDED BHALE WITH HOOK", "cat": "Po" },
    { "code": 72454, "name": "DEVANAGARI SIGN WESTERN FIVE-LIKE BHALE", "cat": "Po" },
    { "code": 72455, "name": "DEVANAGARI SIGN WESTERN NINE-LIKE BHALE", "cat": "Po" },
    { "code": 72456, "name": "DEVANAGARI SIGN REVERSED NINE-LIKE BHALE", "cat": "Po" },
    { "code": 72457, "name": "DEVANAGARI SIGN MINDU", "cat": "Po" },
  ],
};
