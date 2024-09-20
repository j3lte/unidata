import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Supplementary Private Use Area-B**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **1048576**
 *
 * _End Code:_ **1114111**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Supplementary_Private_Use_Area_B,
  startCode: 1048576,
  endCode: 1114111,
  characters: [
    { "code": 1048576, "name": "<Plane 16 Private Use, First>", "cat": "Co" },
    { "code": 1114109, "name": "<Plane 16 Private Use, Last>", "cat": "Co" },
  ],
};
