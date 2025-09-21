import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Tagalog**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **5888**
 *
 * _End Code:_ **5919**
 *
 * _Total Characters:_ **23**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Tagalog,
  startCode: 5888,
  endCode: 5919,
  characters: [
    { code: 5888, name: "TAGALOG LETTER A", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5889, name: "TAGALOG LETTER I", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5890, name: "TAGALOG LETTER U", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5891, name: "TAGALOG LETTER KA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5892, name: "TAGALOG LETTER GA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    {
      code: 5893,
      name: "TAGALOG LETTER NGA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    { code: 5894, name: "TAGALOG LETTER TA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5895, name: "TAGALOG LETTER DA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5896, name: "TAGALOG LETTER NA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5897, name: "TAGALOG LETTER PA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5898, name: "TAGALOG LETTER BA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5899, name: "TAGALOG LETTER MA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5900, name: "TAGALOG LETTER YA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    {
      code: 5901,
      name: "TAGALOG LETTER RA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V14_0,
    },
    { code: 5902, name: "TAGALOG LETTER LA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5903, name: "TAGALOG LETTER WA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5904, name: "TAGALOG LETTER SA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5905, name: "TAGALOG LETTER HA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    {
      code: 5906,
      name: "TAGALOG VOWEL SIGN I",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V3_2,
    },
    {
      code: 5907,
      name: "TAGALOG VOWEL SIGN U",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V3_2,
    },
    {
      code: 5908,
      name: "TAGALOG SIGN VIRAMA",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V3_2,
      comb: 9,
    },
    {
      code: 5909,
      name: "TAGALOG SIGN PAMUDPOD",
      cat: Category.Spacing_Mark,
      bidi: BidiClass.Left_To_Right,
      age: Age.V14_0,
      comb: 9,
    },
    {
      code: 5919,
      name: "TAGALOG LETTER ARCHAIC RA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V14_0,
    },
  ],
};
