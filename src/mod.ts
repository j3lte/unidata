/**
 * # @j3lte/unidata
 *
 * ## Overview
 *
 * This library provides a collection of Unicode data for various characters.
 *
 * > This library uses Unicode version 16.0.0
 *
 * ## Usage
 *
 * ```typescript
 * import { CharacterSetType, getCharacters } from "@j3lte/unidata";
 *
 * const characters = getCharacters(CharacterSetType.Alchemical_Symbols);
 *
 * console.log(characters);
 * ```
 *
 * ## License
 *
 * [MIT License](./LICENSE)
 */

export * from "./types.ts";
export * from "./enums.ts";
/**
 * _Unicode Datasets_
 */
export * as datasets from "./datasets/mod.ts";
export * from "./methods.ts";
/**
 * Unicode version
 */
export const UNICODE_VERSION = "16.0.0";
