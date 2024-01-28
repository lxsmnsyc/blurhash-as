import type { JSX } from 'react';
import { BlurhashContainer } from './BlurhashContainer';
import type {
  BlurhashPlaceholderCSSMode,
  BlurhashPlaceholderCanvasMode,
  BlurhashPlaceholderImageMode,
  BlurhashPlaceholderSVGMode,
} from './BlurhashPlaceholder';
import { BlurhashPlaceholder } from './BlurhashPlaceholder';

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

export function Blurhash({
  src,
  alt,
  width,
  height,
  onLoad,
  ...props
}: BlurhashProps): JSX.Element {
  return (
    <BlurhashContainer
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={onLoad}
    >
      {(visible, onPlaceholderLoad) => (
        <BlurhashPlaceholder
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
