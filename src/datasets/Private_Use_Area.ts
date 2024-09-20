import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Private Use Area**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **57344**
 *
 * _End Code:_ **63743**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Private_Use_Area,
  startCode: 57344,
  endCode: 63743,
  characters: [
    { "code": 57344, "name": "<Private Use, First>", "cat": "Co" },
    { "code": 63743, "name": "<Private Use, Last>", "cat": "Co" },
  ],
};
