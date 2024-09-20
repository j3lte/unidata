import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs Extension G**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **196608**
 *
 * _End Code:_ **201551**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs_Extension_G,
  startCode: 196608,
  endCode: 201551,
  characters: [
    { "code": 196608, "name": "<CJK Ideograph Extension G, First>", "cat": "Lo" },
    { "code": 201546, "name": "<CJK Ideograph Extension G, Last>", "cat": "Lo" },
  ],
};
