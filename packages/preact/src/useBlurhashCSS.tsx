import {
  useDebugValue,
} from 'preact/hooks';
import { h } from 'preact';
import { BlurhashOptions } from './types';
import getBlurhashCache from './blurhash-cache';

export default function useBlurhashCSS(
  options: BlurhashOptions,
): h.JSX.CSSProperties {
  const state = getBlurhashCache('css', options).read();

  useDebugValue(state);

  return state;
}
