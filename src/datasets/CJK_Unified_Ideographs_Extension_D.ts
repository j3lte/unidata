import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs Extension D**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **177984**
 *
 * _End Code:_ **178207**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs_Extension_D,
  startCode: 177984,
  endCode: 178207,
  characters: [
    { "code": 177984, "name": "<CJK Ideograph Extension D, First>", "cat": "Lo" },
    { "code": 178205, "name": "<CJK Ideograph Extension D, Last>", "cat": "Lo" },
  ],
};
