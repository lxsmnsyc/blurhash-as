import type { JSX } from 'react';
import type { BlurhashOptions } from './types';
import { useBlurhashSVG } from './useBlurhashSVG';
import { CSS_PLACEHOLDER, getEncodedSVG } from './utils';

export interface BlurhashSVGPlaceholderProps extends BlurhashOptions {
  visible: boolean;
  blur?: string;
  scale?: number;
}

export function BlurhashSVGPlaceholder({
  visible,
  blur,
  scale,
  onLoad,
  ...props
}: BlurhashSVGPlaceholderProps): JSX.Element {
  const result = useBlurhashSVG(props);

  return (
    <img
      src={getEncodedSVG(result)}
      alt="Blurhash Placeholder"
      className="blurhash-as__placeholder"
      style={{
        ...CSS_PLACEHOLDER,
        filter: `blur(${blur ?? '20px'})`,
        transform: `scale(${scale ?? '1.2'})`,
        opacity: visible ? 1 : 0,
      }}
      onLoad={onLoad}
    />
  );
}
