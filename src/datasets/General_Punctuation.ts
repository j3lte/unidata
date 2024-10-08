import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **General Punctuation**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **8192**
 *
 * _End Code:_ **8303**
 *
 * _Total Characters:_ **111**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.General_Punctuation,
  startCode: 8192,
  endCode: 8303,
  characters: [
    { "code": 8192, "name": "EN QUAD", "cat": "Zs", "bidi": "WS", "decomp": [8194] },
    { "code": 8193, "name": "EM QUAD", "cat": "Zs", "bidi": "WS", "decomp": [8195] },
    { "code": 8194, "name": "EN SPACE", "cat": "Zs", "bidi": "WS", "decomp": [32], "decompType": "compat" },
    { "code": 8195, "name": "EM SPACE", "cat": "Zs", "bidi": "WS", "decomp": [32], "decompType": "compat" },
    { "code": 8196, "name": "THREE-PER-EM SPACE", "cat": "Zs", "bidi": "WS", "decomp": [32], "decompType": "compat" },
    { "code": 8197, "name": "FOUR-PER-EM SPACE", "cat": "Zs", "bidi": "WS", "decomp": [32], "decompType": "compat" },
    { "code": 8198, "name": "SIX-PER-EM SPACE", "cat": "Zs", "bidi": "WS", "decomp": [32], "decompType": "compat" },
    { "code": 8199, "name": "FIGURE SPACE", "cat": "Zs", "bidi": "WS", "decomp": [32], "decompType": "noBreak" },
    { "code": 8200, "name": "PUNCTUATION SPACE", "cat": "Zs", "bidi": "WS", "decomp": [32], "decompType": "compat" },
    { "code": 8201, "name": "THIN SPACE", "cat": "Zs", "bidi": "WS", "decomp": [32], "decompType": "compat" },
    { "code": 8202, "name": "HAIR SPACE", "cat": "Zs", "bidi": "WS", "decomp": [32], "decompType": "compat" },
    { "code": 8203, "name": "ZERO WIDTH SPACE", "cat": "Cf", "bidi": "BN" },
    { "code": 8204, "name": "ZERO WIDTH NON-JOINER", "cat": "Cf", "bidi": "BN" },
    { "code": 8205, "name": "ZERO WIDTH JOINER", "cat": "Cf", "bidi": "BN" },
    { "code": 8206, "name": "LEFT-TO-RIGHT MARK", "cat": "Cf" },
    { "code": 8207, "name": "RIGHT-TO-LEFT MARK", "cat": "Cf", "bidi": "R" },
    { "code": 8208, "name": "HYPHEN", "cat": "Pd", "bidi": "ON" },
    {
      "code": 8209,
      "name": "NON-BREAKING HYPHEN",
      "cat": "Pd",
      "bidi": "ON",
      "decomp": [8208],
      "decompType": "noBreak",
    },
    { "code": 8210, "name": "FIGURE DASH", "cat": "Pd", "bidi": "ON" },
    { "code": 8211, "name": "EN DASH", "cat": "Pd", "bidi": "ON" },
    { "code": 8212, "name": "EM DASH", "cat": "Pd", "bidi": "ON" },
    { "code": 8213, "name": "HORIZONTAL BAR", "cat": "Pd", "bidi": "ON", "oldName": "QUOTATION DASH" },
    { "code": 8214, "name": "DOUBLE VERTICAL LINE", "cat": "Po", "bidi": "ON", "oldName": "DOUBLE VERTICAL BAR" },
    {
      "code": 8215,
      "name": "DOUBLE LOW LINE",
      "cat": "Po",
      "bidi": "ON",
      "decomp": [32, 819],
      "decompType": "compat",
      "oldName": "SPACING DOUBLE UNDERSCORE",
    },
    {
      "code": 8216,
      "name": "LEFT SINGLE QUOTATION MARK",
      "cat": "Pi",
      "bidi": "ON",
      "oldName": "SINGLE TURNED COMMA QUOTATION MARK",
    },
    {
      "code": 8217,
      "name": "RIGHT SINGLE QUOTATION MARK",
      "cat": "Pf",
      "bidi": "ON",
      "oldName": "SINGLE COMMA QUOTATION MARK",
    },
    {
      "code": 8218,
      "name": "SINGLE LOW-9 QUOTATION MARK",
      "cat": "Ps",
      "bidi": "ON",
      "oldName": "LOW SINGLE COMMA QUOTATION MARK",
    },
    {
      "code": 8219,
      "name": "SINGLE HIGH-REVERSED-9 QUOTATION MARK",
      "cat": "Pi",
      "bidi": "ON",
      "oldName": "SINGLE REVERSED COMMA QUOTATION MARK",
    },
    {
      "code": 8220,
      "name": "LEFT DOUBLE QUOTATION MARK",
      "cat": "Pi",
      "bidi": "ON",
      "oldName": "DOUBLE TURNED COMMA QUOTATION MARK",
    },
    {
      "code": 8221,
      "name": "RIGHT DOUBLE QUOTATION MARK",
      "cat": "Pf",
      "bidi": "ON",
      "oldName": "DOUBLE COMMA QUOTATION MARK",
    },
    {
      "code": 8222,
      "name": "DOUBLE LOW-9 QUOTATION MARK",
      "cat": "Ps",
      "bidi": "ON",
      "oldName": "LOW DOUBLE COMMA QUOTATION MARK",
    },
    {
      "code": 8223,
      "name": "DOUBLE HIGH-REVERSED-9 QUOTATION MARK",
      "cat": "Pi",
      "bidi": "ON",
      "oldName": "DOUBLE REVERSED COMMA QUOTATION MARK",
    },
    { "code": 8224, "name": "DAGGER", "cat": "Po", "bidi": "ON" },
    { "code": 8225, "name": "DOUBLE DAGGER", "cat": "Po", "bidi": "ON" },
    { "code": 8226, "name": "BULLET", "cat": "Po", "bidi": "ON" },
    { "code": 8227, "name": "TRIANGULAR BULLET", "cat": "Po", "bidi": "ON" },
    { "code": 8228, "name": "ONE DOT LEADER", "cat": "Po", "bidi": "ON", "decomp": [46], "decompType": "compat" },
    { "code": 8229, "name": "TWO DOT LEADER", "cat": "Po", "bidi": "ON", "decomp": [46, 46], "decompType": "compat" },
    {
      "code": 8230,
      "name": "HORIZONTAL ELLIPSIS",
      "cat": "Po",
      "bidi": "ON",
      "decomp": [46, 46, 46],
      "decompType": "compat",
    },
    { "code": 8231, "name": "HYPHENATION POINT", "cat": "Po", "bidi": "ON" },
    { "code": 8232, "name": "LINE SEPARATOR", "cat": "Zl", "bidi": "WS" },
    { "code": 8233, "name": "PARAGRAPH SEPARATOR", "cat": "Zp", "bidi": "B" },
    { "code": 8234, "name": "LEFT-TO-RIGHT EMBEDDING", "cat": "Cf", "bidi": "LRE" },
    { "code": 8235, "name": "RIGHT-TO-LEFT EMBEDDING", "cat": "Cf", "bidi": "RLE" },
    { "code": 8236, "name": "POP DIRECTIONAL FORMATTING", "cat": "Cf", "bidi": "PDF" },
    { "code": 8237, "name": "LEFT-TO-RIGHT OVERRIDE", "cat": "Cf", "bidi": "LRO" },
    { "code": 8238, "name": "RIGHT-TO-LEFT OVERRIDE", "cat": "Cf", "bidi": "RLO" },
    {
      "code": 8239,
      "name": "NARROW NO-BREAK SPACE",
      "cat": "Zs",
      "bidi": "CS",
      "decomp": [32],
      "decompType": "noBreak",
    },
    { "code": 8240, "name": "PER MILLE SIGN", "cat": "Po", "bidi": "ET" },
    { "code": 8241, "name": "PER TEN THOUSAND SIGN", "cat": "Po", "bidi": "ET" },
    { "code": 8242, "name": "PRIME", "cat": "Po", "bidi": "ET" },
    { "code": 8243, "name": "DOUBLE PRIME", "cat": "Po", "bidi": "ET", "decomp": [8242, 8242], "decompType": "compat" },
    {
      "code": 8244,
      "name": "TRIPLE PRIME",
      "cat": "Po",
      "bidi": "ET",
      "decomp": [8242, 8242, 8242],
      "decompType": "compat",
    },
    { "code": 8245, "name": "REVERSED PRIME", "cat": "Po", "bidi": "ON" },
    {
      "code": 8246,
      "name": "REVERSED DOUBLE PRIME",
      "cat": "Po",
      "bidi": "ON",
      "decomp": [8245, 8245],
      "decompType": "compat",
    },
    {
      "code": 8247,
      "name": "REVERSED TRIPLE PRIME",
      "cat": "Po",
      "bidi": "ON",
      "decomp": [8245, 8245, 8245],
      "decompType": "compat",
    },
    { "code": 8248, "name": "CARET", "cat": "Po", "bidi": "ON" },
    {
      "code": 8249,
      "name": "SINGLE LEFT-POINTING ANGLE QUOTATION MARK",
      "cat": "Pi",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "LEFT POINTING SINGLE GUILLEMET",
    },
    {
      "code": 8250,
      "name": "SINGLE RIGHT-POINTING ANGLE QUOTATION MARK",
      "cat": "Pf",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "RIGHT POINTING SINGLE GUILLEMET",
    },
    { "code": 8251, "name": "REFERENCE MARK", "cat": "Po", "bidi": "ON" },
    {
      "code": 8252,
      "name": "DOUBLE EXCLAMATION MARK",
      "cat": "Po",
      "bidi": "ON",
      "decomp": [33, 33],
      "decompType": "compat",
    },
    { "code": 8253, "name": "INTERROBANG", "cat": "Po", "bidi": "ON" },
    {
      "code": 8254,
      "name": "OVERLINE",
      "cat": "Po",
      "bidi": "ON",
      "decomp": [32, 773],
      "decompType": "compat",
      "oldName": "SPACING OVERSCORE",
    },
    { "code": 8255, "name": "UNDERTIE", "cat": "Pc", "bidi": "ON" },
    { "code": 8256, "name": "CHARACTER TIE", "cat": "Pc", "bidi": "ON" },
    { "code": 8257, "name": "CARET INSERTION POINT", "cat": "Po", "bidi": "ON" },
    { "code": 8258, "name": "ASTERISM", "cat": "Po", "bidi": "ON" },
    { "code": 8259, "name": "HYPHEN BULLET", "cat": "Po", "bidi": "ON" },
    { "code": 8260, "name": "FRACTION SLASH", "cat": "Sm", "bidi": "CS" },
    { "code": 8261, "name": "LEFT SQUARE BRACKET WITH QUILL", "cat": "Ps", "bidi": "ON", "bidiMirror": true },
    { "code": 8262, "name": "RIGHT SQUARE BRACKET WITH QUILL", "cat": "Pe", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8263,
      "name": "DOUBLE QUESTION MARK",
      "cat": "Po",
      "bidi": "ON",
      "decomp": [63, 63],
      "decompType": "compat",
    },
    {
      "code": 8264,
      "name": "QUESTION EXCLAMATION MARK",
      "cat": "Po",
      "bidi": "ON",
      "decomp": [63, 33],
      "decompType": "compat",
    },
    {
      "code": 8265,
      "name": "EXCLAMATION QUESTION MARK",
      "cat": "Po",
      "bidi": "ON",
      "decomp": [33, 63],
      "decompType": "compat",
    },
    { "code": 8266, "name": "TIRONIAN SIGN ET", "cat": "Po", "bidi": "ON" },
    { "code": 8267, "name": "REVERSED PILCROW SIGN", "cat": "Po", "bidi": "ON" },
    { "code": 8268, "name": "BLACK LEFTWARDS BULLET", "cat": "Po", "bidi": "ON" },
    { "code": 8269, "name": "BLACK RIGHTWARDS BULLET", "cat": "Po", "bidi": "ON" },
    { "code": 8270, "name": "LOW ASTERISK", "cat": "Po", "bidi": "ON" },
    { "code": 8271, "name": "REVERSED SEMICOLON", "cat": "Po", "bidi": "ON" },
    { "code": 8272, "name": "CLOSE UP", "cat": "Po", "bidi": "ON" },
    { "code": 8273, "name": "TWO ASTERISKS ALIGNED VERTICALLY", "cat": "Po", "bidi": "ON" },
    { "code": 8274, "name": "COMMERCIAL MINUS SIGN", "cat": "Sm", "bidi": "ON" },
    { "code": 8275, "name": "SWUNG DASH", "cat": "Po", "bidi": "ON" },
    { "code": 8276, "name": "INVERTED UNDERTIE", "cat": "Pc", "bidi": "ON" },
    { "code": 8277, "name": "FLOWER PUNCTUATION MARK", "cat": "Po", "bidi": "ON" },
    { "code": 8278, "name": "THREE DOT PUNCTUATION", "cat": "Po", "bidi": "ON" },
    {
      "code": 8279,
      "name": "QUADRUPLE PRIME",
      "cat": "Po",
      "bidi": "ON",
      "decomp": [8242, 8242, 8242, 8242],
      "decompType": "compat",
    },
    { "code": 8280, "name": "FOUR DOT PUNCTUATION", "cat": "Po", "bidi": "ON" },
    { "code": 8281, "name": "FIVE DOT PUNCTUATION", "cat": "Po", "bidi": "ON" },
    { "code": 8282, "name": "TWO DOT PUNCTUATION", "cat": "Po", "bidi": "ON" },
    { "code": 8283, "name": "FOUR DOT MARK", "cat": "Po", "bidi": "ON" },
    { "code": 8284, "name": "DOTTED CROSS", "cat": "Po", "bidi": "ON" },
    { "code": 8285, "name": "TRICOLON", "cat": "Po", "bidi": "ON" },
    { "code": 8286, "name": "VERTICAL FOUR DOTS", "cat": "Po", "bidi": "ON" },
    {
      "code": 8287,
      "name": "MEDIUM MATHEMATICAL SPACE",
      "cat": "Zs",
      "bidi": "WS",
      "decomp": [32],
      "decompType": "compat",
    },
    { "code": 8288, "name": "WORD JOINER", "cat": "Cf", "bidi": "BN" },
    { "code": 8289, "name": "FUNCTION APPLICATION", "cat": "Cf", "bidi": "BN" },
    { "code": 8290, "name": "INVISIBLE TIMES", "cat": "Cf", "bidi": "BN" },
    { "code": 8291, "name": "INVISIBLE SEPARATOR", "cat": "Cf", "bidi": "BN" },
    { "code": 8292, "name": "INVISIBLE PLUS", "cat": "Cf", "bidi": "BN" },
    { "code": 8294, "name": "LEFT-TO-RIGHT ISOLATE", "cat": "Cf", "bidi": "LRI" },
    { "code": 8295, "name": "RIGHT-TO-LEFT ISOLATE", "cat": "Cf", "bidi": "RLI" },
    { "code": 8296, "name": "FIRST STRONG ISOLATE", "cat": "Cf", "bidi": "FSI" },
    { "code": 8297, "name": "POP DIRECTIONAL ISOLATE", "cat": "Cf", "bidi": "PDI" },
    { "code": 8298, "name": "INHIBIT SYMMETRIC SWAPPING", "cat": "Cf", "bidi": "BN" },
    { "code": 8299, "name": "ACTIVATE SYMMETRIC SWAPPING", "cat": "Cf", "bidi": "BN" },
    { "code": 8300, "name": "INHIBIT ARABIC FORM SHAPING", "cat": "Cf", "bidi": "BN" },
    { "code": 8301, "name": "ACTIVATE ARABIC FORM SHAPING", "cat": "Cf", "bidi": "BN" },
    { "code": 8302, "name": "NATIONAL DIGIT SHAPES", "cat": "Cf", "bidi": "BN" },
    { "code": 8303, "name": "NOMINAL DIGIT SHAPES", "cat": "Cf", "bidi": "BN" },
  ],
};
