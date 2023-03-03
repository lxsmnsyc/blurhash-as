import { OnLoadArgs, OnLoadResult, Plugin } from 'esbuild';
import * as blurhash from 'blurhash-as';
import path from 'path';
import {
  getImageDataFromFile,
  toJPEG,
  toPNG,
  toWebP,
} from 'blurhash-as-helper';
import {
  getAspectRatio,
  getNearestAspectRatio,
  getScaledComponentRatio,
} from 'blurhash-as-helper/utils';

export interface BlurhashConfig {
  rasterScale?: number;
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
          (hash, width, height) => toJPEG(hash, width, height, rasterScale),
        ),
      );
      build.onLoad(
        { filter: /.*/, namespace: 'blurhash-as-png' },
        getLoad(
          (hash, width, height) => toPNG(hash, width, height, rasterScale),
        ),
      );
      build.onLoad(
        { filter: /.*/, namespace: 'blurhash-as-webp' },
        getLoad(
          (hash, width, height) => toWebP(hash, width, height, rasterScale),
        ),
      );
    },
  };
}
