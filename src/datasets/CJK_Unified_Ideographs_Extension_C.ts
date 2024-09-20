import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs Extension C**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **173824**
 *
 * _End Code:_ **177983**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs_Extension_C,
  startCode: 173824,
  endCode: 177983,
  characters: [
    { "code": 173824, "name": "<CJK Ideograph Extension C, First>", "cat": "Lo" },
    { "code": 177977, "name": "<CJK Ideograph Extension C, Last>", "cat": "Lo" },
  ],
};
