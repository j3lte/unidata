import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Shorthand Format Controls**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **113824**
 *
 * _End Code:_ **113839**
 *
 * _Total Characters:_ **4**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Shorthand_Format_Controls,
  startCode: 113824,
  endCode: 113839,
  characters: [
    { "code": 113824, "name": "SHORTHAND FORMAT LETTER OVERLAP", "cat": "Cf", "bidi": "BN" },
    { "code": 113825, "name": "SHORTHAND FORMAT CONTINUING OVERLAP", "cat": "Cf", "bidi": "BN" },
    { "code": 113826, "name": "SHORTHAND FORMAT DOWN STEP", "cat": "Cf", "bidi": "BN" },
    { "code": 113827, "name": "SHORTHAND FORMAT UP STEP", "cat": "Cf", "bidi": "BN" },
  ],
};
