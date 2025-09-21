import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Tagbanwa**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **5984**
 *
 * _End Code:_ **6015**
 *
 * _Total Characters:_ **18**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Tagbanwa,
  startCode: 5984,
  endCode: 6015,
  characters: [
    { code: 5984, name: "TAGBANWA LETTER A", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5985, name: "TAGBANWA LETTER I", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5986, name: "TAGBANWA LETTER U", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    {
      code: 5987,
      name: "TAGBANWA LETTER KA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 5988,
      name: "TAGBANWA LETTER GA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 5989,
      name: "TAGBANWA LETTER NGA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 5990,
      name: "TAGBANWA LETTER TA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 5991,
      name: "TAGBANWA LETTER DA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 5992,
      name: "TAGBANWA LETTER NA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 5993,
      name: "TAGBANWA LETTER PA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 5994,
      name: "TAGBANWA LETTER BA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 5995,
      name: "TAGBANWA LETTER MA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 5996,
      name: "TAGBANWA LETTER YA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 5998,
      name: "TAGBANWA LETTER LA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 5999,
      name: "TAGBANWA LETTER WA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 6000,
      name: "TAGBANWA LETTER SA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 6002,
      name: "TAGBANWA VOWEL SIGN I",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V3_2,
    },
    {
      code: 6003,
      name: "TAGBANWA VOWEL SIGN U",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V3_2,
    },
  ],
};
