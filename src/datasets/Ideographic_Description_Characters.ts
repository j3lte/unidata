import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Ideographic Description Characters**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **12272**
 *
 * _End Code:_ **12287**
 *
 * _Total Characters:_ **16**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Ideographic_Description_Characters,
  startCode: 12272,
  endCode: 12287,
  characters: [
    {
      code: 12272,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER LEFT TO RIGHT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12273,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER ABOVE TO BELOW",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12274,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER LEFT TO MIDDLE AND RIGHT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12275,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER ABOVE TO MIDDLE AND BELOW",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12276,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER FULL SURROUND",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12277,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER SURROUND FROM ABOVE",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12278,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER SURROUND FROM BELOW",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12279,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER SURROUND FROM LEFT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12280,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER SURROUND FROM UPPER LEFT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12281,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER SURROUND FROM UPPER RIGHT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12282,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER SURROUND FROM LOWER LEFT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12283,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER OVERLAID",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12284,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER SURROUND FROM RIGHT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12285,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER SURROUND FROM LOWER RIGHT",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12286,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER HORIZONTAL REFLECTION",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
    {
      code: 12287,
      name: "IDEOGRAPHIC DESCRIPTION CHARACTER ROTATION",
      cat: Category.Other_Symbol,
      bidi: BidiClass.Other_Neutral,
    },
  ],
};
