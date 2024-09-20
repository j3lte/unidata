import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **High Surrogates**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **55296**
 *
 * _End Code:_ **56191**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.High_Surrogates,
  startCode: 55296,
  endCode: 56191,
  characters: [
    { "code": 55296, "name": "<Non Private Use High Surrogate, First>", "cat": "Cs" },
    { "code": 56191, "name": "<Non Private Use High Surrogate, Last>", "cat": "Cs" },
  ],
};
