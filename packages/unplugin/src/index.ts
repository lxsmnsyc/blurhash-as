import * as blurhash from 'blurhash-as';
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
import path from 'node:path';
import { createUnplugin } from 'unplugin';

export interface BlurhashConfig {
  rasterScale?: number;
}

function getLoad(
  decode: (
    hash: string,
    width: number,
    height: number,
  ) => Promise<string | Record<string, string>>,
): (id: string) => Promise<string> {
  return async id => {
    const { dir, name, ext } = path.parse(id);
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
    return `
export const hash = ${JSON.stringify(encodedHash)};
export const width = ${JSON.stringify(imageData.width)};
export const height = ${JSON.stringify(imageData.height)};
export const placeholder = ${JSON.stringify(result, null, 2)};
export { default as source } from ${JSON.stringify(originalPath)};
`;
  };
}

export const blurhashAS = createUnplugin((options?: BlurhashConfig) => {
  const rasterScale = options?.rasterScale ?? 5;
  return {
    name: 'blurhash-as',
    resolveId(id, importer) {
      if (/\.(png|jpg)\?blurhash/.test(id) && importer) {
        return path.join(path.dirname(importer), id);
      }
      return null;
    },
    load(id) {
      if (id.startsWith('\0')) {
        return null;
      }
      if (/\.(png|jpg|webp)\?blurhash=css/.test(id)) {
        return getLoad((hash, width, height) =>
          blurhash.toCSSObject(hash, width, height),
        )(id);
      }
      if (/\.(png|jpg|webp)\?blurhash=svg/.test(id)) {
        return getLoad((hash, width, height) =>
          blurhash.toSVG(hash, width, height),
        )(id);
      }
      if (/\.(png|jpg|webp)\?blurhash=jpe?g/.test(id)) {
        return getLoad((hash, width, height) =>
          toJPEG(hash, width, height, rasterScale),
        )(id);
      }
      if (/\.(png|jpg|webp)\?blurhash=webp/.test(id)) {
        return getLoad((hash, width, height) =>
          toWebP(hash, width, height, rasterScale),
        )(id);
      }
      if (/\.(png|jpg|webp)\?blurhash(=png)?/.test(id)) {
        return getLoad((hash, width, height) =>
          toPNG(hash, width, height, rasterScale),
        )(id);
      }
      return null;
    },
    vite: {
      enforce: 'pre',
    },
  };
});
