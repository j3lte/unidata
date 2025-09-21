import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Hangul Syllables**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **44032**
 *
 * _End Code:_ **55215**
 *
 * _Total Characters:_ **2**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Hangul_Syllables,
  startCode: 44032,
  endCode: 55215,
  characters: [
    { code: 44032, name: "<Hangul Syllable, First>", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 55203, name: "<Hangul Syllable, Last>", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
  ],
};
