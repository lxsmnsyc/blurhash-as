export type BlurhashMode = 'svg' | 'css' | 'canvas';

export interface BlurhashOptions {
  hash: string;
  width: number;
  height: number;
  punch?: number;
  onLoad?: () => void;
}

export interface BlurhashStaticOptions {
  onLoad?: () => void;
}
