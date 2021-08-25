import { OnLoadArgs, OnLoadResult, Plugin } from 'esbuild';
import * as blurhash from 'blurhash-as';
import fs from 'fs';
import sharp from 'sharp';
import path from 'path';
import {
  getAspectRatio,
  getNearestAspectRatio,
  getScaledComponentRatio,
} from './utils';

interface BlurhashConfig {
  rasterScale?: number;
}

interface ImageData {
  width: number;
  height: number;
  data: Uint8ClampedArray;
}

async function getImageDataFromFile(originalPath: string): Promise<ImageData> {
  const stream = fs.createReadStream(originalPath);
  if (originalPath.endsWith('.png')) {
    const result = await stream.pipe(sharp().png())
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    return {
      width: result.info.width,
      height: result.info.height,
      data: result.data as unknown as Uint8ClampedArray,
    };
  }
  if (originalPath.endsWith('.webp')) {
    const result = await stream.pipe(sharp().webp())
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    return {
      width: result.info.width,
      height: result.info.height,
      data: result.data as unknown as Uint8ClampedArray,
    };
  }
  if (originalPath.endsWith('.jpg')) {
    const result = await stream.pipe(sharp().jpeg())
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    return {
      width: result.info.width,
      height: result.info.height,
      data: result.data as unknown as Uint8ClampedArray,
    };
  }
  throw new Error('unsupported format');
}

function getLoad(
  decode: (hash: string, width: number, height: number) => Promise<string | Record<string, string>>,
): (args: OnLoadArgs) => Promise<OnLoadResult> {
  return async (args) => {
    const { dir, name, ext } = path.parse(args.path);
    const originalPath = `${dir}/${name}${ext.split('?')[0]}`;
    const imageData = await getImageDataFromFile(originalPath);
    const aspectRatio = getAspectRatio(imageData);
    const correctRatio = getNearestAspectRatio(aspectRatio);
    const component = getScaledComponentRatio(correctRatio);
    const encodedHash = await blurhash.encode(
      imageData.data,
      imageData.width,
      imageData.height,
      component.width,
      component.height,
    );
    const result = await decode(
      encodedHash,
      correctRatio.width,
      correctRatio.height,
    );
    return {
      contents: `
export const hash = ${JSON.stringify(encodedHash)};
export const width = ${JSON.stringify(imageData.width)};
export const height = ${JSON.stringify(imageData.height)};
export const placeholder = ${JSON.stringify(result, null, 2)};
export { default as source } from ${JSON.stringify(originalPath)};
      `,
      resolveDir: dir,
    };
  };
}

export default function blurhashASPlugin(
  options?: BlurhashConfig,
): Plugin {
  const rasterScale = options?.rasterScale ?? 5;
  return {
    name: 'blurhash-as',
    setup(build) {
      build.onResolve({ filter: /\.(png|jpg|webp)\?blurhash=css/ }, (args) => ({
        path: args.path,
        namespace: 'blurhash-as-css',
      }));
      build.onResolve({ filter: /\.(png|jpg|webp)\?blurhash=svg/ }, (args) => ({
        path: args.path,
        namespace: 'blurhash-as-svg',
      }));
      build.onResolve({ filter: /\.(png|jpg|webp)\?blurhash=jpe?g/ }, (args) => ({
        path: args.path,
        namespace: 'blurhash-as-jpeg',
      }));
      build.onResolve({ filter: /\.(png|jpg|webp)\?blurhash(=png)?/ }, (args) => ({
        path: args.path,
        namespace: 'blurhash-as-png',
      }));
      build.onResolve({ filter: /\.(png|jpg|webp)\?blurhash=webp/ }, (args) => ({
        path: args.path,
        namespace: 'blurhash-as-webp',
      }));

      build.onLoad(
        { filter: /.*/, namespace: 'blurhash-as-css' },
        getLoad(
          (hash, width, height) => blurhash.toCSSObject(hash, width, height),
        ),
      );
      build.onLoad(
        { filter: /.*/, namespace: 'blurhash-as-svg' },
        getLoad(
          (hash, width, height) => blurhash.toSVG(hash, width, height),
        ),
      );
      build.onLoad(
        { filter: /.*/, namespace: 'blurhash-as-jpeg' },
        getLoad(
          async (hash, width, height) => {
            const decodedBytes = await blurhash.decode(
              hash,
              width * rasterScale,
              height * rasterScale,
            );
            const stream = sharp(Buffer.from(decodedBytes), {
              raw: {
                width: width * rasterScale,
                height: height * rasterScale,
                channels: 4,
              },
            }).jpeg({ quality: 100 });
            const encodedBuffer = await stream.toBuffer();
            const b64 = encodedBuffer.toString('base64');
            return `data:image/jpeg;base64,${b64}`;
          },
        ),
      );
      build.onLoad(
        { filter: /.*/, namespace: 'blurhash-as-png' },
        getLoad(
          async (hash, width, height) => {
            const decodedBytes = await blurhash.decode(
              hash,
              width * rasterScale,
              height * rasterScale,
            );
            const stream = sharp(Buffer.from(decodedBytes), {
              raw: {
                width: width * rasterScale,
                height: height * rasterScale,
                channels: 4,
              },
            }).png();
            const encodedBuffer = await stream.toBuffer();
            const b64 = encodedBuffer.toString('base64');
            return `data:image/png;base64,${b64}`;
          },
        ),
      );
      build.onLoad(
        { filter: /.*/, namespace: 'blurhash-as-webp' },
        getLoad(
          async (hash, width, height) => {
            const decodedBytes = await blurhash.decode(
              hash,
              width * rasterScale,
              height * rasterScale,
            );
            const stream = sharp(Buffer.from(decodedBytes), {
              raw: {
                width: width * rasterScale,
                height: height * rasterScale,
                channels: 4,
              },
            }).webp({ quality: 100 });
            const encodedBuffer = await stream.toBuffer();
            const b64 = encodedBuffer.toString('base64');
            return `data:image/png;base64,${b64}`;
          },
        ),
      );
    },
  };
}
