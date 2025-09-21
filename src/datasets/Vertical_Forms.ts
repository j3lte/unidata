import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Vertical Forms**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **65040**
 *
 * _End Code:_ **65055**
 *
 * _Total Characters:_ **10**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Vertical_Forms,
  startCode: 65040,
  endCode: 65055,
  characters: [
    {
      code: 65040,
      name: "PRESENTATION FORM FOR VERTICAL COMMA",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
      age: Age.V4_1,
      decomp: [44],
      decompType: "vertical",
    },
    {
      code: 65041,
      name: "PRESENTATION FORM FOR VERTICAL IDEOGRAPHIC COMMA",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
      age: Age.V4_1,
      decomp: [12289],
      decompType: "vertical",
    },
    {
      code: 65042,
      name: "PRESENTATION FORM FOR VERTICAL IDEOGRAPHIC FULL STOP",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
      age: Age.V4_1,
      decomp: [12290],
      decompType: "vertical",
    },
    {
      code: 65043,
      name: "PRESENTATION FORM FOR VERTICAL COLON",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
      age: Age.V4_1,
      decomp: [58],
      decompType: "vertical",
    },
    {
      code: 65044,
      name: "PRESENTATION FORM FOR VERTICAL SEMICOLON",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
      age: Age.V4_1,
      decomp: [59],
      decompType: "vertical",
    },
    {
      code: 65045,
      name: "PRESENTATION FORM FOR VERTICAL EXCLAMATION MARK",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
      age: Age.V4_1,
      decomp: [33],
      decompType: "vertical",
    },
    {
      code: 65046,
      name: "PRESENTATION FORM FOR VERTICAL QUESTION MARK",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
      age: Age.V4_1,
      decomp: [63],
      decompType: "vertical",
    },
    {
      code: 65047,
      name: "PRESENTATION FORM FOR VERTICAL LEFT WHITE LENTICULAR BRACKET",
      cat: Category.Open_Punctuation,
      bidi: BidiClass.Other_Neutral,
      age: Age.V4_1,
      decomp: [12310],
      decompType: "vertical",
    },
    {
      code: 65048,
      name: "PRESENTATION FORM FOR VERTICAL RIGHT WHITE LENTICULAR BRAKCET",
      cat: Category.Close_Punctuation,
      bidi: BidiClass.Other_Neutral,
      age: Age.V4_1,
      decomp: [12311],
      decompType: "vertical",
    },
    {
      code: 65049,
      name: "PRESENTATION FORM FOR VERTICAL HORIZONTAL ELLIPSIS",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
      age: Age.V4_1,
      decomp: [8230],
      decompType: "vertical",
    },
  ],
};
