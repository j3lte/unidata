# @j3lte/unidata

[![JSR](https://jsr.io/badges/@j3lte/unidata)](https://jsr.io/@j3lte/unidata)
[![GitHub Release](https://img.shields.io/github/v/release/j3lte/unidata)](https://github.com/j3lte/unidata/releases/latest)

## Overview

This library provides a collection of Unicode data for various characters.

> This library uses Unicode version 16.0.0

## Installation

> Main package is released on JSR, see [here](https://jsr.io/@j3lte/unidata)

### NPM

```bash
npm install unidata16
```

## Usage

```typescript
import { CharacterSetType, getCharacters } from "@j3lte/unidata"; // or "unidata16" if you installed via NPM

const characters = getCharacters(CharacterSetType.Alchemical_Symbols);

console.log(characters);
```

## Acknowledgements

- This library is based on the excellent Node.js library [unidata](https://github.com/chbrown/unidata)
  - The original library is Unicode version 13.0.0

## License

[MIT License](./LICENSE)
