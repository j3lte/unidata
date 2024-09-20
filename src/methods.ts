import type { Character, CharacterSet } from "./types.ts";
import type { CharacterSetType } from "./enums.ts";
import { data } from "./datasets/data.ts";

/**
 * Get a character set
 *
 * @param type The character set type
 * @returns The character set
 */
export const getCharacterSet = (type: CharacterSetType): CharacterSet => {
  return data[type];
};
/**
 * Get characters from a character set
 *
 * @param type The character set type. If `null`, all characters will be returned. If an array, all characters from the specified character sets will be returned.
 * @returns The characters
 */
export const getCharacters = (type: CharacterSetType | CharacterSetType[] | null): Character[] => {
  if (type === null) {
    return Object.values(data).reduce((acc, d) => {
      return acc.concat(d.characters);
    }, [] as Character[]);
  }

  if (Array.isArray(type)) {
    return type.reduce((acc, t) => {
      return acc.concat(data[t].characters);
    }, [] as Character[]);
  }

  return data[type].characters;
};
