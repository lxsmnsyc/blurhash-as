import React from 'react';
import BlurhashContainer from './BlurhashContainer';
import BlurhashStaticPlaceholder, {
  BlurhashStaticPlaceholderCSSMode,
  BlurhashStaticPlaceholderImageMode,
  BlurhashStaticPlaceholderSVGMode,
} from './BlurhashStaticPlaceholder';

export interface BlurhashStaticCSSMode
  extends Omit<BlurhashStaticPlaceholderCSSMode, 'visible'> {
  src: string;
  alt: string;
}

export interface BlurhashStaticSVGMode
  extends Omit<BlurhashStaticPlaceholderSVGMode, 'visible'> {
  src: string;
  alt: string;
}

export interface BlurhashStaticImageMode
  extends Omit<BlurhashStaticPlaceholderImageMode, 'visible'> {
  src: string;
  alt: string;
}

export type BlurhashStaticProps =
  | BlurhashStaticCSSMode
  | BlurhashStaticSVGMode
  | BlurhashStaticImageMode;

function BlurhashStatic(
  {
    src,
    alt,
    width,
    height,
    onLoad,
    ...props
  }: BlurhashStaticProps,
): JSX.Element {
  return (
    <BlurhashContainer
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={onLoad}
    >
      {(visible, onPlaceholderLoad) => (
        <BlurhashStaticPlaceholder
          visible={visible}
          width={width}
          height={height}
          onLoad={onPlaceholderLoad}
          {...props}
        />
      )}
    </BlurhashContainer>
  );
}

export default BlurhashStatic;
