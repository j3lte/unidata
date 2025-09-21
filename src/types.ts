import type { BidiClass, Category, CharacterSetType } from "./enums.ts";

/**
 * Character data
 */
export type Character = {
  /** Numeric character code (a non-negative integer) */
  code: number;
  /** Character name (ASCII only) */
  name: string;
  /**
   * General Category
   *
   * See [General Category Values](https://www.unicode.org/reports/tr44/tr44-36.html#General_Category_Values) for more information.
   */
  cat: Category;
  /** Canonical combining class (missing if == 0 "not reordered") */
  comb?: number;
  /**
   * Bidirectional Class Values
   *
   * See [Bidi Category Values](https://www.unicode.org/reports/tr44/tr44-36.html#Bidi_Class_Values) for more information.
   */
  bidi: BidiClass;
  /** Decomposition type and mapping */
  decompType?: string;
  decomp?: number[];
  /** Numeric value of character (may be a fraction, so it not unevaluated) */
  num?: string;
  /** True if character is mirrored in bidirectional text (missing otherwise) */
  bidiMirror?: boolean;
  /** Unicode 1.0 name, if it differs from the current name */
  oldName?: string;
  /** Simple uppercase mapping */
  upper?: number;
  /** Simple lowercase mapping */
  lower?: number;
  /** Simple titlecase mapping */
  title?: number;
};

/**
 * Character base data
 */
export type CharacterBaseSet = {
  /** Block name */
  blockName: CharacterSetType;
  /** Start code */
  startCode: number;
  /** End code */
  endCode: number;
  /** Characters */
  characters: Character[];
};

/**
 * Character set data
 */
export type CharacterSet = CharacterBaseSet & {
  /** Characters */
  characters: Character[];
};
