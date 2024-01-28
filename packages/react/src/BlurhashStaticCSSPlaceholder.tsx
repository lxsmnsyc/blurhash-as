import type { CSSProperties, JSX } from 'react';
import { useEffect } from 'react';
import type { BlurhashStaticOptions } from './types';
import { CSS_PLACEHOLDER } from './utils';

export interface BlurhashStaticCSSPlaceholderProps
  extends BlurhashStaticOptions {
  blur?: string;
  scale?: number;
  visible: boolean;
  placeholder: CSSProperties;
}

export function BlurhashStaticCSSPlaceholder({
  visible,
  blur,
  scale,
  onLoad,
  placeholder,
}: BlurhashStaticCSSPlaceholderProps): JSX.Element {
  useEffect(() => {
    onLoad?.();
  }, [onLoad]);

  return (
    <div
      className="blurhash-as__placeholder"
      style={{
        ...CSS_PLACEHOLDER,
        ...placeholder,
        filter: `blur(${blur ?? '20px'})`,
        transform: `scale(${scale ?? '1.2'})`,
        opacity: visible ? '1' : '0',
      }}
    />
  );
}
