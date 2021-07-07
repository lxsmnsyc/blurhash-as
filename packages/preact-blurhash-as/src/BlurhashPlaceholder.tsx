/** @jsx h */
import { h } from 'preact';
import BlurhashBoundary from './BlurhashBoundary';
import BlurhashCanvasPlaceholder, { BlurhashCanvasPlaceholderProps } from './BlurhashCanvasPlaceholder';
import BlurhashCSSPlaceholder, { BlurhashCSSPlaceholderProps } from './BlurhashCSSPlaceholder';
import BlurhashImagePlaceholder, { BlurhashImagePlaceholderProps } from './BlurhashImagePlaceholder';
import BlurhashSVGPlaceholder, { BlurhashSVGPlaceholderProps } from './BlurhashSVGPlaceholder';

export interface BlurhashPlaceholderCSSMode extends BlurhashCSSPlaceholderProps {
  mode: 'css';
}

export interface BlurhashPlaceholderSVGMode extends BlurhashSVGPlaceholderProps {
  mode: 'svg';
}

export interface BlurhashPlaceholderCanvasMode extends BlurhashCanvasPlaceholderProps {
  mode: 'canvas';
}

export interface BlurhashPlaceholderImageMode extends BlurhashImagePlaceholderProps {
  mode: 'image';
}

export type BlurhashPlaceholderProps =
  | BlurhashPlaceholderCSSMode
  | BlurhashPlaceholderSVGMode
  | BlurhashPlaceholderCanvasMode
  | BlurhashPlaceholderImageMode;

function BlurhashPlaceholderInternal(props: BlurhashPlaceholderProps): JSX.Element {
  switch (props.mode) {
    case 'canvas':
      return <BlurhashCanvasPlaceholder {...props} />;
    case 'image':
      return <BlurhashImagePlaceholder {...props} />;
    case 'css':
      return <BlurhashCSSPlaceholder {...props} />;
    case 'svg':
      return <BlurhashSVGPlaceholder {...props} />;
    default:
      throw new Error('Invalid Blurhash Placeholder mode.');
  }
}

export default function BlurhashPlaceholder(
  { width, height, ...props }: BlurhashPlaceholderProps,
): JSX.Element {
  return (
    <BlurhashBoundary
      width={width}
      height={height}
    >
      <BlurhashPlaceholderInternal
        width={width}
        height={height}
        {...props}
      />
    </BlurhashBoundary>
  );
}
