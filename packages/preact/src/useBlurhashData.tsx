import { useDebugValue } from 'preact/hooks';
import { getBlurhashCache } from './blurhash-cache';
import type { BlurhashOptions } from './types';

export function useBlurhashData(options: BlurhashOptions): Uint8ClampedArray {
  const state = getBlurhashCache('canvas', options).read();

  useDebugValue(state);

  return state;
}
