import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Tangut Supplement**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **101632**
 *
 * _End Code:_ **101759**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Tangut_Supplement,
  startCode: 101632,
  endCode: 101759,
  characters: [
    {
      code: 101632,
      name: "<Tangut Ideograph Supplement, First>",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V13_0,
    },
    {
      code: 101662,
      name: "<Tangut Ideograph Supplement, Last>",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V17_0,
    },
  ],
};
