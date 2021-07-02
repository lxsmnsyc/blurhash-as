import React from 'react';
import { BlurhashStaticOptions } from './types';
import { CSS_PLACEHOLDER } from './utils';

export interface BlurhashStaticImagePlaceholderProps extends BlurhashStaticOptions {
  visible: boolean;
  src: string;
}

export default function BlurhashStaticImagePlaceholder(
  {
    visible,
    onLoad,
    src,
  }: BlurhashStaticImagePlaceholderProps,
): JSX.Element {
  return (
    <img
      src={src}
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
