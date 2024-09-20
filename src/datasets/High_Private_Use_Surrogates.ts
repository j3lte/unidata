import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **High Private Use Surrogates**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **56192**
 *
 * _End Code:_ **56319**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.High_Private_Use_Surrogates,
  startCode: 56192,
  endCode: 56319,
  characters: [
    { "code": 56192, "name": "<Private Use High Surrogate, First>", "cat": "Cs" },
    { "code": 56319, "name": "<Private Use High Surrogate, Last>", "cat": "Cs" },
  ],
};
