import type { JSX, Resource } from 'solid-js';
import { createResource } from 'solid-js';
import { getBlurhashCache } from './blurhash-cache';
import type { BlurhashOptions } from './types';

export function useBlurhashCSS(
  options: BlurhashOptions,
): Resource<JSX.CSSProperties | undefined> {
  const [state] = createResource(
    (): BlurhashOptions => ({
      hash: options.hash,
      width: options.width,
      height: options.height,
      punch: options.punch,
    }),
    async key => {
      const result = getBlurhashCache('css', key);
      const data = result.read();
      if (data.status === 'failure') {
        throw data.value;
      }
      return await data.value;
    },
  );

  return state;
}
