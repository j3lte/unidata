import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Imperial Aramaic**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **67648**
 *
 * _End Code:_ **67679**
 *
 * _Total Characters:_ **31**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Imperial_Aramaic,
  startCode: 67648,
  endCode: 67679,
  characters: [
    { code: 67648, name: "IMPERIAL ARAMAIC LETTER ALEPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67649, name: "IMPERIAL ARAMAIC LETTER BETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67650, name: "IMPERIAL ARAMAIC LETTER GIMEL", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67651, name: "IMPERIAL ARAMAIC LETTER DALETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67652, name: "IMPERIAL ARAMAIC LETTER HE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67653, name: "IMPERIAL ARAMAIC LETTER WAW", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67654, name: "IMPERIAL ARAMAIC LETTER ZAYIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67655, name: "IMPERIAL ARAMAIC LETTER HETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67656, name: "IMPERIAL ARAMAIC LETTER TETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67657, name: "IMPERIAL ARAMAIC LETTER YODH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67658, name: "IMPERIAL ARAMAIC LETTER KAPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67659, name: "IMPERIAL ARAMAIC LETTER LAMEDH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67660, name: "IMPERIAL ARAMAIC LETTER MEM", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67661, name: "IMPERIAL ARAMAIC LETTER NUN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67662, name: "IMPERIAL ARAMAIC LETTER SAMEKH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67663, name: "IMPERIAL ARAMAIC LETTER AYIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67664, name: "IMPERIAL ARAMAIC LETTER PE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67665, name: "IMPERIAL ARAMAIC LETTER SADHE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67666, name: "IMPERIAL ARAMAIC LETTER QOPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67667, name: "IMPERIAL ARAMAIC LETTER RESH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67668, name: "IMPERIAL ARAMAIC LETTER SHIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67669, name: "IMPERIAL ARAMAIC LETTER TAW", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    {
      code: 67671,
      name: "IMPERIAL ARAMAIC SECTION SIGN",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Right_To_Left,
    },
    {
      code: 67672,
      name: "IMPERIAL ARAMAIC NUMBER ONE",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "1",
    },
    {
      code: 67673,
      name: "IMPERIAL ARAMAIC NUMBER TWO",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "2",
    },
    {
      code: 67674,
      name: "IMPERIAL ARAMAIC NUMBER THREE",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "3",
    },
    {
      code: 67675,
      name: "IMPERIAL ARAMAIC NUMBER TEN",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "10",
    },
    {
      code: 67676,
      name: "IMPERIAL ARAMAIC NUMBER TWENTY",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "20",
    },
    {
      code: 67677,
      name: "IMPERIAL ARAMAIC NUMBER ONE HUNDRED",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "100",
    },
    {
      code: 67678,
      name: "IMPERIAL ARAMAIC NUMBER ONE THOUSAND",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "1000",
    },
    {
      code: 67679,
      name: "IMPERIAL ARAMAIC NUMBER TEN THOUSAND",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "10000",
    },
  ],
};
