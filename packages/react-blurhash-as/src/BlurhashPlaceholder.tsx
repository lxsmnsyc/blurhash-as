import React from 'react';
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

function BlurhashPlaceholder(props: BlurhashPlaceholderProps): JSX.Element {
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

export default BlurhashPlaceholder;
