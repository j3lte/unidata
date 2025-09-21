import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Sogdian**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **69424**
 *
 * _End Code:_ **69487**
 *
 * _Total Characters:_ **42**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Sogdian,
  startCode: 69424,
  endCode: 69487,
  characters: [
    { code: 69424, name: "SOGDIAN LETTER ALEPH", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69425, name: "SOGDIAN LETTER BETH", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69426, name: "SOGDIAN LETTER GIMEL", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69427, name: "SOGDIAN LETTER HE", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69428, name: "SOGDIAN LETTER WAW", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69429, name: "SOGDIAN LETTER ZAYIN", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69430, name: "SOGDIAN LETTER HETH", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69431, name: "SOGDIAN LETTER YODH", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69432, name: "SOGDIAN LETTER KAPH", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69433, name: "SOGDIAN LETTER LAMEDH", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69434, name: "SOGDIAN LETTER MEM", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69435, name: "SOGDIAN LETTER NUN", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69436, name: "SOGDIAN LETTER SAMEKH", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69437, name: "SOGDIAN LETTER AYIN", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69438, name: "SOGDIAN LETTER PE", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69439, name: "SOGDIAN LETTER SADHE", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69440, name: "SOGDIAN LETTER RESH-AYIN", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69441, name: "SOGDIAN LETTER SHIN", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69442, name: "SOGDIAN LETTER TAW", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69443, name: "SOGDIAN LETTER FETH", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69444, name: "SOGDIAN LETTER LESH", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 69445, name: "SOGDIAN INDEPENDENT SHIN", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    {
      code: 69446,
      name: "SOGDIAN COMBINING DOT BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 69447,
      name: "SOGDIAN COMBINING TWO DOTS BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 69448,
      name: "SOGDIAN COMBINING DOT ABOVE",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 230,
    },
    {
      code: 69449,
      name: "SOGDIAN COMBINING TWO DOTS ABOVE",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 230,
    },
    {
      code: 69450,
      name: "SOGDIAN COMBINING CURVE ABOVE",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 230,
    },
    {
      code: 69451,
      name: "SOGDIAN COMBINING CURVE BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 69452,
      name: "SOGDIAN COMBINING HOOK ABOVE",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 230,
    },
    {
      code: 69453,
      name: "SOGDIAN COMBINING HOOK BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 69454,
      name: "SOGDIAN COMBINING LONG HOOK BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 69455,
      name: "SOGDIAN COMBINING RESH BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 69456,
      name: "SOGDIAN COMBINING STROKE BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    { code: 69457, name: "SOGDIAN NUMBER ONE", cat: Category.Other_Number, bidi: BidiClass.Arabic_Letter, num: "1" },
    { code: 69458, name: "SOGDIAN NUMBER TEN", cat: Category.Other_Number, bidi: BidiClass.Arabic_Letter, num: "10" },
    {
      code: 69459,
      name: "SOGDIAN NUMBER TWENTY",
      cat: Category.Other_Number,
      bidi: BidiClass.Arabic_Letter,
      num: "20",
    },
    {
      code: 69460,
      name: "SOGDIAN NUMBER ONE HUNDRED",
      cat: Category.Other_Number,
      bidi: BidiClass.Arabic_Letter,
      num: "100",
    },
    {
      code: 69461,
      name: "SOGDIAN PUNCTUATION TWO VERTICAL BARS",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 69462,
      name: "SOGDIAN PUNCTUATION TWO VERTICAL BARS WITH DOTS",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 69463,
      name: "SOGDIAN PUNCTUATION CIRCLE WITH DOT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 69464,
      name: "SOGDIAN PUNCTUATION TWO CIRCLES WITH DOTS",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 69465,
      name: "SOGDIAN PUNCTUATION HALF CIRCLE WITH DOT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Arabic_Letter,
    },
  ],
};
