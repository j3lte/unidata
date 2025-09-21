import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Arabic Extended-C**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **69312**
 *
 * _End Code:_ **69375**
 *
 * _Total Characters:_ **21**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Arabic_Extended_C,
  startCode: 69312,
  endCode: 69375,
  characters: [
    {
      code: 69314,
      name: "ARABIC LETTER DAL WITH TWO DOTS VERTICALLY BELOW",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 69315,
      name: "ARABIC LETTER TAH WITH TWO DOTS VERTICALLY BELOW",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 69316,
      name: "ARABIC LETTER KAF WITH TWO DOTS VERTICALLY BELOW",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 69317,
      name: "ARABIC SMALL YEH BARREE WITH TWO DOTS BELOW",
      cat: Category.Modifier_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    { code: 69318, name: "ARABIC LETTER THIN NOON", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    {
      code: 69319,
      name: "ARABIC LETTER YEH WITH FOUR DOTS BELOW",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 69328,
      name: "ARABIC BIBLICAL END OF VERSE",
      cat: Category.Other_Punctuation,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 69329,
      name: "ARABIC LIGATURE ALAYHAA AS-SALAATU WAS-SALAAM",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 69330,
      name: "ARABIC LIGATURE ALAYHIM AS-SALAATU WAS-SALAAM",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 69331,
      name: "ARABIC LIGATURE ALAYHIMAA AS-SALAATU WAS-SALAAM",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 69332,
      name: "ARABIC LIGATURE QADDASA ALLAAHU SIRRAH",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 69333,
      name: "ARABIC LIGATURE QUDDISA SIRRUHUM",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 69334,
      name: "ARABIC LIGATURE QUDDISA SIRRUHUMAA",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 69335,
      name: "ARABIC LIGATURE QUDDISAT ASRAARUHUM",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 69336,
      name: "ARABIC LIGATURE NAWWARA ALLAAHU MARQADAH",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 69370,
      name: "ARABIC DOUBLE VERTICAL BAR BELOW",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 69371,
      name: "ARABIC SMALL LOW NOON",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 69372,
      name: "ARABIC COMBINING ALEF OVERLAY",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
    },
    {
      code: 69373,
      name: "ARABIC SMALL LOW WORD SAKTA",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 69374,
      name: "ARABIC SMALL LOW WORD QASR",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 69375,
      name: "ARABIC SMALL LOW WORD MADDA",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
  ],
};
