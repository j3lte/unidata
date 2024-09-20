import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **19968**
 *
 * _End Code:_ **40959**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs,
  startCode: 19968,
  endCode: 40959,
  characters: [
    { "code": 19968, "name": "<CJK Ideograph, First>", "cat": "Lo" },
    { "code": 40959, "name": "<CJK Ideograph, Last>", "cat": "Lo" },
  ],
};
