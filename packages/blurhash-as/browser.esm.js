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
  const pixelsData = BLURHASH.__newArray(BLURHASH.Uint8ClampedArrayID, pixels);
  const result = BLURHASH.encode(pixelsData, width, height, x, y);
  return BLURHASH.__getString(result);
}

export async function decode(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.decode(stringPointer, width, height, punch);
  return BLURHASH.__getUint8ClampedArray(result);
}

export async function toCSSSheet(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.toCSSSheet(stringPointer, width, height, punch);
  return BLURHASH.__getString(result);
}

export async function toCSSObject(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.toCSSObject(stringPointer, width, height, punch);
  return JSON.parse(BLURHASH.__getString(result));
}