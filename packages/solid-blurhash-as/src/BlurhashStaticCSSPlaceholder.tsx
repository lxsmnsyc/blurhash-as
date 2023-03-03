import { createEffect, JSX } from 'solid-js';
import { BlurhashStaticOptions } from './types';
import { CSS_PLACEHOLDER } from './utils';

export interface BlurhashStaticCSSPlaceholderProps extends BlurhashStaticOptions {
  blur?: string;
  scale?: number;
  visible: boolean;
  placeholder: JSX.CSSProperties;
}

export default function BlurhashStaticCSSPlaceholder(
  props: BlurhashStaticCSSPlaceholderProps,
): JSX.Element {
  createEffect(() => {
    props.onLoad?.();
  });

  return (
    <div
      class="blurhash-as__placeholder"
      style={{
        ...CSS_PLACEHOLDER,
        ...props.placeholder,
        filter: `blur(${props.blur ?? '20px'})`,
        transform: `scale(${props.scale ?? '1.2'})`,
        opacity: props.visible ? 1 : 0,
      }}
    />
  );
}
