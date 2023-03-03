/** @jsx h */
import { h, JSX } from 'preact';
import BlurhashBoundary from './BlurhashBoundary';
import BlurhashStaticCSSPlaceholder, { BlurhashStaticCSSPlaceholderProps } from './BlurhashStaticCSSPlaceholder';
import BlurhashStaticImagePlaceholder, { BlurhashStaticImagePlaceholderProps } from './BlurhashStaticImagePlaceholder';
import BlurhashStaticSVGPlaceholder, { BlurhashStaticSVGPlaceholderProps } from './BlurhashStaticSVGPlaceholder';

interface BlurhashStaticPlaceholderBaseProps {
  width: number;
  height: number;
}

export interface BlurhashStaticPlaceholderCSSMode
  extends BlurhashStaticCSSPlaceholderProps, BlurhashStaticPlaceholderBaseProps {
  mode: 'css';
}

export interface BlurhashStaticPlaceholderSVGMode
  extends BlurhashStaticSVGPlaceholderProps, BlurhashStaticPlaceholderBaseProps {
  mode: 'svg';
}

export interface BlurhashStaticPlaceholderImageMode
  extends BlurhashStaticImagePlaceholderProps, BlurhashStaticPlaceholderBaseProps {
  mode: 'image';
}

export type BlurhashStaticPlaceholderProps =
  | BlurhashStaticPlaceholderCSSMode
  | BlurhashStaticPlaceholderSVGMode
  | BlurhashStaticPlaceholderImageMode;

function BlurhashStaticPlaceholderInternal(
  props: BlurhashStaticPlaceholderProps,
): JSX.Element {
  switch (props.mode) {
    case 'image':
      return <BlurhashStaticImagePlaceholder {...props} />;
    case 'css':
      return <BlurhashStaticCSSPlaceholder {...props} />;
    case 'svg':
      return <BlurhashStaticSVGPlaceholder {...props} />;
    default:
      throw new Error('Invalid Blurhash Placeholder mode.');
  }
}

export default function BlurhashStaticPlaceholder(
  { width, height, ...props }: BlurhashStaticPlaceholderProps,
): JSX.Element {
  return (
    <BlurhashBoundary
      width={width}
      height={height}
    >
      <BlurhashStaticPlaceholderInternal
        width={width}
        height={height}
        {...props}
      />
    </BlurhashBoundary>
  );
}
