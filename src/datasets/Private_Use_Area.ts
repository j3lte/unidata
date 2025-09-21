import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Private Use Area**
 *
 * _Unicode Version:_ **17.0.0**
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
    {
      code: 57344,
      name: "<Private Use, First>",
      cat: Category.Private_Use,
      bidi: BidiClass.Left_To_Right,
      age: Age.V1_1,
    },
    {
      code: 63743,
      name: "<Private Use, Last>",
      cat: Category.Private_Use,
      bidi: BidiClass.Left_To_Right,
      age: Age.V1_1,
    },
  ],
};
