import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Psalter Pahlavi**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **68480**
 *
 * _End Code:_ **68527**
 *
 * _Total Characters:_ **29**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Psalter_Pahlavi,
  startCode: 68480,
  endCode: 68527,
  characters: [
    { code: 68480, name: "PSALTER PAHLAVI LETTER ALEPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68481, name: "PSALTER PAHLAVI LETTER BETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68482, name: "PSALTER PAHLAVI LETTER GIMEL", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68483, name: "PSALTER PAHLAVI LETTER DALETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68484, name: "PSALTER PAHLAVI LETTER HE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    {
      code: 68485,
      name: "PSALTER PAHLAVI LETTER WAW-AYIN-RESH",
      cat: Category.Other_Letter,
      bidi: BidiClass.Right_To_Left,
    },
    { code: 68486, name: "PSALTER PAHLAVI LETTER ZAYIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68487, name: "PSALTER PAHLAVI LETTER HETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68488, name: "PSALTER PAHLAVI LETTER YODH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68489, name: "PSALTER PAHLAVI LETTER KAPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68490, name: "PSALTER PAHLAVI LETTER LAMEDH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68491, name: "PSALTER PAHLAVI LETTER MEM-QOPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68492, name: "PSALTER PAHLAVI LETTER NUN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68493, name: "PSALTER PAHLAVI LETTER SAMEKH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68494, name: "PSALTER PAHLAVI LETTER PE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68495, name: "PSALTER PAHLAVI LETTER SADHE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68496, name: "PSALTER PAHLAVI LETTER SHIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68497, name: "PSALTER PAHLAVI LETTER TAW", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    {
      code: 68505,
      name: "PSALTER PAHLAVI SECTION MARK",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Right_To_Left,
    },
    {
      code: 68506,
      name: "PSALTER PAHLAVI TURNED SECTION MARK",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Right_To_Left,
    },
    {
      code: 68507,
      name: "PSALTER PAHLAVI FOUR DOTS WITH CROSS",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Right_To_Left,
    },
    {
      code: 68508,
      name: "PSALTER PAHLAVI FOUR DOTS WITH DOT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Right_To_Left,
    },
    {
      code: 68521,
      name: "PSALTER PAHLAVI NUMBER ONE",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "1",
    },
    {
      code: 68522,
      name: "PSALTER PAHLAVI NUMBER TWO",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "2",
    },
    {
      code: 68523,
      name: "PSALTER PAHLAVI NUMBER THREE",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "3",
    },
    {
      code: 68524,
      name: "PSALTER PAHLAVI NUMBER FOUR",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "4",
    },
    {
      code: 68525,
      name: "PSALTER PAHLAVI NUMBER TEN",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "10",
    },
    {
      code: 68526,
      name: "PSALTER PAHLAVI NUMBER TWENTY",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "20",
    },
    {
      code: 68527,
      name: "PSALTER PAHLAVI NUMBER ONE HUNDRED",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "100",
    },
  ],
};
