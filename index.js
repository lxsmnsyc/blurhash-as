const fs = require("fs");
const loader = require("@assemblyscript/loader");
const imports = { /* imports go here */ };
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
const blurhash = wasmModule.exports;
module.exports = {
  encode(pixels, width, height, x, y) {
    const pixelsData = blurhash.__newArray(blurhash.Uint8ClampedArrayID, pixels);
    const result = blurhash.encode(pixelsData, width, height, x, y);
    return blurhash.__getString(result);
  },
  decode(string, width, height, punch) {
    const stringPointer = blurhash.__newString(string);
    const result = blurhash.decode(stringPointer, width, height, punch);
    return blurhash.__getUint8ClampedArray(result);
  },
};
