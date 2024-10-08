import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Mathematical Operators**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **8704**
 *
 * _End Code:_ **8959**
 *
 * _Total Characters:_ **256**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Mathematical_Operators,
  startCode: 8704,
  endCode: 8959,
  characters: [
    { "code": 8704, "name": "FOR ALL", "cat": "Sm", "bidi": "ON" },
    { "code": 8705, "name": "COMPLEMENT", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8706, "name": "PARTIAL DIFFERENTIAL", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8707, "name": "THERE EXISTS", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8708,
      "name": "THERE DOES NOT EXIST",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8707, 824],
      "bidiMirror": true,
    },
    { "code": 8709, "name": "EMPTY SET", "cat": "Sm", "bidi": "ON" },
    { "code": 8710, "name": "INCREMENT", "cat": "Sm", "bidi": "ON" },
    { "code": 8711, "name": "NABLA", "cat": "Sm", "bidi": "ON" },
    { "code": 8712, "name": "ELEMENT OF", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8713, "name": "NOT AN ELEMENT OF", "cat": "Sm", "bidi": "ON", "decomp": [8712, 824], "bidiMirror": true },
    { "code": 8714, "name": "SMALL ELEMENT OF", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8715, "name": "CONTAINS AS MEMBER", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8716,
      "name": "DOES NOT CONTAIN AS MEMBER",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8715, 824],
      "bidiMirror": true,
    },
    { "code": 8717, "name": "SMALL CONTAINS AS MEMBER", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8718, "name": "END OF PROOF", "cat": "Sm", "bidi": "ON" },
    { "code": 8719, "name": "N-ARY PRODUCT", "cat": "Sm", "bidi": "ON" },
    { "code": 8720, "name": "N-ARY COPRODUCT", "cat": "Sm", "bidi": "ON" },
    { "code": 8721, "name": "N-ARY SUMMATION", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8722, "name": "MINUS SIGN", "cat": "Sm", "bidi": "ES" },
    { "code": 8723, "name": "MINUS-OR-PLUS SIGN", "cat": "Sm", "bidi": "ET" },
    { "code": 8724, "name": "DOT PLUS", "cat": "Sm", "bidi": "ON" },
    { "code": 8725, "name": "DIVISION SLASH", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8726, "name": "SET MINUS", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8727, "name": "ASTERISK OPERATOR", "cat": "Sm", "bidi": "ON" },
    { "code": 8728, "name": "RING OPERATOR", "cat": "Sm", "bidi": "ON" },
    { "code": 8729, "name": "BULLET OPERATOR", "cat": "Sm", "bidi": "ON" },
    { "code": 8730, "name": "SQUARE ROOT", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8731, "name": "CUBE ROOT", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8732, "name": "FOURTH ROOT", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8733, "name": "PROPORTIONAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8734, "name": "INFINITY", "cat": "Sm", "bidi": "ON" },
    { "code": 8735, "name": "RIGHT ANGLE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8736, "name": "ANGLE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8737, "name": "MEASURED ANGLE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8738, "name": "SPHERICAL ANGLE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8739, "name": "DIVIDES", "cat": "Sm", "bidi": "ON" },
    { "code": 8740, "name": "DOES NOT DIVIDE", "cat": "Sm", "bidi": "ON", "decomp": [8739, 824], "bidiMirror": true },
    { "code": 8741, "name": "PARALLEL TO", "cat": "Sm", "bidi": "ON" },
    { "code": 8742, "name": "NOT PARALLEL TO", "cat": "Sm", "bidi": "ON", "decomp": [8741, 824], "bidiMirror": true },
    { "code": 8743, "name": "LOGICAL AND", "cat": "Sm", "bidi": "ON" },
    { "code": 8744, "name": "LOGICAL OR", "cat": "Sm", "bidi": "ON" },
    { "code": 8745, "name": "INTERSECTION", "cat": "Sm", "bidi": "ON" },
    { "code": 8746, "name": "UNION", "cat": "Sm", "bidi": "ON" },
    { "code": 8747, "name": "INTEGRAL", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8748,
      "name": "DOUBLE INTEGRAL",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8747, 8747],
      "decompType": "compat",
      "bidiMirror": true,
    },
    {
      "code": 8749,
      "name": "TRIPLE INTEGRAL",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8747, 8747, 8747],
      "decompType": "compat",
      "bidiMirror": true,
    },
    { "code": 8750, "name": "CONTOUR INTEGRAL", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8751,
      "name": "SURFACE INTEGRAL",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8750, 8750],
      "decompType": "compat",
      "bidiMirror": true,
    },
    {
      "code": 8752,
      "name": "VOLUME INTEGRAL",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8750, 8750, 8750],
      "decompType": "compat",
      "bidiMirror": true,
    },
    { "code": 8753, "name": "CLOCKWISE INTEGRAL", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8754, "name": "CLOCKWISE CONTOUR INTEGRAL", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8755, "name": "ANTICLOCKWISE CONTOUR INTEGRAL", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8756, "name": "THEREFORE", "cat": "Sm", "bidi": "ON" },
    { "code": 8757, "name": "BECAUSE", "cat": "Sm", "bidi": "ON" },
    { "code": 8758, "name": "RATIO", "cat": "Sm", "bidi": "ON" },
    { "code": 8759, "name": "PROPORTION", "cat": "Sm", "bidi": "ON" },
    { "code": 8760, "name": "DOT MINUS", "cat": "Sm", "bidi": "ON" },
    { "code": 8761, "name": "EXCESS", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8762, "name": "GEOMETRIC PROPORTION", "cat": "Sm", "bidi": "ON" },
    { "code": 8763, "name": "HOMOTHETIC", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8764, "name": "TILDE OPERATOR", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8765, "name": "REVERSED TILDE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8766, "name": "INVERTED LAZY S", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8767, "name": "SINE WAVE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8768, "name": "WREATH PRODUCT", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8769, "name": "NOT TILDE", "cat": "Sm", "bidi": "ON", "decomp": [8764, 824], "bidiMirror": true },
    { "code": 8770, "name": "MINUS TILDE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8771, "name": "ASYMPTOTICALLY EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8772,
      "name": "NOT ASYMPTOTICALLY EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8771, 824],
      "bidiMirror": true,
    },
    { "code": 8773, "name": "APPROXIMATELY EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8774, "name": "APPROXIMATELY BUT NOT ACTUALLY EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8775,
      "name": "NEITHER APPROXIMATELY NOR ACTUALLY EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8773, 824],
      "bidiMirror": true,
    },
    { "code": 8776, "name": "ALMOST EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8777,
      "name": "NOT ALMOST EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8776, 824],
      "bidiMirror": true,
    },
    { "code": 8778, "name": "ALMOST EQUAL OR EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8779, "name": "TRIPLE TILDE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8780, "name": "ALL EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8781, "name": "EQUIVALENT TO", "cat": "Sm", "bidi": "ON" },
    { "code": 8782, "name": "GEOMETRICALLY EQUIVALENT TO", "cat": "Sm", "bidi": "ON" },
    { "code": 8783, "name": "DIFFERENCE BETWEEN", "cat": "Sm", "bidi": "ON" },
    { "code": 8784, "name": "APPROACHES THE LIMIT", "cat": "Sm", "bidi": "ON" },
    { "code": 8785, "name": "GEOMETRICALLY EQUAL TO", "cat": "Sm", "bidi": "ON" },
    { "code": 8786, "name": "APPROXIMATELY EQUAL TO OR THE IMAGE OF", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8787, "name": "IMAGE OF OR APPROXIMATELY EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8788, "name": "COLON EQUALS", "cat": "Sm", "bidi": "ON", "bidiMirror": true, "oldName": "COLON EQUAL" },
    { "code": 8789, "name": "EQUALS COLON", "cat": "Sm", "bidi": "ON", "bidiMirror": true, "oldName": "EQUAL COLON" },
    { "code": 8790, "name": "RING IN EQUAL TO", "cat": "Sm", "bidi": "ON" },
    { "code": 8791, "name": "RING EQUAL TO", "cat": "Sm", "bidi": "ON" },
    { "code": 8792, "name": "CORRESPONDS TO", "cat": "Sm", "bidi": "ON" },
    { "code": 8793, "name": "ESTIMATES", "cat": "Sm", "bidi": "ON" },
    { "code": 8794, "name": "EQUIANGULAR TO", "cat": "Sm", "bidi": "ON" },
    { "code": 8795, "name": "STAR EQUALS", "cat": "Sm", "bidi": "ON" },
    { "code": 8796, "name": "DELTA EQUAL TO", "cat": "Sm", "bidi": "ON" },
    { "code": 8797, "name": "EQUAL TO BY DEFINITION", "cat": "Sm", "bidi": "ON" },
    { "code": 8798, "name": "MEASURED BY", "cat": "Sm", "bidi": "ON" },
    { "code": 8799, "name": "QUESTIONED EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8800, "name": "NOT EQUAL TO", "cat": "Sm", "bidi": "ON", "decomp": [61, 824], "bidiMirror": true },
    { "code": 8801, "name": "IDENTICAL TO", "cat": "Sm", "bidi": "ON" },
    { "code": 8802, "name": "NOT IDENTICAL TO", "cat": "Sm", "bidi": "ON", "decomp": [8801, 824], "bidiMirror": true },
    { "code": 8803, "name": "STRICTLY EQUIVALENT TO", "cat": "Sm", "bidi": "ON" },
    {
      "code": 8804,
      "name": "LESS-THAN OR EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "LESS THAN OR EQUAL TO",
    },
    {
      "code": 8805,
      "name": "GREATER-THAN OR EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "GREATER THAN OR EQUAL TO",
    },
    {
      "code": 8806,
      "name": "LESS-THAN OVER EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "LESS THAN OVER EQUAL TO",
    },
    {
      "code": 8807,
      "name": "GREATER-THAN OVER EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "GREATER THAN OVER EQUAL TO",
    },
    {
      "code": 8808,
      "name": "LESS-THAN BUT NOT EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "LESS THAN BUT NOT EQUAL TO",
    },
    {
      "code": 8809,
      "name": "GREATER-THAN BUT NOT EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "GREATER THAN BUT NOT EQUAL TO",
    },
    {
      "code": 8810,
      "name": "MUCH LESS-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "MUCH LESS THAN",
    },
    {
      "code": 8811,
      "name": "MUCH GREATER-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "MUCH GREATER THAN",
    },
    { "code": 8812, "name": "BETWEEN", "cat": "Sm", "bidi": "ON" },
    { "code": 8813, "name": "NOT EQUIVALENT TO", "cat": "Sm", "bidi": "ON", "decomp": [8781, 824], "bidiMirror": true },
    {
      "code": 8814,
      "name": "NOT LESS-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [60, 824],
      "bidiMirror": true,
      "oldName": "NOT LESS THAN",
    },
    {
      "code": 8815,
      "name": "NOT GREATER-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [62, 824],
      "bidiMirror": true,
      "oldName": "NOT GREATER THAN",
    },
    {
      "code": 8816,
      "name": "NEITHER LESS-THAN NOR EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8804, 824],
      "bidiMirror": true,
      "oldName": "NEITHER LESS THAN NOR EQUAL TO",
    },
    {
      "code": 8817,
      "name": "NEITHER GREATER-THAN NOR EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8805, 824],
      "bidiMirror": true,
      "oldName": "NEITHER GREATER THAN NOR EQUAL TO",
    },
    {
      "code": 8818,
      "name": "LESS-THAN OR EQUIVALENT TO",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "LESS THAN OR EQUIVALENT TO",
    },
    {
      "code": 8819,
      "name": "GREATER-THAN OR EQUIVALENT TO",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "GREATER THAN OR EQUIVALENT TO",
    },
    {
      "code": 8820,
      "name": "NEITHER LESS-THAN NOR EQUIVALENT TO",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8818, 824],
      "bidiMirror": true,
      "oldName": "NEITHER LESS THAN NOR EQUIVALENT TO",
    },
    {
      "code": 8821,
      "name": "NEITHER GREATER-THAN NOR EQUIVALENT TO",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8819, 824],
      "bidiMirror": true,
      "oldName": "NEITHER GREATER THAN NOR EQUIVALENT TO",
    },
    {
      "code": 8822,
      "name": "LESS-THAN OR GREATER-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "LESS THAN OR GREATER THAN",
    },
    {
      "code": 8823,
      "name": "GREATER-THAN OR LESS-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "GREATER THAN OR LESS THAN",
    },
    {
      "code": 8824,
      "name": "NEITHER LESS-THAN NOR GREATER-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8822, 824],
      "bidiMirror": true,
      "oldName": "NEITHER LESS THAN NOR GREATER THAN",
    },
    {
      "code": 8825,
      "name": "NEITHER GREATER-THAN NOR LESS-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8823, 824],
      "bidiMirror": true,
      "oldName": "NEITHER GREATER THAN NOR LESS THAN",
    },
    { "code": 8826, "name": "PRECEDES", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8827, "name": "SUCCEEDS", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8828, "name": "PRECEDES OR EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8829, "name": "SUCCEEDS OR EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8830, "name": "PRECEDES OR EQUIVALENT TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8831, "name": "SUCCEEDS OR EQUIVALENT TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8832, "name": "DOES NOT PRECEDE", "cat": "Sm", "bidi": "ON", "decomp": [8826, 824], "bidiMirror": true },
    { "code": 8833, "name": "DOES NOT SUCCEED", "cat": "Sm", "bidi": "ON", "decomp": [8827, 824], "bidiMirror": true },
    { "code": 8834, "name": "SUBSET OF", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8835, "name": "SUPERSET OF", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8836, "name": "NOT A SUBSET OF", "cat": "Sm", "bidi": "ON", "decomp": [8834, 824], "bidiMirror": true },
    { "code": 8837, "name": "NOT A SUPERSET OF", "cat": "Sm", "bidi": "ON", "decomp": [8835, 824], "bidiMirror": true },
    { "code": 8838, "name": "SUBSET OF OR EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8839, "name": "SUPERSET OF OR EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8840,
      "name": "NEITHER A SUBSET OF NOR EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8838, 824],
      "bidiMirror": true,
    },
    {
      "code": 8841,
      "name": "NEITHER A SUPERSET OF NOR EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8839, 824],
      "bidiMirror": true,
    },
    {
      "code": 8842,
      "name": "SUBSET OF WITH NOT EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "SUBSET OF OR NOT EQUAL TO",
    },
    {
      "code": 8843,
      "name": "SUPERSET OF WITH NOT EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "SUPERSET OF OR NOT EQUAL TO",
    },
    { "code": 8844, "name": "MULTISET", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8845, "name": "MULTISET MULTIPLICATION", "cat": "Sm", "bidi": "ON" },
    { "code": 8846, "name": "MULTISET UNION", "cat": "Sm", "bidi": "ON" },
    { "code": 8847, "name": "SQUARE IMAGE OF", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8848, "name": "SQUARE ORIGINAL OF", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8849, "name": "SQUARE IMAGE OF OR EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8850, "name": "SQUARE ORIGINAL OF OR EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8851, "name": "SQUARE CAP", "cat": "Sm", "bidi": "ON" },
    { "code": 8852, "name": "SQUARE CUP", "cat": "Sm", "bidi": "ON" },
    { "code": 8853, "name": "CIRCLED PLUS", "cat": "Sm", "bidi": "ON" },
    { "code": 8854, "name": "CIRCLED MINUS", "cat": "Sm", "bidi": "ON" },
    { "code": 8855, "name": "CIRCLED TIMES", "cat": "Sm", "bidi": "ON" },
    { "code": 8856, "name": "CIRCLED DIVISION SLASH", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8857, "name": "CIRCLED DOT OPERATOR", "cat": "Sm", "bidi": "ON" },
    { "code": 8858, "name": "CIRCLED RING OPERATOR", "cat": "Sm", "bidi": "ON" },
    { "code": 8859, "name": "CIRCLED ASTERISK OPERATOR", "cat": "Sm", "bidi": "ON" },
    { "code": 8860, "name": "CIRCLED EQUALS", "cat": "Sm", "bidi": "ON" },
    { "code": 8861, "name": "CIRCLED DASH", "cat": "Sm", "bidi": "ON" },
    { "code": 8862, "name": "SQUARED PLUS", "cat": "Sm", "bidi": "ON" },
    { "code": 8863, "name": "SQUARED MINUS", "cat": "Sm", "bidi": "ON" },
    { "code": 8864, "name": "SQUARED TIMES", "cat": "Sm", "bidi": "ON" },
    { "code": 8865, "name": "SQUARED DOT OPERATOR", "cat": "Sm", "bidi": "ON" },
    { "code": 8866, "name": "RIGHT TACK", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8867, "name": "LEFT TACK", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8868, "name": "DOWN TACK", "cat": "Sm", "bidi": "ON" },
    { "code": 8869, "name": "UP TACK", "cat": "Sm", "bidi": "ON" },
    { "code": 8870, "name": "ASSERTION", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8871, "name": "MODELS", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8872, "name": "TRUE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8873, "name": "FORCES", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8874, "name": "TRIPLE VERTICAL BAR RIGHT TURNSTILE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8875,
      "name": "DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
    },
    { "code": 8876, "name": "DOES NOT PROVE", "cat": "Sm", "bidi": "ON", "decomp": [8866, 824], "bidiMirror": true },
    { "code": 8877, "name": "NOT TRUE", "cat": "Sm", "bidi": "ON", "decomp": [8872, 824], "bidiMirror": true },
    { "code": 8878, "name": "DOES NOT FORCE", "cat": "Sm", "bidi": "ON", "decomp": [8873, 824], "bidiMirror": true },
    {
      "code": 8879,
      "name": "NEGATED DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8875, 824],
      "bidiMirror": true,
    },
    { "code": 8880, "name": "PRECEDES UNDER RELATION", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8881, "name": "SUCCEEDS UNDER RELATION", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8882, "name": "NORMAL SUBGROUP OF", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8883, "name": "CONTAINS AS NORMAL SUBGROUP", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8884, "name": "NORMAL SUBGROUP OF OR EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8885, "name": "CONTAINS AS NORMAL SUBGROUP OR EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8886, "name": "ORIGINAL OF", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8887, "name": "IMAGE OF", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8888, "name": "MULTIMAP", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8889, "name": "HERMITIAN CONJUGATE MATRIX", "cat": "Sm", "bidi": "ON" },
    { "code": 8890, "name": "INTERCALATE", "cat": "Sm", "bidi": "ON" },
    { "code": 8891, "name": "XOR", "cat": "Sm", "bidi": "ON" },
    { "code": 8892, "name": "NAND", "cat": "Sm", "bidi": "ON" },
    { "code": 8893, "name": "NOR", "cat": "Sm", "bidi": "ON" },
    { "code": 8894, "name": "RIGHT ANGLE WITH ARC", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8895, "name": "RIGHT TRIANGLE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8896, "name": "N-ARY LOGICAL AND", "cat": "Sm", "bidi": "ON" },
    { "code": 8897, "name": "N-ARY LOGICAL OR", "cat": "Sm", "bidi": "ON" },
    { "code": 8898, "name": "N-ARY INTERSECTION", "cat": "Sm", "bidi": "ON" },
    { "code": 8899, "name": "N-ARY UNION", "cat": "Sm", "bidi": "ON" },
    { "code": 8900, "name": "DIAMOND OPERATOR", "cat": "Sm", "bidi": "ON" },
    { "code": 8901, "name": "DOT OPERATOR", "cat": "Sm", "bidi": "ON" },
    { "code": 8902, "name": "STAR OPERATOR", "cat": "Sm", "bidi": "ON" },
    { "code": 8903, "name": "DIVISION TIMES", "cat": "Sm", "bidi": "ON" },
    { "code": 8904, "name": "BOWTIE", "cat": "Sm", "bidi": "ON" },
    { "code": 8905, "name": "LEFT NORMAL FACTOR SEMIDIRECT PRODUCT", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8906, "name": "RIGHT NORMAL FACTOR SEMIDIRECT PRODUCT", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8907, "name": "LEFT SEMIDIRECT PRODUCT", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8908, "name": "RIGHT SEMIDIRECT PRODUCT", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8909, "name": "REVERSED TILDE EQUALS", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8910, "name": "CURLY LOGICAL OR", "cat": "Sm", "bidi": "ON" },
    { "code": 8911, "name": "CURLY LOGICAL AND", "cat": "Sm", "bidi": "ON" },
    { "code": 8912, "name": "DOUBLE SUBSET", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8913, "name": "DOUBLE SUPERSET", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8914, "name": "DOUBLE INTERSECTION", "cat": "Sm", "bidi": "ON" },
    { "code": 8915, "name": "DOUBLE UNION", "cat": "Sm", "bidi": "ON" },
    { "code": 8916, "name": "PITCHFORK", "cat": "Sm", "bidi": "ON" },
    { "code": 8917, "name": "EQUAL AND PARALLEL TO", "cat": "Sm", "bidi": "ON" },
    {
      "code": 8918,
      "name": "LESS-THAN WITH DOT",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "LESS THAN WITH DOT",
    },
    {
      "code": 8919,
      "name": "GREATER-THAN WITH DOT",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "GREATER THAN WITH DOT",
    },
    {
      "code": 8920,
      "name": "VERY MUCH LESS-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "VERY MUCH LESS THAN",
    },
    {
      "code": 8921,
      "name": "VERY MUCH GREATER-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "VERY MUCH GREATER THAN",
    },
    {
      "code": 8922,
      "name": "LESS-THAN EQUAL TO OR GREATER-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "LESS THAN EQUAL TO OR GREATER THAN",
    },
    {
      "code": 8923,
      "name": "GREATER-THAN EQUAL TO OR LESS-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "GREATER THAN EQUAL TO OR LESS THAN",
    },
    {
      "code": 8924,
      "name": "EQUAL TO OR LESS-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "EQUAL TO OR LESS THAN",
    },
    {
      "code": 8925,
      "name": "EQUAL TO OR GREATER-THAN",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "EQUAL TO OR GREATER THAN",
    },
    { "code": 8926, "name": "EQUAL TO OR PRECEDES", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8927, "name": "EQUAL TO OR SUCCEEDS", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8928,
      "name": "DOES NOT PRECEDE OR EQUAL",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8828, 824],
      "bidiMirror": true,
    },
    {
      "code": 8929,
      "name": "DOES NOT SUCCEED OR EQUAL",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8829, 824],
      "bidiMirror": true,
    },
    {
      "code": 8930,
      "name": "NOT SQUARE IMAGE OF OR EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8849, 824],
      "bidiMirror": true,
    },
    {
      "code": 8931,
      "name": "NOT SQUARE ORIGINAL OF OR EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8850, 824],
      "bidiMirror": true,
    },
    { "code": 8932, "name": "SQUARE IMAGE OF OR NOT EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8933, "name": "SQUARE ORIGINAL OF OR NOT EQUAL TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8934,
      "name": "LESS-THAN BUT NOT EQUIVALENT TO",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "LESS THAN BUT NOT EQUIVALENT TO",
    },
    {
      "code": 8935,
      "name": "GREATER-THAN BUT NOT EQUIVALENT TO",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
      "oldName": "GREATER THAN BUT NOT EQUIVALENT TO",
    },
    { "code": 8936, "name": "PRECEDES BUT NOT EQUIVALENT TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8937, "name": "SUCCEEDS BUT NOT EQUIVALENT TO", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8938,
      "name": "NOT NORMAL SUBGROUP OF",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8882, 824],
      "bidiMirror": true,
    },
    {
      "code": 8939,
      "name": "DOES NOT CONTAIN AS NORMAL SUBGROUP",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8883, 824],
      "bidiMirror": true,
    },
    {
      "code": 8940,
      "name": "NOT NORMAL SUBGROUP OF OR EQUAL TO",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8884, 824],
      "bidiMirror": true,
    },
    {
      "code": 8941,
      "name": "DOES NOT CONTAIN AS NORMAL SUBGROUP OR EQUAL",
      "cat": "Sm",
      "bidi": "ON",
      "decomp": [8885, 824],
      "bidiMirror": true,
    },
    { "code": 8942, "name": "VERTICAL ELLIPSIS", "cat": "Sm", "bidi": "ON" },
    { "code": 8943, "name": "MIDLINE HORIZONTAL ELLIPSIS", "cat": "Sm", "bidi": "ON" },
    { "code": 8944, "name": "UP RIGHT DIAGONAL ELLIPSIS", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8945, "name": "DOWN RIGHT DIAGONAL ELLIPSIS", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8946, "name": "ELEMENT OF WITH LONG HORIZONTAL STROKE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8947,
      "name": "ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
    },
    {
      "code": 8948,
      "name": "SMALL ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
    },
    { "code": 8949, "name": "ELEMENT OF WITH DOT ABOVE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8950, "name": "ELEMENT OF WITH OVERBAR", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8951, "name": "SMALL ELEMENT OF WITH OVERBAR", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8952, "name": "ELEMENT OF WITH UNDERBAR", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8953, "name": "ELEMENT OF WITH TWO HORIZONTAL STROKES", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8954, "name": "CONTAINS WITH LONG HORIZONTAL STROKE", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    {
      "code": 8955,
      "name": "CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
    },
    {
      "code": 8956,
      "name": "SMALL CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE",
      "cat": "Sm",
      "bidi": "ON",
      "bidiMirror": true,
    },
    { "code": 8957, "name": "CONTAINS WITH OVERBAR", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8958, "name": "SMALL CONTAINS WITH OVERBAR", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
    { "code": 8959, "name": "Z NOTATION BAG MEMBERSHIP", "cat": "Sm", "bidi": "ON", "bidiMirror": true },
  ],
};
