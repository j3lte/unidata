import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Ancient Symbols**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **65936**
 *
 * _End Code:_ **65999**
 *
 * _Total Characters:_ **14**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Ancient_Symbols,
  startCode: 65936,
  endCode: 65999,
  characters: [
    {
      code: 65936,
      name: "ROMAN SEXTANS SIGN",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      age: Age.V5_1,
    },
    { code: 65937, name: "ROMAN UNCIA SIGN", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral, age: Age.V5_1 },
    {
      code: 65938,
      name: "ROMAN SEMUNCIA SIGN",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      age: Age.V5_1,
    },
    {
      code: 65939,
      name: "ROMAN SEXTULA SIGN",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      age: Age.V5_1,
    },
    {
      code: 65940,
      name: "ROMAN DIMIDIA SEXTULA SIGN",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      age: Age.V5_1,
    },
    {
      code: 65941,
      name: "ROMAN SILIQUA SIGN",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      age: Age.V5_1,
    },
    {
      code: 65942,
      name: "ROMAN DENARIUS SIGN",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      age: Age.V5_1,
    },
    {
      code: 65943,
      name: "ROMAN QUINARIUS SIGN",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      age: Age.V5_1,
    },
    {
      code: 65944,
      name: "ROMAN SESTERTIUS SIGN",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      age: Age.V5_1,
    },
    {
      code: 65945,
      name: "ROMAN DUPONDIUS SIGN",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      age: Age.V5_1,
    },
    { code: 65946, name: "ROMAN AS SIGN", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral, age: Age.V5_1 },
    {
      code: 65947,
      name: "ROMAN CENTURIAL SIGN",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      age: Age.V5_1,
    },
    { code: 65948, name: "ASCIA SYMBOL", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral, age: Age.V13_0 },
    {
      code: 65952,
      name: "GREEK SYMBOL TAU RHO",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
      age: Age.V7_0,
    },
  ],
};
