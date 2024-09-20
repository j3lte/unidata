import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs Extension F**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **183984**
 *
 * _End Code:_ **191471**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs_Extension_F,
  startCode: 183984,
  endCode: 191471,
  characters: [
    { "code": 183984, "name": "<CJK Ideograph Extension F, First>", "cat": "Lo" },
    { "code": 191456, "name": "<CJK Ideograph Extension F, Last>", "cat": "Lo" },
  ],
};
