import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Combining Half Marks**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **65056**
 *
 * _End Code:_ **65071**
 *
 * _Total Characters:_ **16**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Combining_Half_Marks,
  startCode: 65056,
  endCode: 65071,
  characters: [
    {
      code: 65056,
      name: "COMBINING LIGATURE LEFT HALF",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V1_1,
      comb: 230,
    },
    {
      code: 65057,
      name: "COMBINING LIGATURE RIGHT HALF",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V1_1,
      comb: 230,
    },
    {
      code: 65058,
      name: "COMBINING DOUBLE TILDE LEFT HALF",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V1_1,
      comb: 230,
    },
    {
      code: 65059,
      name: "COMBINING DOUBLE TILDE RIGHT HALF",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V1_1,
      comb: 230,
    },
    {
      code: 65060,
      name: "COMBINING MACRON LEFT HALF",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V5_1,
      comb: 230,
    },
    {
      code: 65061,
      name: "COMBINING MACRON RIGHT HALF",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V5_1,
      comb: 230,
    },
    {
      code: 65062,
      name: "COMBINING CONJOINING MACRON",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V5_1,
      comb: 230,
    },
    {
      code: 65063,
      name: "COMBINING LIGATURE LEFT HALF BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V7_0,
      comb: 220,
    },
    {
      code: 65064,
      name: "COMBINING LIGATURE RIGHT HALF BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V7_0,
      comb: 220,
    },
    {
      code: 65065,
      name: "COMBINING TILDE LEFT HALF BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V7_0,
      comb: 220,
    },
    {
      code: 65066,
      name: "COMBINING TILDE RIGHT HALF BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V7_0,
      comb: 220,
    },
    {
      code: 65067,
      name: "COMBINING MACRON LEFT HALF BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V7_0,
      comb: 220,
    },
    {
      code: 65068,
      name: "COMBINING MACRON RIGHT HALF BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V7_0,
      comb: 220,
    },
    {
      code: 65069,
      name: "COMBINING CONJOINING MACRON BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V7_0,
      comb: 220,
    },
    {
      code: 65070,
      name: "COMBINING CYRILLIC TITLO LEFT HALF",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V8_0,
      comb: 230,
    },
    {
      code: 65071,
      name: "COMBINING CYRILLIC TITLO RIGHT HALF",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      age: Age.V8_0,
      comb: 230,
    },
  ],
};
