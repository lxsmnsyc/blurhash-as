import fs from 'fs/promises';
import loader from '@assemblyscript/loader';

let BLURHASH;

export async function initialize() {
  if (BLURHASH) {
    return;
  }
  const wasmModule = await loader.instantiate(
    fs.readFile(__dirname + '/build/optimized.wasm'),
    {},
  );
  BLURHASH = wasmModule.exports;
}

export async function encode(pixels, width, height, x, y) {
  await initialize();
  const pixelsData = BLURHASH.__newArray(BLURHASH.Uint8ClampedArrayID, pixels);
  const result = BLURHASH.encode(pixelsData, width, height, x, y);
  return BLURHASH.__getString(result);
}

export function decode(string, width, height, punch) {
  await initialize();
  const stringPointer = BLURHASH.__newString(string);
  const result = BLURHASH.decode(stringPointer, width, height, punch);
  return BLURHASH.__getUint8ClampedArray(result);
}
