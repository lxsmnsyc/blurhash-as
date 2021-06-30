const assert = require("assert");
const blurhash_wasm = require("..");
const blurhash = require('blurhash');
const pixels = require('image-pixels');
const imageEncode = require('image-encode');
const fs = require('fs/promises');
const b = require('benny')

function runBlurhashTS(name, { data, width, height }) {
  const result = blurhash.encode(data, width, height, 4, 3);
  const decodedData = blurhash.decode(result, width, height)

  return fs.writeFile(
    `./tests/${name}.blurhash-ts.jpg`,
    Buffer.from(imageEncode(decodedData, [width, height], 'jpg'))
  );
}

async function runBlurhashAS(name, { data, width, height }) {
  const result = await blurhash_wasm.encode(data, width, height, 4, 3);
  const decodedData = await blurhash_wasm.decode(result, width, height)
  return fs.writeFile(
    `./tests/${name}.blurhash-as.jpg`,
    Buffer.from(imageEncode(decodedData, [width, height], 'jpg'))
  );
}

function runTest(name, extension = 'jpg') {
  pixels(`./tests/${name}.${extension}`).then((result) => {
    return b.suite(
      name,
     
      b.add('blurhash-as', async () => {
        await runBlurhashAS(name, result);
      }),
     
      b.add('blurhash-ts', async () => {
        await runBlurhashTS(name, result);
      }),
     
      b.cycle(),
      b.complete(),
      b.save({ file: name, version: '1.0.0' }),
      b.save({ file: name, format: 'chart.html' }),
    );
  }).catch((error) => {
    console.log(error);
  });
}

blurhash_wasm.initialize().then(() => {
  runTest('example');
  runTest('example-2');
  runTest('example-3');
  runTest('example-4');
});
