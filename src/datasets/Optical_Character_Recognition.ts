import type { CharacterSet } from "../types.ts";
import { BidiClass, Category, CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Optical Character Recognition**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **9280**
 *
 * _End Code:_ **9311**
 *
 * _Total Characters:_ **11**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Optical_Character_Recognition,
  startCode: 9280,
  endCode: 9311,
  characters: [
    { code: 9280, name: "OCR HOOK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9281, name: "OCR CHAIR", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9282, name: "OCR FORK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9283, name: "OCR INVERTED FORK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9284, name: "OCR BELT BUCKLE", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9285, name: "OCR BOW TIE", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9286, name: "OCR BRANCH BANK IDENTIFICATION", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9287, name: "OCR AMOUNT OF CHECK", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9288, name: "OCR DASH", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9289, name: "OCR CUSTOMER ACCOUNT NUMBER", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
    { code: 9290, name: "OCR DOUBLE BACKSLASH", cat: Category.Other_Symbol, bidi: BidiClass.Other_Neutral },
  ],
};
