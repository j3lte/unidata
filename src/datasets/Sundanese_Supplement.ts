import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Sundanese Supplement**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **7360**
 *
 * _End Code:_ **7375**
 *
 * _Total Characters:_ **8**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Sundanese_Supplement,
  startCode: 7360,
  endCode: 7375,
  characters: [
    {
      code: 7360,
      name: "SUNDANESE PUNCTUATION BINDU SURYA",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Left_To_Right,
    },
    {
      code: 7361,
      name: "SUNDANESE PUNCTUATION BINDU PANGLONG",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Left_To_Right,
    },
    {
      code: 7362,
      name: "SUNDANESE PUNCTUATION BINDU PURNAMA",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Left_To_Right,
    },
    {
      code: 7363,
      name: "SUNDANESE PUNCTUATION BINDU CAKRA",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Left_To_Right,
    },
    {
      code: 7364,
      name: "SUNDANESE PUNCTUATION BINDU LEU SATANGA",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Left_To_Right,
    },
    {
      code: 7365,
      name: "SUNDANESE PUNCTUATION BINDU KA SATANGA",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Left_To_Right,
    },
    {
      code: 7366,
      name: "SUNDANESE PUNCTUATION BINDU DA SATANGA",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Left_To_Right,
    },
    {
      code: 7367,
      name: "SUNDANESE PUNCTUATION BINDU BA SATANGA",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Left_To_Right,
    },
  ],
};
