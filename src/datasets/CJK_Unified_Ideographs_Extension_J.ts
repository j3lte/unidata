import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs Extension J**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **205744**
 *
 * _End Code:_ **210047**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs_Extension_J,
  startCode: 205744,
  endCode: 210047,
  characters: [
    { "code": 205744, "name": "<CJK Ideograph Extension J, First>", "cat": "Lo" },
    { "code": 210041, "name": "<CJK Ideograph Extension J, Last>", "cat": "Lo" },
  ],
};
