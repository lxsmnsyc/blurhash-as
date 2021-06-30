const fs = require('fs/promises');
const loader = require('@assemblyscript/loader');

let BLURHASH;

async function initialize() {
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
  await initialize();
  const pixelsData = BLURHASH.__newArray(BLURHASH.Uint8ClampedArrayID, pixels);
  const result = BLURHASH.encode(pixelsData, width, height, x, y);
  return BLURHASH.__getString(result);
}

async function decode(string, width, height, punch) {
  await initialize();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.decode(stringPointer, width, height, punch);
  return BLURHASH.__getUint8ClampedArray(result);
}

module.exports = {
  decode,
  encode,
  initialize,
};
