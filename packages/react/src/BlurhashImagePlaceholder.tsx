import type { JSX } from 'react';
import type { BlurhashImageOptions } from './useBlurhashImageURL';
import { useBlurhashImageURL } from './useBlurhashImageURL';
import { CSS_PLACEHOLDER } from './utils';

export interface BlurhashImagePlaceholderProps extends BlurhashImageOptions {
  visible: boolean;
}

export function BlurhashImagePlaceholder({
  visible,
  onLoad,
  ...props
}: BlurhashImagePlaceholderProps): JSX.Element {
  const result = useBlurhashImageURL(props);

  return (
    <img
      src={result}
      alt="Blurhash Placeholder"
      className="blurhash-as__placeholder"
      style={{
        ...CSS_PLACEHOLDER,
        opacity: visible ? 1 : 0,
      }}
      onLoad={onLoad}
    />
  );
}
