import { JSX } from 'solid-js';
import { BlurhashStaticOptions } from './types';
import { CSS_PLACEHOLDER, shimStyle } from './utils';

export interface BlurhashStaticImagePlaceholderProps extends BlurhashStaticOptions {
  visible: boolean;
  placeholder: string;
}

export default function BlurhashStaticImagePlaceholder(
  props: BlurhashStaticImagePlaceholderProps,
): JSX.Element {
  return (
    <img
      src={props.placeholder}
      alt="Blurhash Placeholder"
      class="blurhash-as__placeholder"
      style={shimStyle({
        ...CSS_PLACEHOLDER,
        opacity: props.visible ? 1 : 0,
      })}
      onLoad={props.onLoad}
    />
  );
}
