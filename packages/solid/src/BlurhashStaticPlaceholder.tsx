import { JSX } from 'solid-js';
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
  props: BlurhashStaticPlaceholderProps,
): JSX.Element {
  return (
    <BlurhashBoundary
      width={props.width}
      height={props.height}
    >
      <BlurhashStaticPlaceholderInternal {...props} />
    </BlurhashBoundary>
  );
}
