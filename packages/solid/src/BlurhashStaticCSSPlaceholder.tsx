import type { JSX } from 'solid-js';
import { createEffect } from 'solid-js';
import type { BlurhashStaticOptions } from './types';
import { CSS_PLACEHOLDER, shimStyle } from './utils';

export interface BlurhashStaticCSSPlaceholderProps
  extends BlurhashStaticOptions {
  blur?: string;
  scale?: number;
  visible: boolean;
  placeholder: JSX.CSSProperties;
}

export function BlurhashStaticCSSPlaceholder(
  props: BlurhashStaticCSSPlaceholderProps,
): JSX.Element {
  createEffect(() => {
    props.onLoad?.();
  });

  return (
    <div
      class="blurhash-as__placeholder"
      style={shimStyle({
        ...CSS_PLACEHOLDER,
        ...props.placeholder,
        filter: `blur(${props.blur ?? '20px'})`,
        transform: `scale(${props.scale ?? '1.2'})`,
        opacity: props.visible ? 1 : 0,
      })}
    />
  );
}
