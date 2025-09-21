import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Gothic**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **66352**
 *
 * _End Code:_ **66383**
 *
 * _Total Characters:_ **27**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Gothic,
  startCode: 66352,
  endCode: 66383,
  characters: [
    { code: 66352, name: "GOTHIC LETTER AHSA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66353, name: "GOTHIC LETTER BAIRKAN", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66354, name: "GOTHIC LETTER GIBA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66355, name: "GOTHIC LETTER DAGS", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66356, name: "GOTHIC LETTER AIHVUS", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66357, name: "GOTHIC LETTER QAIRTHRA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66358, name: "GOTHIC LETTER IUJA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66359, name: "GOTHIC LETTER HAGL", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66360, name: "GOTHIC LETTER THIUTH", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66361, name: "GOTHIC LETTER EIS", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66362, name: "GOTHIC LETTER KUSMA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66363, name: "GOTHIC LETTER LAGUS", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66364, name: "GOTHIC LETTER MANNA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66365, name: "GOTHIC LETTER NAUTHS", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66366, name: "GOTHIC LETTER JER", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66367, name: "GOTHIC LETTER URUS", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66368, name: "GOTHIC LETTER PAIRTHRA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    {
      code: 66369,
      name: "GOTHIC LETTER NINETY",
      cat: Category.Letter_Number,
      bidi: BidiClass.Left_To_Right,
      num: "90",
    },
    { code: 66370, name: "GOTHIC LETTER RAIDA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66371, name: "GOTHIC LETTER SAUIL", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66372, name: "GOTHIC LETTER TEIWS", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66373, name: "GOTHIC LETTER WINJA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66374, name: "GOTHIC LETTER FAIHU", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66375, name: "GOTHIC LETTER IGGWS", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66376, name: "GOTHIC LETTER HWAIR", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 66377, name: "GOTHIC LETTER OTHAL", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    {
      code: 66378,
      name: "GOTHIC LETTER NINE HUNDRED",
      cat: Category.Letter_Number,
      bidi: BidiClass.Left_To_Right,
      num: "900",
    },
  ],
};
