import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs Extension E**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **178208**
 *
 * _End Code:_ **183983**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs_Extension_E,
  startCode: 178208,
  endCode: 183983,
  characters: [
    {
      code: 178208,
      name: "<CJK Ideograph Extension E, First>",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V8_0,
    },
    {
      code: 183981,
      name: "<CJK Ideograph Extension E, Last>",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V17_0,
    },
  ],
};
