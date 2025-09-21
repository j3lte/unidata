import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Arabic Extended-B**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **2160**
 *
 * _End Code:_ **2207**
 *
 * _Total Characters:_ **43**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Arabic_Extended_B,
  startCode: 2160,
  endCode: 2207,
  characters: [
    {
      code: 2160,
      name: "ARABIC LETTER ALEF WITH ATTACHED FATHA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2161,
      name: "ARABIC LETTER ALEF WITH ATTACHED TOP RIGHT FATHA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2162,
      name: "ARABIC LETTER ALEF WITH RIGHT MIDDLE STROKE",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2163,
      name: "ARABIC LETTER ALEF WITH LEFT MIDDLE STROKE",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2164,
      name: "ARABIC LETTER ALEF WITH ATTACHED KASRA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2165,
      name: "ARABIC LETTER ALEF WITH ATTACHED BOTTOM RIGHT KASRA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2166,
      name: "ARABIC LETTER ALEF WITH ATTACHED ROUND DOT ABOVE",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2167,
      name: "ARABIC LETTER ALEF WITH ATTACHED RIGHT ROUND DOT",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2168,
      name: "ARABIC LETTER ALEF WITH ATTACHED LEFT ROUND DOT",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2169,
      name: "ARABIC LETTER ALEF WITH ATTACHED ROUND DOT BELOW",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2170,
      name: "ARABIC LETTER ALEF WITH DOT ABOVE",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2171,
      name: "ARABIC LETTER ALEF WITH ATTACHED TOP RIGHT FATHA AND DOT ABOVE",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2172,
      name: "ARABIC LETTER ALEF WITH RIGHT MIDDLE STROKE AND DOT ABOVE",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2173,
      name: "ARABIC LETTER ALEF WITH ATTACHED BOTTOM RIGHT KASRA AND DOT ABOVE",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2174,
      name: "ARABIC LETTER ALEF WITH ATTACHED TOP RIGHT FATHA AND LEFT RING",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2175,
      name: "ARABIC LETTER ALEF WITH RIGHT MIDDLE STROKE AND LEFT RING",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2176,
      name: "ARABIC LETTER ALEF WITH ATTACHED BOTTOM RIGHT KASRA AND LEFT RING",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2177,
      name: "ARABIC LETTER ALEF WITH ATTACHED RIGHT HAMZA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2178,
      name: "ARABIC LETTER ALEF WITH ATTACHED LEFT HAMZA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2179,
      name: "ARABIC TATWEEL WITH OVERSTRUCK HAMZA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2180,
      name: "ARABIC TATWEEL WITH OVERSTRUCK WAW",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2181,
      name: "ARABIC TATWEEL WITH TWO DOTS BELOW",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    { code: 2182, name: "ARABIC LETTER THIN YEH", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 2183, name: "ARABIC BASELINE ROUND DOT", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    { code: 2184, name: "ARABIC RAISED ROUND DOT", cat: Category.Modifier_Symbol, bidi: BidiClass.Arabic_Letter },
    {
      code: 2185,
      name: "ARABIC LETTER NOON WITH INVERTED SMALL V",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2186,
      name: "ARABIC LETTER HAH WITH INVERTED SMALL V BELOW",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    { code: 2187, name: "ARABIC LETTER TAH WITH DOT BELOW", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    {
      code: 2188,
      name: "ARABIC LETTER TAH WITH THREE DOTS BELOW",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    {
      code: 2189,
      name: "ARABIC LETTER KEHEH WITH TWO DOTS VERTICALLY BELOW",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    { code: 2190, name: "ARABIC VERTICAL TAIL", cat: Category.Other_Letter, bidi: BidiClass.Arabic_Letter },
    {
      code: 2191,
      name: "ARABIC LETTER NOON WITH RING ABOVE",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
    },
    { code: 2192, name: "ARABIC POUND MARK ABOVE", cat: Category.Format, bidi: BidiClass.Arabic_Number },
    { code: 2193, name: "ARABIC PIASTRE MARK ABOVE", cat: Category.Format, bidi: BidiClass.Arabic_Number },
    { code: 2199, name: "ARABIC PEPET", cat: Category.Nonspacing_Mark, bidi: BidiClass.Nonspacing_Mark, comb: 230 },
    {
      code: 2200,
      name: "ARABIC SMALL HIGH WORD AL-JUZ",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 230,
    },
    {
      code: 2201,
      name: "ARABIC SMALL LOW WORD ISHMAAM",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 2202,
      name: "ARABIC SMALL LOW WORD IMAALA",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 2203,
      name: "ARABIC SMALL LOW WORD TASHEEL",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 220,
    },
    {
      code: 2204,
      name: "ARABIC MADDA WAAJIB",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 230,
    },
    {
      code: 2205,
      name: "ARABIC SUPERSCRIPT ALEF MOKHASSAS",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 230,
    },
    {
      code: 2206,
      name: "ARABIC DOUBLED MADDA",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 230,
    },
    {
      code: 2207,
      name: "ARABIC HALF MADDA OVER MADDA",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 230,
    },
  ],
};
