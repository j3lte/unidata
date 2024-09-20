import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Low Surrogates**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **56320**
 *
 * _End Code:_ **57343**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Low_Surrogates,
  startCode: 56320,
  endCode: 57343,
  characters: [
    { "code": 56320, "name": "<Low Surrogate, First>", "cat": "Cs" },
    { "code": 57343, "name": "<Low Surrogate, Last>", "cat": "Cs" },
  ],
};
