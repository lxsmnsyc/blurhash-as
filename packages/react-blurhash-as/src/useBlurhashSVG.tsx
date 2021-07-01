import {
  useDebugValue,
  useEffect,
  useState,
} from 'react';
import { toSVG } from 'blurhash-as';
import { BlurhashOptions, Result } from './types';
import { getAspectRatio, getNearestAspectRatio } from './utils';

export default function useBlurhashCSS(
  {
    hash,
    width,
    height,
    punch,
    invalidate,
  }: BlurhashOptions,
): Result<string> {
  const [state, setState] = useState<Result<string>>({
    status: 'pending',
  });

  useEffect(() => {
    // Invalidate previous state
    if (invalidate) {
      setState({
        status: 'pending',
      });
    }

    // Normalize given width and height into the smallest
    // aspect ratio
    const aspectRatio = getAspectRatio({
      width,
      height,
    });

    const smallestAspectRatio = getNearestAspectRatio(aspectRatio);

    let mounted = true;

    toSVG(
      hash,
      smallestAspectRatio.width,
      smallestAspectRatio.height,
      punch,
    ).then(
      (value) => {
        if (mounted) {
          if (value) {
            setState({
              status: 'success',
              value,
            });
          } else {
            setState({
              status: 'failure',
              value: new Error('The given hash is invalid.'),
            });
          }
        }
      },
      (value: Error) => {
        if (mounted) {
          setState({
            status: 'failure',
            value,
          });
        }
      },
    );

    return () => {
      mounted = false;
    };
  }, [hash, width, height, invalidate, punch]);

  useDebugValue(state);

  return state;
}
