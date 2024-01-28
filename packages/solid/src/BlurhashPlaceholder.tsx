import type { JSX } from 'solid-js';
import { BlurhashBoundary } from './BlurhashBoundary';
import type { BlurhashCSSPlaceholderProps } from './BlurhashCSSPlaceholder';
import { BlurhashCSSPlaceholder } from './BlurhashCSSPlaceholder';
import type { BlurhashCanvasPlaceholderProps } from './BlurhashCanvasPlaceholder';
import { BlurhashCanvasPlaceholder } from './BlurhashCanvasPlaceholder';
import type { BlurhashImagePlaceholderProps } from './BlurhashImagePlaceholder';
import { BlurhashImagePlaceholder } from './BlurhashImagePlaceholder';
import type { BlurhashSVGPlaceholderProps } from './BlurhashSVGPlaceholder';
import { BlurhashSVGPlaceholder } from './BlurhashSVGPlaceholder';

export interface BlurhashPlaceholderCSSMode
  extends BlurhashCSSPlaceholderProps {
  mode: 'css';
}

export interface BlurhashPlaceholderSVGMode
  extends BlurhashSVGPlaceholderProps {
  mode: 'svg';
}

export interface BlurhashPlaceholderCanvasMode
  extends BlurhashCanvasPlaceholderProps {
  mode: 'canvas';
}

export interface BlurhashPlaceholderImageMode
  extends BlurhashImagePlaceholderProps {
  mode: 'image';
}

export type BlurhashPlaceholderProps =
  | BlurhashPlaceholderCSSMode
  | BlurhashPlaceholderSVGMode
  | BlurhashPlaceholderCanvasMode
  | BlurhashPlaceholderImageMode;

function BlurhashPlaceholderInternal(
  props: BlurhashPlaceholderProps,
): JSX.Element {
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

export function BlurhashPlaceholder(
  props: BlurhashPlaceholderProps,
): JSX.Element {
  return (
    <BlurhashBoundary width={props.width} height={props.height}>
      <BlurhashPlaceholderInternal {...props} />
    </BlurhashBoundary>
  );
}
