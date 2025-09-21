import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Mandaic**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **2112**
 *
 * _End Code:_ **2143**
 *
 * _Total Characters:_ **29**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Mandaic,
  startCode: 2112,
  endCode: 2143,
  characters: [
    {
      code: 2112,
      name: "MANDAIC LETTER HALQA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Right_To_Left,
      age: Age.V6_0,
    },
    { code: 2113, name: "MANDAIC LETTER AB", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    { code: 2114, name: "MANDAIC LETTER AG", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    { code: 2115, name: "MANDAIC LETTER AD", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    { code: 2116, name: "MANDAIC LETTER AH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    {
      code: 2117,
      name: "MANDAIC LETTER USHENNA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Right_To_Left,
      age: Age.V6_0,
    },
    { code: 2118, name: "MANDAIC LETTER AZ", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    { code: 2119, name: "MANDAIC LETTER IT", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    {
      code: 2120,
      name: "MANDAIC LETTER ATT",
      cat: Category.Other_Letter,
      bidi: BidiClass.Right_To_Left,
      age: Age.V6_0,
    },
    {
      code: 2121,
      name: "MANDAIC LETTER AKSA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Right_To_Left,
      age: Age.V6_0,
    },
    { code: 2122, name: "MANDAIC LETTER AK", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    { code: 2123, name: "MANDAIC LETTER AL", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    { code: 2124, name: "MANDAIC LETTER AM", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    { code: 2125, name: "MANDAIC LETTER AN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    { code: 2126, name: "MANDAIC LETTER AS", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    { code: 2127, name: "MANDAIC LETTER IN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    { code: 2128, name: "MANDAIC LETTER AP", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    {
      code: 2129,
      name: "MANDAIC LETTER ASZ",
      cat: Category.Other_Letter,
      bidi: BidiClass.Right_To_Left,
      age: Age.V6_0,
    },
    { code: 2130, name: "MANDAIC LETTER AQ", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    { code: 2131, name: "MANDAIC LETTER AR", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    {
      code: 2132,
      name: "MANDAIC LETTER ASH",
      cat: Category.Other_Letter,
      bidi: BidiClass.Right_To_Left,
      age: Age.V6_0,
    },
    { code: 2133, name: "MANDAIC LETTER AT", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left, age: Age.V6_0 },
    {
      code: 2134,
      name: "MANDAIC LETTER DUSHENNA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Right_To_Left,
      age: Age.V6_0,
    },
    {
      code: 2135,
      name: "MANDAIC LETTER KAD",
      cat: Category.Other_Letter,
      bidi: BidiClass.Right_To_Left,
      age: Age.V6_0,
    },
    {
      code: 2136,
      name: "MANDAIC LETTER AIN",
      cat: Category.Other_Letter,
      bidi: BidiClass.Right_To_Left,
      age: Age.V6_0,
    },
    {
      code: 2137,
      name: "MANDAIC AFFRICATION MARK",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V6_0,
      comb: 220,
    },
    {
      code: 2138,
      name: "MANDAIC VOCALIZATION MARK",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V6_0,
      comb: 220,
    },
    {
      code: 2139,
      name: "MANDAIC GEMINATION MARK",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V6_0,
      comb: 220,
    },
    {
      code: 2142,
      name: "MANDAIC PUNCTUATION",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Right_To_Left,
      age: Age.V6_0,
    },
  ],
};
