export type BlurhashMode = 'svg' | 'css' | 'canvas';

export interface BlurhashBaseProps {
  src: string;
  alt: string;
  hash: string;
  width: number;
  height: number;
}
