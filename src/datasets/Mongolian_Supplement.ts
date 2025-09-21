import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Mongolian Supplement**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **71264**
 *
 * _End Code:_ **71295**
 *
 * _Total Characters:_ **13**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Mongolian_Supplement,
  startCode: 71264,
  endCode: 71295,
  characters: [
    {
      code: 71264,
      name: "MONGOLIAN BIRGA WITH ORNAMENT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
    },
    { code: 71265, name: "MONGOLIAN ROTATED BIRGA", cat: Category.Other_Punctuation, bidi: BidiClass.Other_Neutral },
    {
      code: 71266,
      name: "MONGOLIAN DOUBLE BIRGA WITH ORNAMENT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 71267,
      name: "MONGOLIAN TRIPLE BIRGA WITH ORNAMENT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 71268,
      name: "MONGOLIAN BIRGA WITH DOUBLE ORNAMENT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 71269,
      name: "MONGOLIAN ROTATED BIRGA WITH ORNAMENT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 71270,
      name: "MONGOLIAN ROTATED BIRGA WITH DOUBLE ORNAMENT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
    },
    { code: 71271, name: "MONGOLIAN INVERTED BIRGA", cat: Category.Other_Punctuation, bidi: BidiClass.Other_Neutral },
    {
      code: 71272,
      name: "MONGOLIAN INVERTED BIRGA WITH DOUBLE ORNAMENT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
    },
    { code: 71273, name: "MONGOLIAN SWIRL BIRGA", cat: Category.Other_Punctuation, bidi: BidiClass.Other_Neutral },
    {
      code: 71274,
      name: "MONGOLIAN SWIRL BIRGA WITH ORNAMENT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 71275,
      name: "MONGOLIAN SWIRL BIRGA WITH DOUBLE ORNAMENT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 71276,
      name: "MONGOLIAN TURNED SWIRL BIRGA WITH DOUBLE ORNAMENT",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
    },
  ],
};
