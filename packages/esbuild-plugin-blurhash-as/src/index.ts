import { OnLoadArgs, OnLoadResult, Plugin } from 'esbuild';
import * as blurhash from 'blurhash-as';
import pixels from 'image-pixels';
import encodeImage from 'image-encode';
import path from 'path';
import { getAspectRatio, getNearestAspectRatio, getScaledComponentRatio } from './utils';

interface BlurhashConfig {
  rasterScale?: number;
}

function getLoad(
  decode: (hash: string, width: number, height: number) => Promise<string | Record<string, string>>,
): (args: OnLoadArgs) => Promise<OnLoadResult> {
  return async (args) => {
    const { dir, name, ext } = path.parse(args.path);
    const originalPath = `${dir}/${name}${ext.split('?')[0]}`;
    const imageData = await pixels(originalPath);
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
      component.width,
      component.height,
    );
    return {
      contents: `
export const hash = ${JSON.stringify(encodedHash)};
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
      build.onResolve({ filter: /\.(png|jpg)\?blurhash=css/ }, (args) => ({
        path: args.path,
        namespace: 'blurhash-as-css',
      }));
      build.onResolve({ filter: /\.(png|jpg)\?blurhash=svg/ }, (args) => ({
        path: args.path,
        namespace: 'blurhash-as-svg',
      }));
      build.onResolve({ filter: /\.(png|jpg)\?blurhash=jpe?g/ }, (args) => ({
        path: args.path,
        namespace: 'blurhash-as-jpeg',
      }));
      build.onResolve({ filter: /\.(png|jpg)\?blurhash=png/ }, (args) => ({
        path: args.path,
        namespace: 'blurhash-as-png',
      }));
      // build.onResolve({ filter: /\.(png|jpg)\?blurhash=webp/ }, (args) => ({
      //   path: args.path,
      //   namespace: 'blurhash-as-webp',
      // }));
      build.onResolve({ filter: /\.(png|jpg)\?blurhash/ }, (args) => ({
        path: args.path,
        namespace: 'blurhash-as-png',
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
          (hash, width, height) => blurhash.toCSSObject(hash, width, height),
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
            const encodedData = encodeImage(
              decodedBytes,
              [width * rasterScale, height * rasterScale],
              'jpg',
            );
            const encodedBuffer = Buffer.from(encodedData);
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
            const encodedData = encodeImage(
              decodedBytes,
              [width * rasterScale, height * rasterScale],
              'png',
            );
            const encodedBuffer = Buffer.from(encodedData);
            const b64 = encodedBuffer.toString('base64');
            return `data:image/png;base64,${b64}`;
          },
        ),
      );
    },
  };
}
