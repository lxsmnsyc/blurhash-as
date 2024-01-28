import {
  getAspectRatio,
  getNearestAspectRatio,
} from 'blurhash-as-helper/utils';
import { createEffect, createSignal, untrack } from 'solid-js';
import type { BlurhashOptions } from './types';
import { useBlurhashData } from './useBlurhashData';
import { getEmptyImageURL } from './utils';

export type ImageFormat = 'image/png' | 'image/jpeg' | 'image/webp';

export interface BlurhashImageOptions extends BlurhashOptions {
  format?: ImageFormat;
  quality?: number;
}

export function useBlurhashImageURL(
  options: BlurhashImageOptions,
): () => string {
  const placeholder = () =>
    getEmptyImageURL({
      width: options.width,
      height: options.height,
    });

  const blurhash = useBlurhashData(options);

  const [state, setState] = createSignal(untrack(placeholder));

  createEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const originalAspectRatio = getAspectRatio({
      width: options.width,
      height: options.height,
    });
    const correctedAspectRatio = getNearestAspectRatio(originalAspectRatio);
    canvas.width = correctedAspectRatio.width * 5;
    canvas.height = correctedAspectRatio.height * 5;

    if (ctx) {
      const imageData = ctx.createImageData(
        correctedAspectRatio.width * 5,
        correctedAspectRatio.height * 5,
      );
      const currentData = blurhash();
      if (currentData) {
        imageData.data.set(currentData);
        ctx.putImageData(imageData, 0, 0);
        setState(canvas.toDataURL(options.format, options.quality));
      } else {
        setState(placeholder());
      }
    }
  });

  return state;
}
