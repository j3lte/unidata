import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Syriac Supplement**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **2144**
 *
 * _End Code:_ **2159**
 *
 * _Total Characters:_ **11**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Syriac_Supplement,
  startCode: 2144,
  endCode: 2159,
  characters: [
    {
      code: 2144,
      name: "SYRIAC LETTER MALAYALAM NGA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
      age: Age.V10_0,
    },
    {
      code: 2145,
      name: "SYRIAC LETTER MALAYALAM JA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
      age: Age.V10_0,
    },
    {
      code: 2146,
      name: "SYRIAC LETTER MALAYALAM NYA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
      age: Age.V10_0,
    },
    {
      code: 2147,
      name: "SYRIAC LETTER MALAYALAM TTA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
      age: Age.V10_0,
    },
    {
      code: 2148,
      name: "SYRIAC LETTER MALAYALAM NNA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
      age: Age.V10_0,
    },
    {
      code: 2149,
      name: "SYRIAC LETTER MALAYALAM NNNA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
      age: Age.V10_0,
    },
    {
      code: 2150,
      name: "SYRIAC LETTER MALAYALAM BHA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
      age: Age.V10_0,
    },
    {
      code: 2151,
      name: "SYRIAC LETTER MALAYALAM RA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
      age: Age.V10_0,
    },
    {
      code: 2152,
      name: "SYRIAC LETTER MALAYALAM LLA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
      age: Age.V10_0,
    },
    {
      code: 2153,
      name: "SYRIAC LETTER MALAYALAM LLLA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
      age: Age.V10_0,
    },
    {
      code: 2154,
      name: "SYRIAC LETTER MALAYALAM SSA",
      cat: Category.Other_Letter,
      bidi: BidiClass.Arabic_Letter,
      age: Age.V10_0,
    },
  ],
};
