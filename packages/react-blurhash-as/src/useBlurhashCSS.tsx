import {
  CSSProperties,
  useDebugValue,
} from 'react';
import { BlurhashOptions } from './types';
import getBlurhashCache from './blurhash-cache';

export default function useBlurhashCSS(
  options: BlurhashOptions,
): CSSProperties {
  const state = getBlurhashCache('css', options).read();

  useDebugValue(state);

  return state;
}
