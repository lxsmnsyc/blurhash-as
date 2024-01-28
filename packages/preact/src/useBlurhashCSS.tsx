import type { JSX } from 'preact';
import { useDebugValue } from 'preact/hooks';
import { getBlurhashCache } from './blurhash-cache';
import type { BlurhashOptions } from './types';

export function useBlurhashCSS(options: BlurhashOptions): JSX.CSSProperties {
  const state = getBlurhashCache('css', options).read();

  useDebugValue(state);

  return state;
}
