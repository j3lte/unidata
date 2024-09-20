import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Supplementary Private Use Area-A**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **983040**
 *
 * _End Code:_ **1048575**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Supplementary_Private_Use_Area_A,
  startCode: 983040,
  endCode: 1048575,
  characters: [
    { "code": 983040, "name": "<Plane 15 Private Use, First>", "cat": "Co" },
    { "code": 1048573, "name": "<Plane 15 Private Use, Last>", "cat": "Co" },
  ],
};
