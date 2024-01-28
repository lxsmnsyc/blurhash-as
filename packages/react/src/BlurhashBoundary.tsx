import type { JSX, ReactNode } from 'react';
import { Suspense } from 'react';
import { getEmptyImageURL } from './utils';

export interface BlurhashBoundaryProps {
  width: number;
  height: number;
  children?: ReactNode;
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

export function BlurhashBoundary({
  width,
  height,
  children,
}: BlurhashBoundaryProps): JSX.Element {
  return (
    <Suspense fallback={<BlurhashEmpty width={width} height={height} />}>
      {children}
    </Suspense>
  );
}
