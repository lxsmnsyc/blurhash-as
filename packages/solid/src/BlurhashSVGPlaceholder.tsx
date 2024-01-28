import type { JSX } from 'solid-js';
import type { BlurhashOptions } from './types';
import { useBlurhashSVG } from './useBlurhashSVG';
import { CSS_PLACEHOLDER, getEncodedOptionalSVG } from './utils';

export interface BlurhashSVGPlaceholderProps extends BlurhashOptions {
  visible: boolean;
  blur?: string;
  scale?: number;
}

export function BlurhashSVGPlaceholder(
  props: BlurhashSVGPlaceholderProps,
): JSX.Element {
  const result = useBlurhashSVG(props);

  return (
    <img
      src={getEncodedOptionalSVG(
        { width: props.width, height: props.height },
        result(),
      )}
      alt="Blurhash Placeholder"
      class="blurhash-as__placeholder"
      style={{
        ...CSS_PLACEHOLDER,
        filter: `blur(${props.blur ?? '20px'})`,
        transform: `scale(${props.scale ?? '1.2'})`,
        opacity: props.visible ? 1 : 0,
      }}
      onLoad={props.onLoad}
    />
  );
}
