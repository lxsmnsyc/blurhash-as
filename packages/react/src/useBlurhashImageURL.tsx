import { getAspectRatio, getNearestAspectRatio } from 'blurhash-as-helper/utils';
import {
  useDebugValue,
  useEffect,
  useState,
} from 'react';
import { BlurhashOptions } from './types';
import useBlurhashData from './useBlurhashData';
import { getEmptyImageURL } from './utils';

export type ImageFormat =
  | 'image/png'
  | 'image/jpeg'
  | 'image/webp';

export interface BlurhashImageOptions extends BlurhashOptions {
  format?: ImageFormat;
  quality?: number;
}

export default function useBlurhashImageURL(
  {
    hash,
    width,
    height,
    punch,
    format,
    quality,
  }: BlurhashImageOptions,
): string {
  const blurhash = useBlurhashData({
    hash,
    width,
    height,
    punch,
  });

  const [state, setState] = useState(getEmptyImageURL({
    width,
    height,
  }));

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    const originalAspectRatio = getAspectRatio({
      width,
      height,
    });
    const correctedAspectRatio = getNearestAspectRatio(originalAspectRatio);
    canvas.width = correctedAspectRatio.width * 5;
    canvas.height = correctedAspectRatio.height * 5;
    const imageData = ctx.createImageData(
      correctedAspectRatio.width * 5,
      correctedAspectRatio.height * 5,
    );
    imageData.data.set(blurhash);
    ctx.putImageData(imageData, 0, 0);
    setState(canvas.toDataURL(format, quality));
  }, [blurhash, format, quality, width, height]);

  useDebugValue(state);

  return state;
}
