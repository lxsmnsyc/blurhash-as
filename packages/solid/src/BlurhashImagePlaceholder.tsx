import { JSX } from 'solid-js';
import useBlurhashImageURL, { BlurhashImageOptions } from './useBlurhashImageURL';
import { CSS_PLACEHOLDER } from './utils';

export interface BlurhashImagePlaceholderProps extends BlurhashImageOptions {
  visible: boolean;
}

export default function BlurhashImagePlaceholder(
  props: BlurhashImagePlaceholderProps,
): JSX.Element {
  const result = useBlurhashImageURL(props);

  return (
    <img
      src={result()}
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
