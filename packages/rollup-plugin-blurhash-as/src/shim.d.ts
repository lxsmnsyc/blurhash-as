declare module 'image-pixels' {
  export interface ImageData {
    data: Uint8ClampedArray;
    width: number;
    height: number;
  }
  export default function pixels(path: string): Promise<ImageData>;
}
declare module 'image-encode' {
  export default function encode(
    data: Uint8ClampedArray,
    shape: [number, number],
    format: 'jpg' | 'png',
  ): ArrayBuffer;
}
