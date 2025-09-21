import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Old South Arabian**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **68192**
 *
 * _End Code:_ **68223**
 *
 * _Total Characters:_ **32**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Old_South_Arabian,
  startCode: 68192,
  endCode: 68223,
  characters: [
    { code: 68192, name: "OLD SOUTH ARABIAN LETTER HE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68193, name: "OLD SOUTH ARABIAN LETTER LAMEDH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68194, name: "OLD SOUTH ARABIAN LETTER HETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68195, name: "OLD SOUTH ARABIAN LETTER MEM", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68196, name: "OLD SOUTH ARABIAN LETTER QOPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68197, name: "OLD SOUTH ARABIAN LETTER WAW", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68198, name: "OLD SOUTH ARABIAN LETTER SHIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68199, name: "OLD SOUTH ARABIAN LETTER RESH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68200, name: "OLD SOUTH ARABIAN LETTER BETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68201, name: "OLD SOUTH ARABIAN LETTER TAW", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68202, name: "OLD SOUTH ARABIAN LETTER SAT", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68203, name: "OLD SOUTH ARABIAN LETTER KAPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68204, name: "OLD SOUTH ARABIAN LETTER NUN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68205, name: "OLD SOUTH ARABIAN LETTER KHETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68206, name: "OLD SOUTH ARABIAN LETTER SADHE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68207, name: "OLD SOUTH ARABIAN LETTER SAMEKH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68208, name: "OLD SOUTH ARABIAN LETTER FE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68209, name: "OLD SOUTH ARABIAN LETTER ALEF", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68210, name: "OLD SOUTH ARABIAN LETTER AYN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68211, name: "OLD SOUTH ARABIAN LETTER DHADHE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68212, name: "OLD SOUTH ARABIAN LETTER GIMEL", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68213, name: "OLD SOUTH ARABIAN LETTER DALETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68214, name: "OLD SOUTH ARABIAN LETTER GHAYN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68215, name: "OLD SOUTH ARABIAN LETTER TETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68216, name: "OLD SOUTH ARABIAN LETTER ZAYN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    {
      code: 68217,
      name: "OLD SOUTH ARABIAN LETTER DHALETH",
      cat: Category.Other_Letter,
      bidi: BidiClass.Right_To_Left,
    },
    { code: 68218, name: "OLD SOUTH ARABIAN LETTER YODH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68219, name: "OLD SOUTH ARABIAN LETTER THAW", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 68220, name: "OLD SOUTH ARABIAN LETTER THETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    {
      code: 68221,
      name: "OLD SOUTH ARABIAN NUMBER ONE",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "1",
    },
    {
      code: 68222,
      name: "OLD SOUTH ARABIAN NUMBER FIFTY",
      cat: Category.Other_Number,
      bidi: BidiClass.Right_To_Left,
      num: "50",
    },
    {
      code: 68223,
      name: "OLD SOUTH ARABIAN NUMERIC INDICATOR",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Right_To_Left,
    },
  ],
};
