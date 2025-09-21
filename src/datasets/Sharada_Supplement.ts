import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Sharada Supplement**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **72544**
 *
 * _End Code:_ **72575**
 *
 * _Total Characters:_ **8**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Sharada_Supplement,
  startCode: 72544,
  endCode: 72575,
  characters: [
    {
      code: 72544,
      name: "SHARADA VOWEL SIGN OE",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V17_0,
    },
    {
      code: 72545,
      name: "SHARADA VOWEL SIGN OOE",
      cat: Category.Spacing_Mark,
      bidi: BidiClass.Left_To_Right,
      age: Age.V17_0,
    },
    {
      code: 72546,
      name: "SHARADA VOWEL SIGN UE",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V17_0,
    },
    {
      code: 72547,
      name: "SHARADA VOWEL SIGN UUE",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V17_0,
    },
    {
      code: 72548,
      name: "SHARADA VOWEL SIGN SHORT E",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V17_0,
    },
    {
      code: 72549,
      name: "SHARADA VOWEL SIGN SHORT O",
      cat: Category.Spacing_Mark,
      bidi: BidiClass.Left_To_Right,
      age: Age.V17_0,
    },
    {
      code: 72550,
      name: "SHARADA VOWEL SIGN CANDRA E",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V17_0,
    },
    {
      code: 72551,
      name: "SHARADA VOWEL SIGN CANDRA O",
      cat: Category.Spacing_Mark,
      bidi: BidiClass.Left_To_Right,
      age: Age.V17_0,
    },
  ],
};
