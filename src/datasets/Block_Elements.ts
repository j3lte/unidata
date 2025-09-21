import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Block Elements**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **9600**
 *
 * _End Code:_ **9631**
 *
 * _Total Characters:_ **32**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Block_Elements,
  startCode: 9600,
  endCode: 9631,
  characters: [
    { code: 9600, name: "UPPER HALF BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9601, name: "LOWER ONE EIGHTH BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9602, name: "LOWER ONE QUARTER BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9603, name: "LOWER THREE EIGHTHS BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9604, name: "LOWER HALF BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9605, name: "LOWER FIVE EIGHTHS BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    {
      code: 9606,
      name: "LOWER THREE QUARTERS BLOCK",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      oldName: "LOWER THREE QUARTER BLOCK",
    },
    { code: 9607, name: "LOWER SEVEN EIGHTHS BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9608, name: "FULL BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9609, name: "LEFT SEVEN EIGHTHS BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    {
      code: 9610,
      name: "LEFT THREE QUARTERS BLOCK",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      oldName: "LEFT THREE QUARTER BLOCK",
    },
    { code: 9611, name: "LEFT FIVE EIGHTHS BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9612, name: "LEFT HALF BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9613, name: "LEFT THREE EIGHTHS BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9614, name: "LEFT ONE QUARTER BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9615, name: "LEFT ONE EIGHTH BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9616, name: "RIGHT HALF BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9617, name: "LIGHT SHADE", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9618, name: "MEDIUM SHADE", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9619, name: "DARK SHADE", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9620, name: "UPPER ONE EIGHTH BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9621, name: "RIGHT ONE EIGHTH BLOCK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9622, name: "QUADRANT LOWER LEFT", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9623, name: "QUADRANT LOWER RIGHT", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9624, name: "QUADRANT UPPER LEFT", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    {
      code: 9625,
      name: "QUADRANT UPPER LEFT AND LOWER LEFT AND LOWER RIGHT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 9626,
      name: "QUADRANT UPPER LEFT AND LOWER RIGHT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 9627,
      name: "QUADRANT UPPER LEFT AND UPPER RIGHT AND LOWER LEFT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 9628,
      name: "QUADRANT UPPER LEFT AND UPPER RIGHT AND LOWER RIGHT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    { code: 9629, name: "QUADRANT UPPER RIGHT", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    {
      code: 9630,
      name: "QUADRANT UPPER RIGHT AND LOWER LEFT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 9631,
      name: "QUADRANT UPPER RIGHT AND LOWER LEFT AND LOWER RIGHT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
  ],
};
