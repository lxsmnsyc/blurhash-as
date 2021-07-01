import {
  useDebugValue,
} from 'react';
import getBlurhashCache from './blurhash-cache';
import { BlurhashOptions } from './types';

export default function useBlurhashData(
  options: BlurhashOptions,
): Uint8ClampedArray {
  const state = getBlurhashCache('canvas', options).read();

  useDebugValue(state);

  return state;
}
