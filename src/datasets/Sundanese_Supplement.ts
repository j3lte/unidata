import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Sundanese Supplement**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **7360**
 *
 * _End Code:_ **7375**
 *
 * _Total Characters:_ **8**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Sundanese_Supplement,
  startCode: 7360,
  endCode: 7375,
  characters: [
    { "code": 7360, "name": "SUNDANESE PUNCTUATION BINDU SURYA", "cat": "Po" },
    { "code": 7361, "name": "SUNDANESE PUNCTUATION BINDU PANGLONG", "cat": "Po" },
    { "code": 7362, "name": "SUNDANESE PUNCTUATION BINDU PURNAMA", "cat": "Po" },
    { "code": 7363, "name": "SUNDANESE PUNCTUATION BINDU CAKRA", "cat": "Po" },
    { "code": 7364, "name": "SUNDANESE PUNCTUATION BINDU LEU SATANGA", "cat": "Po" },
    { "code": 7365, "name": "SUNDANESE PUNCTUATION BINDU KA SATANGA", "cat": "Po" },
    { "code": 7366, "name": "SUNDANESE PUNCTUATION BINDU DA SATANGA", "cat": "Po" },
    { "code": 7367, "name": "SUNDANESE PUNCTUATION BINDU BA SATANGA", "cat": "Po" },
  ],
};
