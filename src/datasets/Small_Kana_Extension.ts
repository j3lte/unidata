import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Small Kana Extension**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **110896**
 *
 * _End Code:_ **110959**
 *
 * _Total Characters:_ **9**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Small_Kana_Extension,
  startCode: 110896,
  endCode: 110959,
  characters: [
    {
      code: 110898,
      name: "HIRAGANA LETTER SMALL KO",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V15_0,
    },
    {
      code: 110928,
      name: "HIRAGANA LETTER SMALL WI",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V12_0,
    },
    {
      code: 110929,
      name: "HIRAGANA LETTER SMALL WE",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V12_0,
    },
    {
      code: 110930,
      name: "HIRAGANA LETTER SMALL WO",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V12_0,
    },
    {
      code: 110933,
      name: "KATAKANA LETTER SMALL KO",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V15_0,
    },
    {
      code: 110948,
      name: "KATAKANA LETTER SMALL WI",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V12_0,
    },
    {
      code: 110949,
      name: "KATAKANA LETTER SMALL WE",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V12_0,
    },
    {
      code: 110950,
      name: "KATAKANA LETTER SMALL WO",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V12_0,
    },
    {
      code: 110951,
      name: "KATAKANA LETTER SMALL N",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V12_0,
    },
  ],
};
