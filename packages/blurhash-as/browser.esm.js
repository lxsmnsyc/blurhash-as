import loader from '@assemblyscript/loader';

let WASM_URL;
let BLURHASH;

export async function setURL(wasmURL) {
  WASM_URL = wasmURL;
}

export async function init() {
  if (BLURHASH) {
    return;
  }
  if (!WASM_URL) {
    throw new Error('`blurhash.setURL` has not yet been called to setup the WASM url.')
  }
  const wasmModule = await loader.instantiate(
    fetch(WASM_URL),
    {},
  );
  BLURHASH = wasmModule.exports;
}

export async function encode(pixels, width, height, x, y) {
  await init();
  if (x < 1 || x > 9 || y < 1 || y > 9) {
    throw new Error(`The given component must have a value between 1 to 9. (Received: ${x}, ${y})`);
  }
  if (width * height * 4 !== pixels.length) {
    throw new Error('The image width and height does not match the pixel data.');
  }
  const pixelsData = BLURHASH.__newArray(BLURHASH.Uint8ClampedArrayID, pixels);
  const result = BLURHASH.encode(pixelsData, width, height, x, y);
  return BLURHASH.__getString(result);
}

export async function decode(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.decode(stringPointer, width, height, punch);
  const parsed = BLURHASH.__getUint8ClampedArray(result);
  if (parsed) {
    return parsed;
  }
  throw new Error(`The given hash "${string}" is invalid.`);
}

export async function toCSSSheet(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.toCSSSheet(stringPointer, width, height, punch);
  const parsed = BLURHASH.__getString(result);
  if (parsed) {
    return parsed;
  }
  throw new Error(`The given hash "${string}" is invalid.`);
}

export async function toCSSObject(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.toCSSObject(stringPointer, width, height, punch);
  const parsed = BLURHASH.__getString(result);
  if (parsed) {
    return JSON.parse(parsed);
  }
  throw new Error(`The given hash "${string}" is invalid.`);
}

export async function toSVG(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.toSVG(stringPointer, width, height, punch);
  const parsed = BLURHASH.__getString(result);
  if (parsed) {
    return parsed;
  }
  throw new Error(`The given hash "${string}" is invalid.`);
}