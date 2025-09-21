import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Specials**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **65520**
 *
 * _End Code:_ **65535**
 *
 * _Total Characters:_ **5**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Specials,
  startCode: 65520,
  endCode: 65535,
  characters: [
    { code: 65529, name: "INTERLINEAR ANNOTATION ANCHOR", cat: Category.Format, bidi: BidiClass.Other_Neutral },
    { code: 65530, name: "INTERLINEAR ANNOTATION SEPARATOR", cat: Category.Format, bidi: BidiClass.Other_Neutral },
    { code: 65531, name: "INTERLINEAR ANNOTATION TERMINATOR", cat: Category.Format, bidi: BidiClass.Other_Neutral },
    { code: 65532, name: "OBJECT REPLACEMENT CHARACTER", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 65533, name: "REPLACEMENT CHARACTER", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
  ],
};
