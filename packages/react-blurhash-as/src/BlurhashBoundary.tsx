import React, { ReactNode, Suspense } from 'react';
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

export default function BlurhashBoundary(
  { width, height, children }: BlurhashBoundaryProps,
): JSX.Element {
  const placeholder = <BlurhashEmpty width={width} height={height} />;
  if (typeof window === 'undefined') {
    return placeholder;
  }
  return (
    <Suspense fallback={placeholder}>
      {children}
    </Suspense>
  );
}
