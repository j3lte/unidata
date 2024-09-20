import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Optical Character Recognition**
 *
 * _Unicode Version:_ **16.0.0**
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
    { "code": 9280, "name": "OCR HOOK", "cat": "So", "bidi": "ON" },
    { "code": 9281, "name": "OCR CHAIR", "cat": "So", "bidi": "ON" },
    { "code": 9282, "name": "OCR FORK", "cat": "So", "bidi": "ON" },
    { "code": 9283, "name": "OCR INVERTED FORK", "cat": "So", "bidi": "ON" },
    { "code": 9284, "name": "OCR BELT BUCKLE", "cat": "So", "bidi": "ON" },
    { "code": 9285, "name": "OCR BOW TIE", "cat": "So", "bidi": "ON" },
    { "code": 9286, "name": "OCR BRANCH BANK IDENTIFICATION", "cat": "So", "bidi": "ON" },
    { "code": 9287, "name": "OCR AMOUNT OF CHECK", "cat": "So", "bidi": "ON" },
    { "code": 9288, "name": "OCR DASH", "cat": "So", "bidi": "ON" },
    { "code": 9289, "name": "OCR CUSTOMER ACCOUNT NUMBER", "cat": "So", "bidi": "ON" },
    { "code": 9290, "name": "OCR DOUBLE BACKSLASH", "cat": "So", "bidi": "ON" },
  ],
};
