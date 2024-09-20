import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Tangut**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **94208**
 *
 * _End Code:_ **100351**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Tangut,
  startCode: 94208,
  endCode: 100351,
  characters: [
    { "code": 94208, "name": "<Tangut Ideograph, First>", "cat": "Lo" },
    { "code": 100343, "name": "<Tangut Ideograph, Last>", "cat": "Lo" },
  ],
};
