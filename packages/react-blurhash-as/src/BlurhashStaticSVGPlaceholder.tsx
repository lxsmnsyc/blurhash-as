import React from 'react';
import { BlurhashStaticOptions } from './types';
import { CSS_PLACEHOLDER, getEncodedSVG } from './utils';

export interface BlurhashStaticSVGPlaceholderProps extends BlurhashStaticOptions {
  visible: boolean;
  filter?: string;
  scale?: number;
  code: string;
}

export default function BlurhashStaticSVGPlaceholder(
  {
    visible,
    filter,
    scale,
    onLoad,
    code,
  }: BlurhashStaticSVGPlaceholderProps,
): JSX.Element {
  return (
    <img
      src={getEncodedSVG(code)}
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
