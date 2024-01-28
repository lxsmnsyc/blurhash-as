import type { JSX } from 'solid-js';
import type { BlurhashStaticOptions } from './types';
import { CSS_PLACEHOLDER } from './utils';

export interface BlurhashStaticImagePlaceholderProps
  extends BlurhashStaticOptions {
  visible: boolean;
  placeholder: string;
}

export function BlurhashStaticImagePlaceholder(
  props: BlurhashStaticImagePlaceholderProps,
): JSX.Element {
  return (
    <img
      src={props.placeholder}
      alt="Blurhash Placeholder"
      class="blurhash-as__placeholder"
      style={{
        ...CSS_PLACEHOLDER,
        opacity: props.visible ? 1 : 0,
      }}
      onLoad={props.onLoad}
    />
  );
}
