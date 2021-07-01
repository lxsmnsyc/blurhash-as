import React from 'react';
import { BlurhashOptions } from './types';
import useBlurhashSVG from './useBlurhashSVG';
import { CSS_PLACEHOLDER, getEncodedSVG } from './utils';

export interface BlurhashSVGPlaceholderProps extends BlurhashOptions {
  visible: boolean;
  filter?: string;
  scale?: number;
}

export default function BlurhashSVGPlaceholder(
  {
    visible,
    filter,
    scale,
    onLoad,
    ...props
  }: BlurhashSVGPlaceholderProps,
): JSX.Element {
  const result = useBlurhashSVG(props);

  return (
    <img
      src={getEncodedSVG(result)}
      alt="Blurhash Placeholder"
      className="blurhash-as__placeholder"
      style={{
        ...CSS_PLACEHOLDER,
        filter: `blur(${filter ?? '20px'})`,
        transform: `scale(${scale ?? '1.2'})`,
        opacity: visible ? 1 : 0,
      }}
      onLoad={onLoad}
    />
  );
}
