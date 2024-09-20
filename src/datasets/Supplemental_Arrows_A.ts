import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Supplemental Arrows-A**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **10224**
 *
 * _End Code:_ **10239**
 *
 * _Total Characters:_ **16**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Supplemental_Arrows_A,
  startCode: 10224,
  endCode: 10239,
  characters: [
    { "code": 10224, "name": "UPWARDS QUADRUPLE ARROW", "cat": "Sm", "bidi": "ON" },
    { "code": 10225, "name": "DOWNWARDS QUADRUPLE ARROW", "cat": "Sm", "bidi": "ON" },
    { "code": 10226, "name": "ANTICLOCKWISE GAPPED CIRCLE ARROW", "cat": "Sm", "bidi": "ON" },
    { "code": 10227, "name": "CLOCKWISE GAPPED CIRCLE ARROW", "cat": "Sm", "bidi": "ON" },
    { "code": 10228, "name": "RIGHT ARROW WITH CIRCLED PLUS", "cat": "Sm", "bidi": "ON" },
    { "code": 10229, "name": "LONG LEFTWARDS ARROW", "cat": "Sm", "bidi": "ON" },
    { "code": 10230, "name": "LONG RIGHTWARDS ARROW", "cat": "Sm", "bidi": "ON" },
    { "code": 10231, "name": "LONG LEFT RIGHT ARROW", "cat": "Sm", "bidi": "ON" },
    { "code": 10232, "name": "LONG LEFTWARDS DOUBLE ARROW", "cat": "Sm", "bidi": "ON" },
    { "code": 10233, "name": "LONG RIGHTWARDS DOUBLE ARROW", "cat": "Sm", "bidi": "ON" },
    { "code": 10234, "name": "LONG LEFT RIGHT DOUBLE ARROW", "cat": "Sm", "bidi": "ON" },
    { "code": 10235, "name": "LONG LEFTWARDS ARROW FROM BAR", "cat": "Sm", "bidi": "ON" },
    { "code": 10236, "name": "LONG RIGHTWARDS ARROW FROM BAR", "cat": "Sm", "bidi": "ON" },
    { "code": 10237, "name": "LONG LEFTWARDS DOUBLE ARROW FROM BAR", "cat": "Sm", "bidi": "ON" },
    { "code": 10238, "name": "LONG RIGHTWARDS DOUBLE ARROW FROM BAR", "cat": "Sm", "bidi": "ON" },
    { "code": 10239, "name": "LONG RIGHTWARDS SQUIGGLE ARROW", "cat": "Sm", "bidi": "ON" },
  ],
};
