import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Meetei Mayek Extensions**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **43744**
 *
 * _End Code:_ **43775**
 *
 * _Total Characters:_ **23**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Meetei_Mayek_Extensions,
  startCode: 43744,
  endCode: 43775,
  characters: [
    { code: 43744, name: "MEETEI MAYEK LETTER E", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43745, name: "MEETEI MAYEK LETTER O", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43746, name: "MEETEI MAYEK LETTER CHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43747, name: "MEETEI MAYEK LETTER NYA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43748, name: "MEETEI MAYEK LETTER TTA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43749, name: "MEETEI MAYEK LETTER TTHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43750, name: "MEETEI MAYEK LETTER DDA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43751, name: "MEETEI MAYEK LETTER DDHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43752, name: "MEETEI MAYEK LETTER NNA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43753, name: "MEETEI MAYEK LETTER SHA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43754, name: "MEETEI MAYEK LETTER SSA", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    { code: 43755, name: "MEETEI MAYEK VOWEL SIGN II", cat: Category.Spacing_Mark, bidi: BidiClass.Left_To_Right },
    { code: 43756, name: "MEETEI MAYEK VOWEL SIGN UU", cat: Category.Nonspacing_Mark, bidi: BidiClass.Nonspacing_Mark },
    {
      code: 43757,
      name: "MEETEI MAYEK VOWEL SIGN AAI",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
    },
    { code: 43758, name: "MEETEI MAYEK VOWEL SIGN AU", cat: Category.Spacing_Mark, bidi: BidiClass.Left_To_Right },
    { code: 43759, name: "MEETEI MAYEK VOWEL SIGN AAU", cat: Category.Spacing_Mark, bidi: BidiClass.Left_To_Right },
    { code: 43760, name: "MEETEI MAYEK CHEIKHAN", cat: Category.Other_Punctuation, bidi: BidiClass.Left_To_Right },
    { code: 43761, name: "MEETEI MAYEK AHANG KHUDAM", cat: Category.Other_Punctuation, bidi: BidiClass.Left_To_Right },
    { code: 43762, name: "MEETEI MAYEK ANJI", cat: Category.Other_Letter, bidi: BidiClass.Left_To_Right },
    {
      code: 43763,
      name: "MEETEI MAYEK SYLLABLE REPETITION MARK",
      cat: Category.Modifier_Letter,
      bidi: BidiClass.Left_To_Right,
    },
    {
      code: 43764,
      name: "MEETEI MAYEK WORD REPETITION MARK",
      cat: Category.Modifier_Letter,
      bidi: BidiClass.Left_To_Right,
    },
    { code: 43765, name: "MEETEI MAYEK VOWEL SIGN VISARGA", cat: Category.Spacing_Mark, bidi: BidiClass.Left_To_Right },
    {
      code: 43766,
      name: "MEETEI MAYEK VIRAMA",
      cat: Category.Nonspacing_Mark,
      bidi: BidiClass.Nonspacing_Mark,
      comb: 9,
    },
  ],
};
