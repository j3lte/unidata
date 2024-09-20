import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs Extension E**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **178208**
 *
 * _End Code:_ **183983**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs_Extension_E,
  startCode: 178208,
  endCode: 183983,
  characters: [
    { "code": 178208, "name": "<CJK Ideograph Extension E, First>", "cat": "Lo" },
    { "code": 183969, "name": "<CJK Ideograph Extension E, Last>", "cat": "Lo" },
  ],
};
