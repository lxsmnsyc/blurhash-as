# blurhash-as

> Blurhash implementation in AssemblyScript

[![NPM](https://img.shields.io/npm/v/blurhash-as.svg)](https://www.npmjs.com/package/blurhash-as) [![JavaScript Style Guide](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript) [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/lxsmnsyc/blurhash-as/tree/main/examples/vite-blurhash-demo)

## Install

```bash
npm install --save blurhash-as
```

```bash
yarn add blurhash-as
```

## Usage

```ts
import * as blurhash from 'blurhash-as';

// Initialize the wasm module, optional
blurhash.init().then(() => {
  console.log('Initialized!');
});

// Encode image data
const hash = await blurhash.encode(imageData, width, height, xComponent, yComponent);

// Decode hash
const imageData = await blurhash.decode(hash, width, height, punch);
// You can also use any values for width and height, it is recommended
// to use a dimension with the same aspect ratio as your component dimensions.

// Generate a CSS sheet
const sheet = await blurhash.toCSSSheet(hash, displayWidth, displayHeight, punch);

// Or generate a Style Object
const style = await blurhash.toCSSObject(hash, displayWidth, displayHeight, punch);

// Or generate an SVG string
const svg = await blurhash.toSVG(hash, displayWidth, displayHeight, punch);
```

### Browser

For browser context, you'll have to use `blurhash-as/browser`. The API is the same as `blurhash-as` with the inclusion of `setURL` for identifying the target WASM file. `setURL` is required to be called as-early-as-possible before using the provided `blurhash` functions.

Example in Vite:

```ts
import * as blurhash from 'blurhash-as/browser';
import wasmURL from 'blurhash-as/build/optimized.wasm?url';

blurhash.setURL(wasmURL);
```

## License

MIT © [lxsmnsyc](https://github.com/lxsmnsyc)
