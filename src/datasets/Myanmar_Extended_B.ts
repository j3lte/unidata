import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Myanmar Extended-B**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **43488**
 *
 * _End Code:_ **43519**
 *
 * _Total Characters:_ **31**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Myanmar_Extended_B,
  startCode: 43488,
  endCode: 43519,
  characters: [
    { code: 43488, name: "MYANMAR LETTER SHAN GHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43489, name: "MYANMAR LETTER SHAN CHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43490, name: "MYANMAR LETTER SHAN JHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43491, name: "MYANMAR LETTER SHAN NNA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43492, name: "MYANMAR LETTER SHAN BHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43493, name: "MYANMAR SIGN SHAN SAW", cat: Category.Nonspacing_Mark, bidi: BidiClass.Nonspacing_Mark },
    {
      code: 43494,
      name: "MYANMAR MODIFIER LETTER SHAN REDUPLICATION",
      cat: Category.Modifier_Letter,
      bidi: BidiClass.Left_To_Right,
    },
    { code: 43495, name: "MYANMAR LETTER TAI LAING NYA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43496, name: "MYANMAR LETTER TAI LAING FA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43497, name: "MYANMAR LETTER TAI LAING GA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43498, name: "MYANMAR LETTER TAI LAING GHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43499, name: "MYANMAR LETTER TAI LAING JA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43500, name: "MYANMAR LETTER TAI LAING JHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43501, name: "MYANMAR LETTER TAI LAING DDA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43502, name: "MYANMAR LETTER TAI LAING DDHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43503, name: "MYANMAR LETTER TAI LAING NNA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    {
      code: 43504,
      name: "MYANMAR TAI LAING DIGIT ZERO",
      cat: Category.Decimal_Number,
      bidi: BidiClass.Left_To_Right,
      num: "0",
    },
    {
      code: 43505,
      name: "MYANMAR TAI LAING DIGIT ONE",
      cat: Category.Decimal_Number,
      bidi: BidiClass.Left_To_Right,
      num: "1",
    },
    {
      code: 43506,
      name: "MYANMAR TAI LAING DIGIT TWO",
      cat: Category.Decimal_Number,
      bidi: BidiClass.Left_To_Right,
      num: "2",
    },
    {
      code: 43507,
      name: "MYANMAR TAI LAING DIGIT THREE",
      cat: Category.Decimal_Number,
      bidi: BidiClass.Left_To_Right,
      num: "3",
    },
    {
      code: 43508,
      name: "MYANMAR TAI LAING DIGIT FOUR",
      cat: Category.Decimal_Number,
      bidi: BidiClass.Left_To_Right,
      num: "4",
    },
    {
      code: 43509,
      name: "MYANMAR TAI LAING DIGIT FIVE",
      cat: Category.Decimal_Number,
      bidi: BidiClass.Left_To_Right,
      num: "5",
    },
    {
      code: 43510,
      name: "MYANMAR TAI LAING DIGIT SIX",
      cat: Category.Decimal_Number,
      bidi: BidiClass.Left_To_Right,
      num: "6",
    },
    {
      code: 43511,
      name: "MYANMAR TAI LAING DIGIT SEVEN",
      cat: Category.Decimal_Number,
      bidi: BidiClass.Left_To_Right,
      num: "7",
    },
    {
      code: 43512,
      name: "MYANMAR TAI LAING DIGIT EIGHT",
      cat: Category.Decimal_Number,
      bidi: BidiClass.Left_To_Right,
      num: "8",
    },
    {
      code: 43513,
      name: "MYANMAR TAI LAING DIGIT NINE",
      cat: Category.Decimal_Number,
      bidi: BidiClass.Left_To_Right,
      num: "9",
    },
    { code: 43514, name: "MYANMAR LETTER TAI LAING LLA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43515, name: "MYANMAR LETTER TAI LAING DA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43516, name: "MYANMAR LETTER TAI LAING DHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43517, name: "MYANMAR LETTER TAI LAING BA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43518, name: "MYANMAR LETTER TAI LAING BHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
  ],
};
