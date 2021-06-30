const assert = require("assert");
const blurhash_wasm = require("..");
const blurhash = require('blurhash');
const pixels = require('image-pixels');
const imageEncode = require('image-encode');
const fs = require('fs/promises');
const b = require('benny')

const RUN_BENCHMARK = false;

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function getAspectRatio(width, height) {
  const r = gcd(width, height);
  return {
    width: width / r,
    height: height / r,
  }
}

async function runBlurhashTS(name, { data, width, height }) {
  const aspectRatio = getAspectRatio(width, height);
  if (!RUN_BENCHMARK) {
    console.log(name, `${aspectRatio.width}:${aspectRatio.height}`);
  }
  const result = blurhash.encode(
    data,
    width,
    height,
    4,
    3,
  );
  const decodedData = blurhash.decode(result, width, height);
  await fs.writeFile(
    `./tests/${name}.blurhash-ts.jpg`,
    Buffer.from(imageEncode(decodedData, [width, height], 'jpg')),
  );
}

async function runBlurhashAS(name, { data, width, height }) {
  const aspectRatio = getAspectRatio(width, height);
  if (!RUN_BENCHMARK) {
    console.log(name, `${aspectRatio.width}:${aspectRatio.height}`);
  }
  const result = await blurhash_wasm.encode(
    data,
    width,
    height,
    4,
    3,
  );
  const decodedData = await blurhash_wasm.decode(result, width, height);
  if (!RUN_BENCHMARK) {
    const sheet = await blurhash_wasm.toCSSSheet(
      result,
      4,
      3,
    );
    await fs.writeFile(
      `./tests/${name}.blurhash-as.css`,
      `.blurhash {\n${sheet}\n}`,
    );
    const svg = await blurhash_wasm.toSVG(
      result,
      4,
      3,
    );
    await fs.writeFile(
      `./tests/${name}.blurhash-as.svg`,
      svg,
    );
  }
  return fs.writeFile(
    `./tests/${name}.blurhash-as.jpg`,
    Buffer.from(imageEncode(decodedData, [width, height], 'jpg'))
  );
}

function runTest(name, extension = 'jpg') {
  pixels(`./tests/${name}.${extension}`).then((result) => {
    if (RUN_BENCHMARK) {
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
    }
    return Promise.all([
      runBlurhashAS(name, result),
      runBlurhashTS(name, result),
    ]);
  }).catch((error) => {
    console.log(error);
  });
}

blurhash_wasm.init().then(() => {
  runTest('example');
  // runTest('example-2');
  // runTest('example-3');
  // runTest('example-4');
});
