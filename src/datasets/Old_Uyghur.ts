import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Old Uyghur**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **69488**
 *
 * _End Code:_ **69551**
 *
 * _Total Characters:_ **26**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Old_Uyghur,
  startCode: 69488,
  endCode: 69551,
  characters: [
    { code: 69488, name: "OLD UYGHUR LETTER ALEPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69489, name: "OLD UYGHUR LETTER BETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69490, name: "OLD UYGHUR LETTER GIMEL-HETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69491, name: "OLD UYGHUR LETTER WAW", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69492, name: "OLD UYGHUR LETTER ZAYIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69493, name: "OLD UYGHUR LETTER FINAL HETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69494, name: "OLD UYGHUR LETTER YODH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69495, name: "OLD UYGHUR LETTER KAPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69496, name: "OLD UYGHUR LETTER LAMEDH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69497, name: "OLD UYGHUR LETTER MEM", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69498, name: "OLD UYGHUR LETTER NUN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69499, name: "OLD UYGHUR LETTER SAMEKH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69500, name: "OLD UYGHUR LETTER PE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69501, name: "OLD UYGHUR LETTER SADHE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69502, name: "OLD UYGHUR LETTER RESH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69503, name: "OLD UYGHUR LETTER SHIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69504, name: "OLD UYGHUR LETTER TAW", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69505, name: "OLD UYGHUR LETTER LESH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    {
      code: 69506,
      name: "OLD UYGHUR COMBINING DOT ABOVE",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 230,
    },
    {
      code: 69507,
      name: "OLD UYGHUR COMBINING DOT BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 69508,
      name: "OLD UYGHUR COMBINING TWO DOTS ABOVE",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 230,
    },
    {
      code: 69509,
      name: "OLD UYGHUR COMBINING TWO DOTS BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    { code: 69510, name: "OLD UYGHUR PUNCTUATION BAR", cat: Category.Other_Punctuation, bidi: BidiClass.Right_To_Left },
    {
      code: 69511,
      name: "OLD UYGHUR PUNCTUATION TWO BARS",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Right_To_Left,
    },
    {
      code: 69512,
      name: "OLD UYGHUR PUNCTUATION TWO DOTS",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Right_To_Left,
    },
    {
      code: 69513,
      name: "OLD UYGHUR PUNCTUATION FOUR DOTS",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Right_To_Left,
    },
  ],
};
