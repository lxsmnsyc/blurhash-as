import type { JSX } from 'solid-js';
import { BlurhashContainer } from './BlurhashContainer';
import { BlurhashPlaceholder } from './BlurhashPlaceholder';

import type {
  BlurhashPlaceholderCSSMode,
  BlurhashPlaceholderCanvasMode,
  BlurhashPlaceholderImageMode,
  BlurhashPlaceholderSVGMode,
} from './BlurhashPlaceholder';

export interface BlurhashCSSMode
  extends Omit<BlurhashPlaceholderCSSMode, 'visible'> {
  src: string;
  alt: string;
}

export interface BlurhashSVGMode
  extends Omit<BlurhashPlaceholderSVGMode, 'visible'> {
  src: string;
  alt: string;
}

export interface BlurhashImageMode
  extends Omit<BlurhashPlaceholderImageMode, 'visible'> {
  src: string;
  alt: string;
}

export interface BlurhashCanvasMode
  extends Omit<BlurhashPlaceholderCanvasMode, 'visible'> {
  src: string;
  alt: string;
}

export type BlurhashProps =
  | BlurhashCSSMode
  | BlurhashSVGMode
  | BlurhashImageMode
  | BlurhashCanvasMode;

export function Blurhash(props: BlurhashProps): JSX.Element {
  return (
    <BlurhashContainer
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      onLoad={props.onLoad}
    >
      {(visible, onPlaceholderLoad) => (
        <BlurhashPlaceholder
          {...props}
          visible={visible()}
          onLoad={onPlaceholderLoad}
        />
      )}
    </BlurhashContainer>
  );
}
