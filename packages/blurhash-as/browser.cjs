const loader = require('@assemblyscript/loader');

let WASM_URL;
let BLURHASH;

async function setURL(wasmURL) {
  WASM_URL = wasmURL;
}

async function init() {
  if (BLURHASH) {
    return;
  }
  if (!WASM_URL) {
    throw new Error('`blurhash.setURL` has not yet been called to setup the WASM url.')
  }
  const wasmModule = await loader.instantiateStreaming(
    fetch(WASM_URL),
    {},
  );
  BLURHASH = wasmModule.exports;
}

async function encode(pixels, width, height, x, y) {
  await init();
  if (x < 1 || x > 9 || y < 1 || y > 9) {
    throw new Error(`The given component must have a value between 1 to 9. (Received: ${x}, ${y})`);
  }
  if (width * height * 4 !== pixels.length) {
    throw new Error('The image width and height does not match the pixel data.');
  }
  const pixelsData = BLURHASH.__newArray(BLURHASH.Uint8ClampedArrayID, pixels);
  const result = BLURHASH.encode(pixelsData, width, height, x, y);
  const encoded = BLURHASH.__getString(result);
  BLURHASH.__collect();
  return encoded;
}

async function decode(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.decode(stringPointer, width, height, punch);
  const parsed = BLURHASH.__getUint8ClampedArray(result);
  BLURHASH.__collect();
  if (parsed) {
    return parsed;
  }
  throw new Error(`The given hash "${string}" is invalid.`);
}

async function toCSSSheet(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.toCSSSheet(stringPointer, width, height, punch);
  const parsed = BLURHASH.__getString(result);
  BLURHASH.__collect();
  if (parsed) {
    return parsed;
  }
  throw new Error(`The given hash "${string}" is invalid.`);
}

async function toCSSObject(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.toCSSObject(stringPointer, width, height, punch);
  const parsed = BLURHASH.__getString(result);
  BLURHASH.__collect();
  if (parsed) {
    return JSON.parse(parsed);
  }
  throw new Error(`The given hash "${string}" is invalid.`);
}

async function toSVG(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.toSVG(stringPointer, width, height, punch);
  const parsed = BLURHASH.__getString(result);
  BLURHASH.__collect();
  if (parsed) {
    return parsed;
  }
  throw new Error(`The given hash "${string}" is invalid.`);
}

module.exports = {
  setURL,
  decode,
  encode,
  init,
  toCSSSheet,
  toCSSObject,
  toSVG,
};
