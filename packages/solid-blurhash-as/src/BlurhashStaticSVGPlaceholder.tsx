import { JSX } from 'solid-js';
import { BlurhashStaticOptions } from './types';
import { CSS_PLACEHOLDER, getEncodedSVG, shimStyle } from './utils';

export interface BlurhashStaticSVGPlaceholderProps extends BlurhashStaticOptions {
  visible: boolean;
  blur?: string;
  scale?: number;
  placeholder: string;
}

export default function BlurhashStaticSVGPlaceholder(
  props: BlurhashStaticSVGPlaceholderProps,
): JSX.Element {
  return (
    <img
      src={getEncodedSVG(props.placeholder)}
      alt="Blurhash Placeholder"
      class="blurhash-as__placeholder"
      style={shimStyle({
        ...CSS_PLACEHOLDER,
        filter: `blur(${props.blur ?? '20px'})`,
        transform: `scale(${props.scale ?? '1.2'})`,
        opacity: props.visible ? 1 : 0,
      })}
      onLoad={props.onLoad}
    />
  );
}
