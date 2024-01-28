import {
  getAspectRatio,
  getNearestAspectRatio,
} from 'blurhash-as-helper/utils';
import { decode, toCSSObject, toSVG } from 'blurhash-as/browser';
import type { CSSProperties } from 'react';
import type { BlurhashOptions } from './types';

interface Resource<T> {
  read: () => T;
}

interface Pending {
  status: 'pending';
  value: Promise<void>;
}

interface Success<T> {
  status: 'success';
  value: T;
}

interface Failure {
  status: 'failure';
  value: any;
}

type Result<T> = Pending | Failure | Success<T>;

const CACHE = new Map<string, Resource<any>>();

function getResult(
  mode: 'css' | 'svg' | 'canvas',
  options: BlurhashOptions,
): Promise<CSSProperties | string | Uint8ClampedArray> {
  switch (mode) {
    case 'css':
      return toCSSObject(
        options.hash,
        options.width,
        options.height,
        options.punch,
      );
    case 'svg':
      return toSVG(options.hash, options.width, options.height, options.punch);
    case 'canvas':
      return decode(
        options.hash,
        options.width * 5,
        options.height * 5,
        options.punch,
      );
    default:
      throw new Error('Invalid decode mode');
  }
}

export function getBlurhashCache(
  mode: 'css',
  options: BlurhashOptions,
): Resource<CSSProperties>;
export function getBlurhashCache(
  mode: 'svg',
  options: BlurhashOptions,
): Resource<string>;
export function getBlurhashCache(
  mode: 'canvas',
  options: BlurhashOptions,
): Resource<Uint8ClampedArray>;
export function getBlurhashCache(
  mode: 'css' | 'svg' | 'canvas',
  options: BlurhashOptions,
): Resource<CSSProperties | string | Uint8ClampedArray> {
  const originalAspectRatio = getAspectRatio(options);
  const { width, height } = getNearestAspectRatio(originalAspectRatio);
  const encodedHash = encodeURIComponent(options.hash);
  const key = `?hash=${encodedHash}&mode=${mode}&width=${width}&height=${height}`;
  const resource = CACHE.get(key);

  if (resource) {
    return resource as Resource<CSSProperties | string | Uint8ClampedArray>;
  }

  let state: Result<CSSProperties | string | Uint8ClampedArray>;

  const newResource: Resource<CSSProperties | string | Uint8ClampedArray> = {
    read() {
      if (state) {
        if (state.status === 'success') {
          return state.value;
        }
        throw state.value;
      }
      state = {
        status: 'pending',
        value: getResult(mode, {
          ...options,
          width,
          height,
        }).then(
          value => {
            state = {
              status: 'success',
              value,
            };
          },
          (value: Error) => {
            state = {
              status: 'failure',
              value,
            };
          },
        ),
      };

      throw state.value;
    },
  };

  CACHE.set(key, newResource);

  return newResource;
}
