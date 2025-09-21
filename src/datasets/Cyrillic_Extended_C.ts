import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Cyrillic Extended-C**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **7296**
 *
 * _End Code:_ **7311**
 *
 * _Total Characters:_ **11**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Cyrillic_Extended_C,
  startCode: 7296,
  endCode: 7311,
  characters: [
    {
      code: 7296,
      name: "CYRILLIC SMALL LETTER ROUNDED VE",
      cat: Category.Lowercase_Letter,
      bidi: BidiClass.Left_To_Right,
      upper: 1042,
      title: 1042,
    },
    {
      code: 7297,
      name: "CYRILLIC SMALL LETTER LONG-LEGGED DE",
      cat: Category.Lowercase_Letter,
      bidi: BidiClass.Left_To_Right,
      upper: 1044,
      title: 1044,
    },
    {
      code: 7298,
      name: "CYRILLIC SMALL LETTER NARROW O",
      cat: Category.Lowercase_Letter,
      bidi: BidiClass.Left_To_Right,
      upper: 1054,
      title: 1054,
    },
    {
      code: 7299,
      name: "CYRILLIC SMALL LETTER WIDE ES",
      cat: Category.Lowercase_Letter,
      bidi: BidiClass.Left_To_Right,
      upper: 1057,
      title: 1057,
    },
    {
      code: 7300,
      name: "CYRILLIC SMALL LETTER TALL TE",
      cat: Category.Lowercase_Letter,
      bidi: BidiClass.Left_To_Right,
      upper: 1058,
      title: 1058,
    },
    {
      code: 7301,
      name: "CYRILLIC SMALL LETTER THREE-LEGGED TE",
      cat: Category.Lowercase_Letter,
      bidi: BidiClass.Left_To_Right,
      upper: 1058,
      title: 1058,
    },
    {
      code: 7302,
      name: "CYRILLIC SMALL LETTER TALL HARD SIGN",
      cat: Category.Lowercase_Letter,
      bidi: BidiClass.Left_To_Right,
      upper: 1066,
      title: 1066,
    },
    {
      code: 7303,
      name: "CYRILLIC SMALL LETTER TALL YAT",
      cat: Category.Lowercase_Letter,
      bidi: BidiClass.Left_To_Right,
      upper: 1122,
      title: 1122,
    },
    {
      code: 7304,
      name: "CYRILLIC SMALL LETTER UNBLENDED UK",
      cat: Category.Lowercase_Letter,
      bidi: BidiClass.Left_To_Right,
      upper: 42570,
      title: 42570,
    },
    {
      code: 7305,
      name: "CYRILLIC CAPITAL LETTER TJE",
      cat: Category.Uppercase_Letter,
      bidi: BidiClass.Left_To_Right,
      lower: 7306,
    },
    {
      code: 7306,
      name: "CYRILLIC SMALL LETTER TJE",
      cat: Category.Lowercase_Letter,
      bidi: BidiClass.Left_To_Right,
      upper: 7305,
      title: 7305,
    },
  ],
};
