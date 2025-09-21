import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Tangut**
 *
 * _Unicode Version:_ **17.0.0**
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
    {
      code: 94208,
      name: "<Tangut Ideograph, First>",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V9_0,
    },
    {
      code: 100351,
      name: "<Tangut Ideograph, Last>",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V17_0,
    },
  ],
};
