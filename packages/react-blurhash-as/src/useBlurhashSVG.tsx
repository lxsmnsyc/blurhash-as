import {
  useDebugValue,
} from 'react';
import { BlurhashOptions } from './types';
import getBlurhashCache from './blurhash-cache';

export default function useBlurhashSVG(
  options: BlurhashOptions,
): string {
  const state = getBlurhashCache('svg', options).read();

  useDebugValue(state);

  return state;
}
