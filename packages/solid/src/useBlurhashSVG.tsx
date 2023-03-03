import { createResource, Resource } from 'solid-js';
import { BlurhashOptions } from './types';
import getBlurhashCache from './blurhash-cache';

export default function useBlurhashSVG(
  options: BlurhashOptions,
): Resource<string | undefined> {
  const [state] = createResource(
    (): BlurhashOptions => ({
      hash: options.hash,
      width: options.width,
      height: options.height,
      punch: options.punch,
    }),
    async (key) => {
      const result = getBlurhashCache('svg', key);
      const data = result.read();
      if (data.status === 'failure') {
        throw data.value;
      }
      return data.value;
    },
  );

  return state;
}
