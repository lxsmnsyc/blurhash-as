export function init(): Promise<void>;
export function encode(
  pixels: Uint8ClampedArray,
  width: number,
  height: number,
  xComponent: number,
  yComponent: number,
): Promise<string>;
export function decode(
  blurhash: string,
  width: number,
  height: number,
  punch?: number,
): Promise<Uint8ClampedArray>;
export function toCSSSheet(
  blurhash: string,
  width: number,
  height: number,
  punch?: number,
): Promise<string>;
export function toCSSObject(
  blurhash: string,
  width: number,
  height: number,
  punch?: number,
): Promise<Record<string, string>>;
export function toSVG(
  blurhash: string,
  width: number,
  height: number,
  punch?: number,
): Promise<string>;