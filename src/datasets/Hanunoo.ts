import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Hanunoo**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **5920**
 *
 * _End Code:_ **5951**
 *
 * _Total Characters:_ **23**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Hanunoo,
  startCode: 5920,
  endCode: 5951,
  characters: [
    { code: 5920, name: "HANUNOO LETTER A", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5921, name: "HANUNOO LETTER I", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5922, name: "HANUNOO LETTER U", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5923, name: "HANUNOO LETTER KA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5924, name: "HANUNOO LETTER GA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    {
      code: 5925,
      name: "HANUNOO LETTER NGA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    { code: 5926, name: "HANUNOO LETTER TA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5927, name: "HANUNOO LETTER DA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5928, name: "HANUNOO LETTER NA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5929, name: "HANUNOO LETTER PA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5930, name: "HANUNOO LETTER BA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5931, name: "HANUNOO LETTER MA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5932, name: "HANUNOO LETTER YA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5933, name: "HANUNOO LETTER RA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5934, name: "HANUNOO LETTER LA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5935, name: "HANUNOO LETTER WA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5936, name: "HANUNOO LETTER SA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    { code: 5937, name: "HANUNOO LETTER HA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_2 },
    {
      code: 5938,
      name: "HANUNOO VOWEL SIGN I",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V3_2,
    },
    {
      code: 5939,
      name: "HANUNOO VOWEL SIGN U",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V3_2,
    },
    {
      code: 5940,
      name: "HANUNOO SIGN PAMUDPOD",
      cat: Category.Spacing_Mark,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
      comb: 9,
    },
    {
      code: 5941,
      name: "PHILIPPINE SINGLE PUNCTUATION",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
    {
      code: 5942,
      name: "PHILIPPINE DOUBLE PUNCTUATION",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_2,
    },
  ],
};
