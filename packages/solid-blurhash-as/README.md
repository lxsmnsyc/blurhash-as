# solid-blurhash-as

> SolidJS bindings for `blurhash-as`

[![NPM](https://img.shields.io/npm/v/solid-blurhash-as.svg)](https://www.npmjs.com/package/solid-blurhash-as) [![JavaScript Style Guide](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript) [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/lxsmnsyc/blurhash-as/tree/main/examples/vite-solid-demo)

## Install

```bash
npm install --save blurhash-as solid-blurhash-as
```

```bash
yarn add blurhash-as solid-blurhash-as
```

## Usage

### Setup

Since the decoding process runs on the client, Blurhash components uses the `blurhash-as/browser`. As a peer dependency, you must call the `blurhash.setURL` to define the WASM source. This must be called before any usage of Blurhash.

```tsx
import * as blurhash from 'blurhash-as/browser';

// Setup WASM URL, must be called as early as possible
blurhash.setURL(blurhashWASMURL);
```

### Image with Blurhash Placeholder

`Blurhash` provides a way to lazily render images and at the same time, render the placeholders before the images.

```tsx
import { Blurhash } from 'solid-blurhash-as';

// Render a lazy image w/ a Blurhash
<Blurhash
  mode="css" // 'svg', 'canvas' or 'image';
  src={imageSrc}
  alt="This is an image"
  hash={blurhash}
  width={imageWidth}
  height={imageHeight}
  punch={punchValue} // Optional

  // For "css" and "svg" modes, you can provide
  // filter and blur values
  filter={filterValue} // Defaults to 20px
  scale={scaleValue} // Defaults to 1.2

  // For "image" mode, you can provide format
  // and quality values
  format="image/png" // "image/jpeg" or "image/webp"
  quality={0.9} // Implementation-wise, defaults to 0.92

  onLoad={onLoad}
/>
```

### Blurhash Placeholder only

In some circumstances, we want to handle the placeholder logic alone, `BlurhashPlaceholder` renders only the placeholder and not the source image.

```tsx
import { BlurhashPlaceholder } from 'solid-blurhash-as';

// Take note that placeholders are responsive and attempts
// to fill the width and height. Aspect Ratio boxes
// work great here.
<div style={{ width: 100%, height: 100% }}>
  <BlurhashPlaceholder
    visible={showPlaceholder}
    mode="css" // 'svg', 'canvas' or 'image';
    hash={blurhash}
    width={imageWidth}
    height={height}
    punch={punchValue} // Optional

    // For "css" and "svg" modes, you can provide
    // filter and blur values
    filter={filterValue} // Defaults to 20px
    scale={scaleValue} // Defaults to 1.2

    // For "image" mode, you can provide format
    // and quality values
    format="image/png" // "image/jpeg" or "image/webp"
    quality={0.9} // Implementation-wise, defaults to 0.92

    onLoad={onLoad}
  />
</div>
```

### Blurhash Container w/ Custom Placeholder

If you want to use the lazy-loading mechanism of `Blurhash` while providing your own placeholder, you can use `BlurhashContainer`.

```tsx
import { BlurhashContainer } from 'solid-blurhash-as';

<BlurhashContainer
  src={imageSrc}
  alt="This is an image"
  width={imageWidth}
  height={imageHeight}
>
  {

    (visible, showPlaceholder) => (
      <CustomPlaceholder
        // visible controls whether or not the
        // placeholder should render
        visible={visible}
        // showPlaceholder notifies the image to
        // begin rendering after the placeholder
        // has successfully rendered.
        showPlaceholder={showPlaceholder}
      />
    )
  }
</BlurhashContainer>
```

## Static Rendering

Use `BlurhashStatic` to handle the pre-rendered placeholders, in contrast with `Blurhash` which renders the placeholders. This is useful in combination with plugins that renders these placeholders during build-time or for SSR.

Compared to `BlurhashStatic`, the placeholders are not lazily-rendered.

```tsx
import { BlurhashStatic } from 'solid-blurhash-as';

<BlurhashStatic
  mode="css" // 'svg' or 'image';
  src={imageSrc}
  alt="This is an image"
  placeholder={cssPlaceholder}
  width={imageWidth}
  height={imageHeight}
/>
```

### Static Placeholder

```tsx
import { BlurhashStaticPlaceholder } from 'solid-blurhash-as';

<BlurhashStaticPlaceholder
  visible
  mode="css" // "svg" or "image"
  placeholder={placeholder}
  width={width}
  height={height}
/>
```

### Static Container

Similar to `BlurhashContainer` however, the placeholder is not lazily-rendered.

## Styling

`solid-blurhash-as` provides the following class names:

- `blurhash-as__aspect-ratio-box`: The outer container of the Blurhash component, this retains the aspect ratio.
- `blurhash-as__aspect-ratio-content`: The inner container of the Blurhash component.
- `blurhash-as__image-container`: This allows the image and the placeholder to overlap.
- `blurhash-as__image`: The image.
- `blurhash-as__placeholder`: The placeholder

After the image has loaded, the image and the placeholder changes opacity. This is useful if you want to provide transitions when the image is displayed.

## License

MIT © [lxsmnsyc](https://github.com/lxsmnsyc)
