import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Elymaic**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **69600**
 *
 * _End Code:_ **69631**
 *
 * _Total Characters:_ **23**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Elymaic,
  startCode: 69600,
  endCode: 69631,
  characters: [
    { code: 69600, name: "ELYMAIC LETTER ALEPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69601, name: "ELYMAIC LETTER BETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69602, name: "ELYMAIC LETTER GIMEL", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69603, name: "ELYMAIC LETTER DALETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69604, name: "ELYMAIC LETTER HE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69605, name: "ELYMAIC LETTER WAW", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69606, name: "ELYMAIC LETTER ZAYIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69607, name: "ELYMAIC LETTER HETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69608, name: "ELYMAIC LETTER TETH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69609, name: "ELYMAIC LETTER YODH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69610, name: "ELYMAIC LETTER KAPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69611, name: "ELYMAIC LETTER LAMEDH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69612, name: "ELYMAIC LETTER MEM", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69613, name: "ELYMAIC LETTER NUN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69614, name: "ELYMAIC LETTER SAMEKH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69615, name: "ELYMAIC LETTER AYIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69616, name: "ELYMAIC LETTER PE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69617, name: "ELYMAIC LETTER SADHE", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69618, name: "ELYMAIC LETTER QOPH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69619, name: "ELYMAIC LETTER RESH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69620, name: "ELYMAIC LETTER SHIN", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69621, name: "ELYMAIC LETTER TAW", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
    { code: 69622, name: "ELYMAIC LIGATURE ZAYIN-YODH", cat: Category.Other_Letter, bidi: BidiClass.Right_To_Left },
  ],
};
