# esbuild-plugin-blurhash-as

> ESBuild plugin for generating Blurhash with `blurhash-as`

[![NPM](https://img.shields.io/npm/v/esbuild-plugin-blurhash-as.svg)](https://www.npmjs.com/package/esbuild-plugin-blurhash-as) [![JavaScript Style Guide](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

## Install

```bash
npm install --save-dev esbuild-plugin-blurhash-as
```

```bash
yarn add -D esbuild-plugin-blurhash-as
```

## Usage

### Config

*NOTE*: If you are using an image loader plugin that allows imports for `.jpg` or `.png`, make sure that the blurhash plugin is called first.

*NOTE*: If you aren't using an image loader plugin, make sure that the `loader` option for `esbuild` is set:

```ts
loader: {
  '.jpg': 'file',
  '.png': 'file,
},
```

```ts
import blurhash from 'esbuild-plugin-blurhash-as';

esbuild.build({
  plugins: [
    blurhash(),
  ],
  loader: {
    '.jpg': 'file',
    '.png': 'file,
  },
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

You can refer to `esbuild-plugin-blurhash-as/shim`:

```ts
/// <reference types="esbuild-plugin-blurhash-as/shim" />
```

## Sponsors

![Sponsors](https://github.com/lxsmnsyc/sponsors/blob/main/sponsors.svg?raw=true)

## License

MIT © [lxsmnsyc](https://github.com/lxsmnsyc)
