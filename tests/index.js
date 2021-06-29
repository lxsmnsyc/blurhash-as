const assert = require("assert");
const blurhash_wasm = require("..");
const blurhash = require('blurhash');
const pixels = require('image-pixels');
const imageEncode = require('image-encode');
const fs = require('fs/promises');

function runTest(name, extension = 'jpg') {
  pixels(`./tests/${name}.${extension}`).then(({ data, width, height }) => {
    console.time(`${name} encode blurhash-ts`);
    const EXPECTED = blurhash.encode(data, width, height, 4, 3);
    console.timeEnd(`${name} encode blurhash-ts`);
    console.time(`${name} encode blurhash-as`);
    const result = blurhash_wasm.encode(data, width, height, 4, 3);
    console.timeEnd(`${name} encode blurhash-as`);
    console.log(name, result, EXPECTED);

    console.time(`${name} decode blurhash-ts`);
    blurhash.decode(result, width, height)
    console.timeEnd(`${name} decode blurhash-ts`);
    console.time(`${name} decode blurhash-as`);
    blurhash_wasm.decode(result, width, height);
    console.timeEnd(`${name} decode blurhash-as`);
  
    const decodedData = blurhash_wasm.decode(result, width, height);
  
    return fs.writeFile(
      `./tests/${name}.blurhash.jpg`,
      Buffer.from(imageEncode(decodedData, [width, height], 'jpg'))
    );
  }).catch((error) => {
    console.log(error);
  });
}

runTest('example');
runTest('example-2');
runTest('example-3');
runTest('example-4');
