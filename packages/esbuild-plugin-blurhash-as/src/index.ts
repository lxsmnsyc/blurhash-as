import { Plugin } from 'esbuild';
import * as blurhash from 'blurhash-as';
import pixels from 'image-pixels';
import encodeImage from 'image-encode';
import path from 'path';
import { getAspectRatio, getNearestAspectRatio, getScaledComponentRatio } from './utils';

interface BlurhashConfig {
  rasterScale?: number;
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

      // CSS Handler
      build.onLoad({ filter: /.*/, namespace: 'blurhash-as-css' }, async (args) => {
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
        const decodedStyle = await blurhash.toCSSObject(
          encodedHash,
          correctRatio.width,
          correctRatio.height,
        );
        return {
          contents: `
export const hash = ${JSON.stringify(encodedHash)};
export const style = ${JSON.stringify(decodedStyle, null, 2)};
export { default as source } from ${JSON.stringify(originalPath)};
          `,
          resolveDir: dir,
        };
      });

      // SVG Handler
      build.onLoad({ filter: /.*/, namespace: 'blurhash-as-svg' }, async (args) => {
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
        const decodedStyle = await blurhash.toSVG(
          encodedHash,
          correctRatio.width,
          correctRatio.height,
        );
        return {
          contents: `
export const hash = ${JSON.stringify(encodedHash)};
export const svg = ${JSON.stringify(decodedStyle, null, 2)};
export { default as source } from ${JSON.stringify(originalPath)};
          `,
          resolveDir: dir,
        };
      });
      // JPG
      build.onLoad({ filter: /.*/, namespace: 'blurhash-as-jpeg' }, async (args) => {
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
        const decodedBytes = await blurhash.decode(
          encodedHash,
          correctRatio.width * rasterScale,
          correctRatio.height * rasterScale,
        );
        const encodedData = encodeImage(
          decodedBytes,
          [correctRatio.width * rasterScale, correctRatio.height * rasterScale],
          'jpg',
        );
        const encodedBuffer = Buffer.from(encodedData);
        const b64 = encodedBuffer.toString('base64');
        return {
          contents: `
export const hash = ${JSON.stringify(encodedHash)};
export const image = ${JSON.stringify(`data:image/jpeg;base64,${b64}`, null, 2)};
export { default as source } from ${JSON.stringify(originalPath)};
          `,
          resolveDir: dir,
        };
      });
      // PNG
      build.onLoad({ filter: /.*/, namespace: 'blurhash-as-png' }, async (args) => {
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
        const decodedBytes = await blurhash.decode(
          encodedHash,
          correctRatio.width * rasterScale,
          correctRatio.height * rasterScale,
        );
        const encodedData = encodeImage(
          decodedBytes,
          [correctRatio.width * rasterScale, correctRatio.height * rasterScale],
          'png',
        );
        const encodedBuffer = Buffer.from(encodedData);
        const b64 = encodedBuffer.toString('base64');
        return {
          contents: `
export const hash = ${JSON.stringify(encodedHash)};
export const image = ${JSON.stringify(`data:image/png;base64,${b64}`, null, 2)};
export { default as source } from ${JSON.stringify(originalPath)};
          `,
          resolveDir: dir,
        };
      });
    },
  };
}
