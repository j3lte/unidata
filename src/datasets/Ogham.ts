import type { CharacterSet } from "../types.ts";
import { Age, BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Ogham**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **5760**
 *
 * _End Code:_ **5791**
 *
 * _Total Characters:_ **29**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Ogham,
  startCode: 5760,
  endCode: 5791,
  characters: [
    { code: 5760, name: "OGHAM SPACE MARK", cat: Category.Space_Separator, bidi: BidiClass.White_Space, age: Age.V3_0 },
    {
      code: 5761,
      name: "OGHAM LETTER BEITH",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_0,
    },
    { code: 5762, name: "OGHAM LETTER LUIS", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    {
      code: 5763,
      name: "OGHAM LETTER FEARN",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_0,
    },
    { code: 5764, name: "OGHAM LETTER SAIL", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    { code: 5765, name: "OGHAM LETTER NION", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    { code: 5766, name: "OGHAM LETTER UATH", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    { code: 5767, name: "OGHAM LETTER DAIR", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    {
      code: 5768,
      name: "OGHAM LETTER TINNE",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_0,
    },
    { code: 5769, name: "OGHAM LETTER COLL", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    {
      code: 5770,
      name: "OGHAM LETTER CEIRT",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_0,
    },
    { code: 5771, name: "OGHAM LETTER MUIN", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    { code: 5772, name: "OGHAM LETTER GORT", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    {
      code: 5773,
      name: "OGHAM LETTER NGEADAL",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_0,
    },
    {
      code: 5774,
      name: "OGHAM LETTER STRAIF",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_0,
    },
    { code: 5775, name: "OGHAM LETTER RUIS", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    { code: 5776, name: "OGHAM LETTER AILM", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    { code: 5777, name: "OGHAM LETTER ONN", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    { code: 5778, name: "OGHAM LETTER UR", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    {
      code: 5779,
      name: "OGHAM LETTER EADHADH",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_0,
    },
    {
      code: 5780,
      name: "OGHAM LETTER IODHADH",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_0,
    },
    {
      code: 5781,
      name: "OGHAM LETTER EABHADH",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_0,
    },
    { code: 5782, name: "OGHAM LETTER OR", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    {
      code: 5783,
      name: "OGHAM LETTER UILLEANN",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_0,
    },
    { code: 5784, name: "OGHAM LETTER IFIN", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right, age: Age.V3_0 },
    {
      code: 5785,
      name: "OGHAM LETTER EAMHANCHOLL",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_0,
    },
    {
      code: 5786,
      name: "OGHAM LETTER PEITH",
      cat: Category.Other_Letter,
      bidi: BidiClass.Left_To_Right,
      age: Age.V3_0,
    },
    {
      code: 5787,
      name: "OGHAM FEATHER MARK",
      cat: Category.Open_Punctuation,
      bidi: BidiClass.Other_Neutral,
      age: Age.V3_0,
      bidiMirror: true,
      mirrorCode: 5788,
    },
    {
      code: 5788,
      name: "OGHAM REVERSED FEATHER MARK",
      cat: Category.Close_Punctuation,
      bidi: BidiClass.Other_Neutral,
      age: Age.V3_0,
      bidiMirror: true,
      mirrorCode: 5787,
    },
  ],
};
