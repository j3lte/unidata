import type { CharacterSetType } from "./enums.ts";

/**
 * Character data
 */
export type Character = {
  /** numeric character code (a non-negative integer) */
  code: number;
  /** character name (ASCII only) */
  name: string;
  /** general category */
  cat: string;
  /** canonical combining class (missing if == 0 "not reordered") */
  comb?: number;
  /** bidirectional category (missing if == 'L' "Letter") */
  bidi?: string;
  /** decomposition type and mapping */
  decompType?: string;
  decomp?: number[];
  /** numeric value of character (may be a fraction, so it not unevaluated) */
  num?: string;
  /** true if character is mirrored in bidirectional text (missing otherwise) */
  bidiMirror?: boolean;
  /** Unicode 1.0 name, if it differs from the current name */
  oldName?: string;
  /** simple uppercase mapping */
  upper?: number;
  /** simple lowercase mapping */
  lower?: number;
  /** simple titlecase mapping */
  title?: number;
};

/**
 * Character set data
 */
export type CharacterSet = {
  /** block name */
  blockName: CharacterSetType;
  /** start code */
  startCode: number;
  /** end code */
  endCode: number;
  /** characters */
  characters: Character[];
};
