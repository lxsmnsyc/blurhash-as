import type { CSSProperties } from 'react';
import { useDebugValue } from 'react';
import { getBlurhashCache } from './blurhash-cache';
import type { BlurhashOptions } from './types';

export function useBlurhashCSS(options: BlurhashOptions): CSSProperties {
  const state = getBlurhashCache('css', options).read();

  useDebugValue(state);

  return state;
}
