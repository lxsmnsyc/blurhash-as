# rollup-plugin-blurhash-as

> Rollup plugin for generating Blurhash with `blurhash-as`

[![NPM](https://img.shields.io/npm/v/rollup-plugin-blurhash-as.svg)](https://www.npmjs.com/package/rollup-plugin-blurhash-as) [![JavaScript Style Guide](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

## Install

```bash
npm install --save-dev rollup-plugin-blurhash-as
```

```bash
yarn add -D rollup-plugin-blurhash-as
```

## Usage

### Config

*NOTE*: Make sure that this plugin is used first before any asset-importing plugins (e.g. `@rollup/plugin-image`), as well as, this plugin requires the use of said plugins to allow image imports.

```ts
// rollup.config.js
import blurhash from 'rollup-plugin-blurhash-as';

export default {
  plugins: [
    blurhash(),
  ],
};
```

For Vite users, this plugin should be used with the `pre` order, as Vite allows image imports.

```ts
import blurhash from 'rollup-plugin-blurhash-as';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...blurhash(),
      enforce: 'pre'
    }
  ]
});
```

### Code

```ts
// Allows importing both JPG and PNG files
// Valid blurhash values includes "css", "svg", "jpg" and "png"
import * as image from './example.jpg?blurhash=css';

console.log(image);
// {
//   // The blurhash of the image
//   hash: '...',
//   // The generated placeholder
//   // For "svg", "jpg" and "png",
//   // This is a string output.
//   placeholder: {...},
//   // The url of the image
//   source: '...',
//   // Dimensions of the image
//   width: ...,
//   height: ...,
// }
```

#### With `react-blurhash-as`

Basic Rendering

```tsx
import { Blurhash } from 'react-blurhash-as';
import * as image from './example.jpg?blurhash=css';

<Blurhash
  mode="css" // "svg", "canvas" or "image
  src={image.source}
  alt=""
  width={image.width}
  height={image.height}
  hash={image.hash}
/>
```

Static Rendering

```tsx
import { BlurhashStatic } from 'react-blurhash-as';
import * as image from './example.jpg?blurhash=css';

<BlurhashStatic
  mode="css" // "svg" or "image"
  src={image.source}
  alt=""
  width={image.width}
  height={image.height}
  placeholder={image.placeholder}
/>
```

### Typescript

You can refer to `rollup-plugin-blurhash-as/shim`:

```ts
/// <reference types="rollup-plugin-blurhash-as/shim" />
```

## License

MIT © [lxsmnsyc](https://github.com/lxsmnsyc)
