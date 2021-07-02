import { LoadResult, Plugin } from 'rollup';
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
): (id: string) => Promise<LoadResult> {
  return async (id) => {
    const { dir, name, ext } = path.parse(id);
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
    return `
import source from ${JSON.stringify(originalPath)};
export default {
  hash: ${JSON.stringify(encodedHash)},
  placeholder: ${JSON.stringify(result, null, 2)},
  source,
};
`;
  };
}

export default function blurhashASPlugin(
  options?: BlurhashConfig,
): Plugin {
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
      if (/\.(png|jpg)\?blurhash=css/.test(id)) {
        return getLoad(
          (hash, width, height) => blurhash.toCSSObject(hash, width, height),
        )(id);
      }
      if (/\.(png|jpg)\?blurhash=svg/.test(id)) {
        return getLoad(
          (hash, width, height) => blurhash.toSVG(hash, width, height),
        )(id);
      }
      if (/\.(png|jpg)\?blurhash=jpe?g/.test(id)) {
        return getLoad(
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
        )(id);
      }
      if (/\.(png|jpg)\?blurhash(=png)?/.test(id)) {
        return getLoad(
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
        )(id);
      }
      return null;
    },
  };
}
