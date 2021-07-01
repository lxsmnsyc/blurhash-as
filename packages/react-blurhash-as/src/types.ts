export type BlurhashMode = 'svg' | 'css' | 'canvas';

export interface BlurhashOptions {
  hash: string;
  width: number;
  height: number;
  punch?: number;
  invalidate?: boolean;
}

export interface BlurhashBaseProps extends BlurhashOptions {
  src: string;
}

interface Pending {
  status: 'pending';
  value?: undefined;
}

interface Success<T> {
  status: 'success';
  value: T;
}

interface Failure {
  status: 'failure';
  value: any;
}

export type Result<T> =
  | Pending
  | Failure
  | Success<T>;