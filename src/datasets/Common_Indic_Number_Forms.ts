import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Common Indic Number Forms**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **43056**
 *
 * _End Code:_ **43071**
 *
 * _Total Characters:_ **10**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Common_Indic_Number_Forms,
  startCode: 43056,
  endCode: 43071,
  characters: [
    {
      code: 43056,
      name: "NORTH INDIC FRACTION ONE QUARTER",
      cat: Category.Other_Number,
      bidi: BidiClass.Left_To_Right,
      num: "1/4",
    },
    {
      code: 43057,
      name: "NORTH INDIC FRACTION ONE HALF",
      cat: Category.Other_Number,
      bidi: BidiClass.Left_To_Right,
      num: "1/2",
    },
    {
      code: 43058,
      name: "NORTH INDIC FRACTION THREE QUARTERS",
      cat: Category.Other_Number,
      bidi: BidiClass.Left_To_Right,
      num: "3/4",
    },
    {
      code: 43059,
      name: "NORTH INDIC FRACTION ONE SIXTEENTH",
      cat: Category.Other_Number,
      bidi: BidiClass.Left_To_Right,
      num: "1/16",
    },
    {
      code: 43060,
      name: "NORTH INDIC FRACTION ONE EIGHTH",
      cat: Category.Other_Number,
      bidi: BidiClass.Left_To_Right,
      num: "1/8",
    },
    {
      code: 43061,
      name: "NORTH INDIC FRACTION THREE SIXTEENTHS",
      cat: Category.Other_Number,
      bidi: BidiClass.Left_To_Right,
      num: "3/16",
    },
    { code: 43062, name: "NORTH INDIC QUARTER MARK", cat: Category.Other_Symbol, bidi: BidiClass.Left_To_Right },
    { code: 43063, name: "NORTH INDIC PLACEHOLDER MARK", cat: Category.Other_Symbol, bidi: BidiClass.Left_To_Right },
    { code: 43064, name: "NORTH INDIC RUPEE MARK", cat: Category.Currency_Symbol, bidi: BidiClass.European_Terminator },
    { code: 43065, name: "NORTH INDIC QUANTITY MARK", cat: Category.Other_Symbol, bidi: BidiClass.European_Terminator },
  ],
};
