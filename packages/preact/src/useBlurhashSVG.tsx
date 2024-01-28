import { useDebugValue } from 'preact/hooks';
import { getBlurhashCache } from './blurhash-cache';
import type { BlurhashOptions } from './types';

export function useBlurhashSVG(options: BlurhashOptions): string {
  const state = getBlurhashCache('svg', options).read();

  useDebugValue(state);

  return state;
}
