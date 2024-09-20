import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Kanbun**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **12688**
 *
 * _End Code:_ **12703**
 *
 * _Total Characters:_ **16**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Kanbun,
  startCode: 12688,
  endCode: 12703,
  characters: [
    { "code": 12688, "name": "IDEOGRAPHIC ANNOTATION LINKING MARK", "cat": "So", "oldName": "KANBUN TATETEN" },
    { "code": 12689, "name": "IDEOGRAPHIC ANNOTATION REVERSE MARK", "cat": "So", "oldName": "KAERITEN RE" },
    {
      "code": 12690,
      "name": "IDEOGRAPHIC ANNOTATION ONE MARK",
      "cat": "No",
      "decomp": [19968],
      "decompType": "super",
      "num": "1",
      "oldName": "KAERITEN ITI",
    },
    {
      "code": 12691,
      "name": "IDEOGRAPHIC ANNOTATION TWO MARK",
      "cat": "No",
      "decomp": [20108],
      "decompType": "super",
      "num": "2",
      "oldName": "KAERITEN NI",
    },
    {
      "code": 12692,
      "name": "IDEOGRAPHIC ANNOTATION THREE MARK",
      "cat": "No",
      "decomp": [19977],
      "decompType": "super",
      "num": "3",
      "oldName": "KAERITEN SAN",
    },
    {
      "code": 12693,
      "name": "IDEOGRAPHIC ANNOTATION FOUR MARK",
      "cat": "No",
      "decomp": [22235],
      "decompType": "super",
      "num": "4",
      "oldName": "KAERITEN SI",
    },
    {
      "code": 12694,
      "name": "IDEOGRAPHIC ANNOTATION TOP MARK",
      "cat": "So",
      "decomp": [19978],
      "decompType": "super",
      "oldName": "KAERITEN ZYOU",
    },
    {
      "code": 12695,
      "name": "IDEOGRAPHIC ANNOTATION MIDDLE MARK",
      "cat": "So",
      "decomp": [20013],
      "decompType": "super",
      "oldName": "KAERITEN TYUU",
    },
    {
      "code": 12696,
      "name": "IDEOGRAPHIC ANNOTATION BOTTOM MARK",
      "cat": "So",
      "decomp": [19979],
      "decompType": "super",
      "oldName": "KAERITEN GE",
    },
    {
      "code": 12697,
      "name": "IDEOGRAPHIC ANNOTATION FIRST MARK",
      "cat": "So",
      "decomp": [30002],
      "decompType": "super",
      "oldName": "KAERITEN KOU",
    },
    {
      "code": 12698,
      "name": "IDEOGRAPHIC ANNOTATION SECOND MARK",
      "cat": "So",
      "decomp": [20057],
      "decompType": "super",
      "oldName": "KAERITEN OTU",
    },
    {
      "code": 12699,
      "name": "IDEOGRAPHIC ANNOTATION THIRD MARK",
      "cat": "So",
      "decomp": [19993],
      "decompType": "super",
      "oldName": "KAERITEN HEI",
    },
    {
      "code": 12700,
      "name": "IDEOGRAPHIC ANNOTATION FOURTH MARK",
      "cat": "So",
      "decomp": [19969],
      "decompType": "super",
      "oldName": "KAERITEN TEI",
    },
    {
      "code": 12701,
      "name": "IDEOGRAPHIC ANNOTATION HEAVEN MARK",
      "cat": "So",
      "decomp": [22825],
      "decompType": "super",
      "oldName": "KAERITEN TEN",
    },
    {
      "code": 12702,
      "name": "IDEOGRAPHIC ANNOTATION EARTH MARK",
      "cat": "So",
      "decomp": [22320],
      "decompType": "super",
      "oldName": "KAERITEN TI",
    },
    {
      "code": 12703,
      "name": "IDEOGRAPHIC ANNOTATION MAN MARK",
      "cat": "So",
      "decomp": [20154],
      "decompType": "super",
      "oldName": "KAERITEN ZIN",
    },
  ],
};
