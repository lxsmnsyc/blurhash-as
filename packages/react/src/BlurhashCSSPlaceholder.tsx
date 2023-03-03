import React, { useEffect } from 'react';
import { BlurhashOptions } from './types';
import useBlurhashCSS from './useBlurhashCSS';
import { CSS_PLACEHOLDER } from './utils';

export interface BlurhashCSSPlaceholderProps extends BlurhashOptions {
  blur?: string;
  scale?: number;
  visible: boolean;
}

export default function BlurhashCSSPlaceholder(
  {
    visible,
    blur,
    scale,
    onLoad,
    ...props
  }: BlurhashCSSPlaceholderProps,
): JSX.Element {
  const result = useBlurhashCSS(props);

  useEffect(() => {
    onLoad?.();
  }, [onLoad, result]);

  return (
    <div
      className="blurhash-as__placeholder"
      style={{
        ...CSS_PLACEHOLDER,
        ...result,
        filter: `blur(${blur ?? '20px'})`,
        transform: `scale(${scale ?? '1.2'})`,
        opacity: visible ? '1' : '0',
      }}
    />
  );
}
