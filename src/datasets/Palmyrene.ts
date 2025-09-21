import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Palmyrene**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **67680**
 *
 * _End Code:_ **67711**
 *
 * _Total Characters:_ **32**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Palmyrene,
  startCode: 67680,
  endCode: 67711,
  characters: [
    { code: 67680, name: "PALMYRENE LETTER ALEPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67681, name: "PALMYRENE LETTER BETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67682, name: "PALMYRENE LETTER GIMEL", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67683, name: "PALMYRENE LETTER DALETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67684, name: "PALMYRENE LETTER HE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67685, name: "PALMYRENE LETTER WAW", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67686, name: "PALMYRENE LETTER ZAYIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67687, name: "PALMYRENE LETTER HETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67688, name: "PALMYRENE LETTER TETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67689, name: "PALMYRENE LETTER YODH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67690, name: "PALMYRENE LETTER KAPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67691, name: "PALMYRENE LETTER LAMEDH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67692, name: "PALMYRENE LETTER MEM", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67693, name: "PALMYRENE LETTER FINAL NUN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67694, name: "PALMYRENE LETTER NUN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67695, name: "PALMYRENE LETTER SAMEKH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67696, name: "PALMYRENE LETTER AYIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67697, name: "PALMYRENE LETTER PE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67698, name: "PALMYRENE LETTER SADHE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67699, name: "PALMYRENE LETTER QOPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67700, name: "PALMYRENE LETTER RESH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67701, name: "PALMYRENE LETTER SHIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67702, name: "PALMYRENE LETTER TAW", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 67703, name: "PALMYRENE LEFT-POINTING FLEURON", cat: Category.Other_Symbol, bidi: BidiClass.Right_To_Left },
    {
      code: 67704,
      name: "PALMYRENE RIGHT-POINTING FLEURON",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Right_To_Left,
    },
    { code: 67705, name: "PALMYRENE NUMBER ONE", cat: Category.Other_Number, bidi: BidiClass.Right_To_Left, num: "1" },
    { code: 67706, name: "PALMYRENE NUMBER TWO", cat: Category.Other_Number, bidi: BidiClass.Right_To_Left, num: "2" },
    {
      code: 67707,
      name: "PALMYRENE NUMBER THREE",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "3",
    },
    { code: 67708, name: "PALMYRENE NUMBER FOUR", cat: Category.Other_Number, bidi: BidiClass.Right_To_Left, num: "4" },
    { code: 67709, name: "PALMYRENE NUMBER FIVE", cat: Category.Other_Number, bidi: BidiClass.Right_To_Left, num: "5" },
    { code: 67710, name: "PALMYRENE NUMBER TEN", cat: Category.Other_Number, bidi: BidiClass.Right_To_Left, num: "10" },
    {
      code: 67711,
      name: "PALMYRENE NUMBER TWENTY",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "20",
    },
  ],
};
