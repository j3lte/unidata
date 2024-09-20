import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Common Indic Number Forms**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **43056**
 *
 * _End Code:_ **43071**
 *
 * _Total Characters:_ **10**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Common_Indic_Number_Forms,
  startCode: 43056,
  endCode: 43071,
  characters: [
    { "code": 43056, "name": "NORTH INDIC FRACTION ONE QUARTER", "cat": "No", "num": "1/4" },
    { "code": 43057, "name": "NORTH INDIC FRACTION ONE HALF", "cat": "No", "num": "1/2" },
    { "code": 43058, "name": "NORTH INDIC FRACTION THREE QUARTERS", "cat": "No", "num": "3/4" },
    { "code": 43059, "name": "NORTH INDIC FRACTION ONE SIXTEENTH", "cat": "No", "num": "1/16" },
    { "code": 43060, "name": "NORTH INDIC FRACTION ONE EIGHTH", "cat": "No", "num": "1/8" },
    { "code": 43061, "name": "NORTH INDIC FRACTION THREE SIXTEENTHS", "cat": "No", "num": "3/16" },
    { "code": 43062, "name": "NORTH INDIC QUARTER MARK", "cat": "So" },
    { "code": 43063, "name": "NORTH INDIC PLACEHOLDER MARK", "cat": "So" },
    { "code": 43064, "name": "NORTH INDIC RUPEE MARK", "cat": "Sc", "bidi": "ET" },
    { "code": 43065, "name": "NORTH INDIC QUANTITY MARK", "cat": "So", "bidi": "ET" },
  ],
};
