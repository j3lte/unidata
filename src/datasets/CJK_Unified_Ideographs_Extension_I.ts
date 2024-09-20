import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs Extension I**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **191472**
 *
 * _End Code:_ **192095**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs_Extension_I,
  startCode: 191472,
  endCode: 192095,
  characters: [
    { "code": 191472, "name": "<CJK Ideograph Extension I, First>", "cat": "Lo" },
    { "code": 192093, "name": "<CJK Ideograph Extension I, Last>", "cat": "Lo" },
  ],
};
