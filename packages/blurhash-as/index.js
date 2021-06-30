const fs = require('fs/promises');
const loader = require('@assemblyscript/loader');

let BLURHASH;

async function init() {
  if (BLURHASH) {
    return;
  }
  const wasmModule = await loader.instantiate(
    fs.readFile(__dirname + '/build/optimized.wasm'),
    {},
  );
  BLURHASH = wasmModule.exports;
}

async function encode(pixels, width, height, x, y) {
  await init();
  const pixelsData = BLURHASH.__newArray(BLURHASH.Uint8ClampedArrayID, pixels);
  const result = BLURHASH.encode(pixelsData, width, height, x, y);
  return BLURHASH.__getString(result);
}

async function decode(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.decode(stringPointer, width, height, punch);
  return BLURHASH.__getUint8ClampedArray(result);
}

async function toCSSSheet(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.toCSSSheet(stringPointer, width, height, punch);
  return BLURHASH.__getString(result);
}

async function toCSSObject(string, width, height, punch) {
  await init();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.toCSSObject(stringPointer, width, height, punch);
  return JSON.parse(BLURHASH.__getString(result));
}

module.exports = {
  decode,
  encode,
  init,
  toCSSSheet,
  toCSSObject,
};
