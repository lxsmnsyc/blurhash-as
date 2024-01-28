import type { JSX } from 'solid-js';
import { createEffect } from 'solid-js';
import type { BlurhashOptions } from './types';
import { useBlurhashCSS } from './useBlurhashCSS';
import { CSS_PLACEHOLDER, shimStyle } from './utils';

export interface BlurhashCSSPlaceholderProps extends BlurhashOptions {
  blur?: string;
  scale?: number;
  visible: boolean;
}

export function BlurhashCSSPlaceholder(
  props: BlurhashCSSPlaceholderProps,
): JSX.Element {
  const result = useBlurhashCSS(props);

  createEffect(() => {
    if (result()) {
      props.onLoad?.();
    }
  });

  return (
    <div
      class="blurhash-as__placeholder"
      style={shimStyle({
        ...CSS_PLACEHOLDER,
        ...result(),
        filter: `blur(${props.blur ?? '20px'})`,
        transform: `scale(${props.scale ?? '1.2'})`,
        opacity: props.visible ? 1 : 0,
      })}
    />
  );
}
