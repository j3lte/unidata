# @j3lte/unidata

[![JSR](https://jsr.io/badges/@j3lte/unidata)](https://jsr.io/@j3lte/unidata)
[![GitHub Release](https://img.shields.io/github/v/release/j3lte/unidata)](https://github.com/j3lte/unidata/releases/latest)
[![NPM Version](https://img.shields.io/npm/v/unidata16)](https://www.npmjs.com/package/unidata16)
[![NPM Downloads](https://img.shields.io/npm/dm/unidata16)](https://www.npmjs.com/package/unidata16)
[![License](https://img.shields.io/github/license/j3lte/unidata)](https://github.com/j3lte/unidata/blob/main/LICENSE)

A comprehensive Unicode data library for Deno and Node.js, providing access to the latest Unicode 16.0.0 character sets and metadata.

## ✨ Features

- **Latest Unicode Support**: Based on [Unicode Standard 16.0.0](https://www.unicode.org/versions/Unicode16.0.0/)
- **Complete Character Sets**: Access to all 400+ Unicode blocks
- **Rich Metadata**: Character codes, names, categories, and properties
- **TypeScript Support**: Full type definitions included
- **Cross-Platform**: Works with both Deno and Node.js
- **Lightweight**: Efficient data structures and tree-shaking support

## 🚀 Installation

### Deno (Recommended)

```bash
deno add @j3lte/unidata
```

### NPM

```bash
npm install unidata16
```

## 📦 Documentation

- [Deno Docs](https://jsr.io/@j3lte/unidata/doc)
- [NPM Package](https://www.npmjs.com/package/unidata16)

## 📖 Usage

### Basic Character Retrieval

```typescript
import { CharacterSetType, getCharacters } from "@j3lte/unidata"; // or "unidata16" if you installed via NPM

// Get all characters from a specific Unicode block
const emoji = getCharacters(CharacterSetType.Emoticons);
console.log(emoji.length); // Number of emoticon characters

// Get characters from multiple blocks
const symbols = getCharacters([
  CharacterSetType.Mathematical_Operators,
  CharacterSetType.Arrows,
  CharacterSetType.Currency_Symbols
]);
```

### Character Set Information

```typescript
import { CharacterSetType, getCharacterBaseSet, getCharacterSet } from "@j3lte/unidata"; // or "unidata16" if you installed via NPM

// Get basic information about a character set
const basicInfo = getCharacterBaseSet(CharacterSetType.Basic_Latin);
console.log(basicInfo);
// {
//   blockName: "Basic Latin",
//   startCode: 0x0020,
//   endCode: 0x007F
// }

// Get complete character set with all character data
const fullSet = getCharacterSet(CharacterSetType.Greek_and_Coptic);
console.log(fullSet.characters[0]);
// {
//   code: 0x0370,
//   name: "GREEK CAPITAL LETTER HETA",
//   cat: "Lu",
//   comb: undefined,
//   bidi: "L",
//   ...
// }
```

### Working with Character Data

```typescript
import { CharacterSetType, getCharacters } from "@j3lte/unidata"; // or "unidata16" if you installed via NPM

// Find characters by properties
const digits = getCharacters(CharacterSetType.Superscripts_and_Subscripts)
  .filter(char => char.num !== undefined);

// Get all currency symbols
const currencies = getCharacters(CharacterSetType.Currency_Symbols)
  .map(char => ({
    symbol: String.fromCodePoint(char.code),
    name: char.name,
    code: char.code
  }));

// Find characters with specific categories
const letters = getCharacters(CharacterSetType.Latin_Extended_A)
  .filter(char => char.cat.startsWith('L')); // All letter categories
```

### Advanced Usage

```typescript
import { CharacterSetType, getCharacters, UNICODE_VERSION } from "@j3lte/unidata"; // or "unidata16" if you installed via NPM

// Get all characters from all blocks
const allCharacters = getCharacters(null);
console.log(`Total characters in Unicode ${UNICODE_VERSION}: ${allCharacters.length}`);

// Create a character lookup by code
const charMap = new Map(
  getCharacters(CharacterSetType.Basic_Latin)
    .map(char => [char.code, char])
);

// Find characters with combining marks
const combiningChars = getCharacters(CharacterSetType.Combining_Diacritical_Marks)
  .filter(char => char.comb !== undefined);
```

## 📚 Available Character Sets

The library provides access to all Unicode 16.0.0 blocks, including:

- **Scripts**: Latin, Greek, Cyrillic, Arabic, Chinese, Japanese, Korean, and many more
- **Symbols**: Mathematical operators, arrows, currency symbols, geometric shapes
- **Emoji**: Emoticons, transport symbols, miscellaneous pictographs
- **Specialized**: Musical notation, chess symbols, playing cards, alchemical symbols
- **Historical**: Ancient scripts, cuneiform, hieroglyphs, and more

For a complete list, see the [`CharacterSetType` enum](https://jsr.io/@j3lte/unidata/doc/~/CharacterSetType) in the source code. You can also see the [Unicode Character Database](https://www.unicode.org/charts/) for more information.

## 🔧 API Reference

### Functions

- `getCharacters(type)`: Retrieve characters from specified Unicode blocks ([doc](https://jsr.io/@j3lte/unidata/doc/~/getCharacters))
- `getCharacterSet(type)`: Get complete character set with metadata ([doc](https://jsr.io/@j3lte/unidata/doc/~/getCharacterSet))
- `getCharacterBaseSet(type)`: Get basic block information ([doc](https://jsr.io/@j3lte/unidata/doc/~/getCharacterBaseSet))
- `UNICODE_VERSION`: Current Unicode version (16.0.0)

### Types

- `Character`: Individual character data with properties ([doc](https://jsr.io/@j3lte/unidata/doc/~/Character))
- `CharacterSet`: Complete character set with metadata ([doc](https://jsr.io/@j3lte/unidata/doc/~/CharacterSet))
- `CharacterSetType`: Enum of all available Unicode blocks ([doc](https://jsr.io/@j3lte/unidata/doc/~/CharacterSetType))

## 🎯 Use Cases

- **Internationalization**: Support for multiple languages and scripts
- **Text Processing**: Character analysis and manipulation
- **Input Validation**: Unicode-aware form validation
- **Font Development**: Character set analysis for font creation
- **Educational Tools**: Unicode learning and exploration
- **Data Analysis**: Character frequency and distribution analysis

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgements

This library is inspired by the excellent Node.js library [unidata](https://github.com/chbrown/unidata) by Christopher Brown. The big difference is that his library is based Unicode version __13.0.0__, while this library is based on Unicode version __16.0.0__.
