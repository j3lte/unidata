import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **CJK Unified Ideographs**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **19968**
 *
 * _End Code:_ **40959**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.CJK_Unified_Ideographs,
  startCode: 19968,
  endCode: 40959,
  characters: [
    {
      code: 19968,
      name: "<CJK Ideograph, First>",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V1_1,
    },
    {
      code: 40959,
      name: "<CJK Ideograph, Last>",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V14_0,
    },
  ],
};
