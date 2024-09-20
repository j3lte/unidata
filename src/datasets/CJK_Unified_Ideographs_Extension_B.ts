import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs Extension B**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **131072**
 *
 * _End Code:_ **173791**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs_Extension_B,
  startCode: 131072,
  endCode: 173791,
  characters: [
    { "code": 131072, "name": "<CJK Ideograph Extension B, First>", "cat": "Lo" },
    { "code": 173791, "name": "<CJK Ideograph Extension B, Last>", "cat": "Lo" },
  ],
};
