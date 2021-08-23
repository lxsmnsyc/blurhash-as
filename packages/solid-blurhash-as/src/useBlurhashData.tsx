import { createResource, Resource } from 'solid-js';
import getBlurhashCache from './blurhash-cache';
import { BlurhashOptions } from './types';

export default function useBlurhashData(
  options: BlurhashOptions,
): Resource<Uint8ClampedArray | undefined> {
  const [state] = createResource(
    (): BlurhashOptions => ({
      hash: options.hash,
      width: options.width,
      height: options.height,
      punch: options.punch,
    }),
    async (key) => {
      const result = getBlurhashCache('canvas', key);
      const data = result.read();
      if (data.status === 'failure') {
        throw data.value;
      }
      return data.value;
    },
  );

  return state;
}
