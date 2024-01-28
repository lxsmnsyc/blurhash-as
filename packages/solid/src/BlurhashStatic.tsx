import type { JSX } from 'solid-js';
import { BlurhashStaticContainer } from './BlurhashStaticContainer';
import type {
  BlurhashStaticPlaceholderCSSMode,
  BlurhashStaticPlaceholderImageMode,
  BlurhashStaticPlaceholderSVGMode,
} from './BlurhashStaticPlaceholder';
import { BlurhashStaticPlaceholder } from './BlurhashStaticPlaceholder';

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

export function BlurhashStatic(props: BlurhashStaticProps): JSX.Element {
  return (
    <BlurhashStaticContainer
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      onLoad={props.onLoad}
    >
      {(visible, onPlaceholderLoad) => (
        <BlurhashStaticPlaceholder
          {...props}
          visible={visible()}
          onLoad={onPlaceholderLoad}
        />
      )}
    </BlurhashStaticContainer>
  );
}
