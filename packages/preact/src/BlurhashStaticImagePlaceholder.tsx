/** @jsx h */
import { h } from 'preact';
import { BlurhashStaticOptions } from './types';
import { CSS_PLACEHOLDER } from './utils';

export interface BlurhashStaticImagePlaceholderProps extends BlurhashStaticOptions {
  visible: boolean;
  placeholder: string;
}

export default function BlurhashStaticImagePlaceholder(
  {
    visible,
    onLoad,
    placeholder,
  }: BlurhashStaticImagePlaceholderProps,
): JSX.Element {
  return (
    <img
      src={placeholder}
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
