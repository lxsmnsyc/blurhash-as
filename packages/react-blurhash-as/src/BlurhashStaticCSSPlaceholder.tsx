import React, { CSSProperties, useEffect } from 'react';
import { BlurhashStaticOptions } from './types';
import { CSS_PLACEHOLDER } from './utils';

export interface BlurhashStaticCSSPlaceholderProps extends BlurhashStaticOptions {
  filter?: string;
  scale?: number;
  visible: boolean;
  placeholder: CSSProperties;
}

export default function BlurhashStaticCSSPlaceholder(
  {
    visible,
    filter,
    scale,
    onLoad,
    placeholder,
  }: BlurhashStaticCSSPlaceholderProps,
): JSX.Element {
  useEffect(() => {
    onLoad?.();
  }, [onLoad]);

  return (
    <div
      className="blurhash-as__placeholder"
      style={{
        ...CSS_PLACEHOLDER,
        ...placeholder,
        filter: `blur(${filter ?? '20px'})`,
        transform: `scale(${scale ?? '1.2'})`,
        opacity: visible ? '1' : '0',
      }}
    />
  );
}
