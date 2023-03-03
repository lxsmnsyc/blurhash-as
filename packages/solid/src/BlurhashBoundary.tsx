import { Suspense, JSX } from 'solid-js';
import { getEmptyImageURL } from './utils';

export interface BlurhashBoundaryBaseProps {
  width: number;
  height: number;
}

export function BlurhashEmpty(props: BlurhashBoundaryBaseProps): JSX.Element {
  return (
    <img
      src={getEmptyImageURL(props)}
      alt="Blurhash Placeholder"
      class="blurhash-as__placeholder"
    />
  );
}

export interface BlurhashBoundaryProps extends BlurhashBoundaryBaseProps {
  children: JSX.Element;
}

export function BlurhashBoundary(props: BlurhashBoundaryProps): JSX.Element {
  return (
    <Suspense fallback={<BlurhashEmpty width={props.width} height={props.height} />}>
      {props.children}
    </Suspense>
  );
}

export default BlurhashBoundary;
