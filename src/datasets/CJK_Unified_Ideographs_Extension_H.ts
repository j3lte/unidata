import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs Extension H**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **201552**
 *
 * _End Code:_ **205743**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs_Extension_H,
  startCode: 201552,
  endCode: 205743,
  characters: [
    { "code": 201552, "name": "<CJK Ideograph Extension H, First>", "cat": "Lo" },
    { "code": 205743, "name": "<CJK Ideograph Extension H, Last>", "cat": "Lo" },
  ],
};
