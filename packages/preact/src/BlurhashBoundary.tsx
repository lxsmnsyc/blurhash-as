/** @jsx h */
import { h, JSX } from 'preact';
import { FC, Suspense } from 'preact/compat';
import { getEmptyImageURL } from './utils';

export interface BlurhashBoundaryProps {
  width: number;
  height: number;
}

export function BlurhashEmpty(props: BlurhashBoundaryProps): JSX.Element {
  return (
    <img
      src={getEmptyImageURL(props)}
      alt="Blurhash Placeholder"
      className="blurhash-as__placeholder"
    />
  );
}

const BlurhashBoundary: FC<BlurhashBoundaryProps> = ({ width, height, children }) => {
  const placeholder = <BlurhashEmpty width={width} height={height} />;
  if (typeof window === 'undefined') {
    return placeholder;
  }
  return (
    <Suspense fallback={placeholder}>
      {children}
    </Suspense>
  );
};

export default BlurhashBoundary;
