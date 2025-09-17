import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Ideographic Symbols and Punctuation**
 *
 * _Unicode Version:_ **17.0.0**
 *
 * _Start Code:_ **94176**
 *
 * _End Code:_ **94207**
 *
 * _Total Characters:_ **12**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Ideographic_Symbols_and_Punctuation,
  startCode: 94176,
  endCode: 94207,
  characters: [
    { "code": 94176, "name": "TANGUT ITERATION MARK", "cat": "Lm" },
    { "code": 94177, "name": "NUSHU ITERATION MARK", "cat": "Lm" },
    { "code": 94178, "name": "OLD CHINESE HOOK MARK", "cat": "Po", "bidi": "ON" },
    { "code": 94179, "name": "OLD CHINESE ITERATION MARK", "cat": "Lm" },
    { "code": 94180, "name": "KHITAN SMALL SCRIPT FILLER", "cat": "Mn", "bidi": "NSM" },
    { "code": 94192, "name": "VIETNAMESE ALTERNATE READING MARK CA", "cat": "Mc", "comb": 6 },
    { "code": 94193, "name": "VIETNAMESE ALTERNATE READING MARK NHAY", "cat": "Mc", "comb": 6 },
    { "code": 94194, "name": "CHINESE SMALL SIMPLIFIED ER", "cat": "Lm" },
    { "code": 94195, "name": "CHINESE SMALL TRADITIONAL ER", "cat": "Lm" },
    { "code": 94196, "name": "YANGQIN SIGN SLOW ONE BEAT", "cat": "Nl", "num": "1" },
    { "code": 94197, "name": "YANGQIN SIGN SLOW THREE HALF BEATS", "cat": "Nl", "num": "3/2" },
    { "code": 94198, "name": "YANGQIN SIGN SLOW TWO BEATS", "cat": "Nl", "num": "2" },
  ],
};
