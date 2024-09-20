import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs Extension A**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **13312**
 *
 * _End Code:_ **19903**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs_Extension_A,
  startCode: 13312,
  endCode: 19903,
  characters: [
    { "code": 13312, "name": "<CJK Ideograph Extension A, First>", "cat": "Lo" },
    { "code": 19903, "name": "<CJK Ideograph Extension A, Last>", "cat": "Lo" },
  ],
};
