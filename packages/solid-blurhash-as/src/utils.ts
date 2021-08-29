import { JSX } from 'solid-js';

function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

interface AspectRatio {
  width: number;
  height: number;
}

const ASPECT_RATIO: AspectRatio[] = [
  { width: 9, height: 16 }, // Vertical
  { width: 4, height: 4 }, // Square
  { width: 4, height: 3 }, // Standard Fullscreen
  { width: 16, height: 10 }, // Standard LCD
  { width: 16, height: 9 }, // HD
  // { width: 37, height: 20 }, // Widescreen
  { width: 6, height: 3 }, // Univisium
  { width: 21, height: 9 }, // Anamorphic 2.35:1
  // { width: 64, height: 27 }, // Anamorphic 2.39:1 or 2.37:1
  { width: 19, height: 16 }, // Movietone
  { width: 5, height: 4 }, // 17' LCD CRT
  // { width: 48, height: 35 }, // 16mm and 35mm
  { width: 11, height: 8 }, // 35mm full sound
  // { width: 143, height: 100 }, // IMAX
  { width: 6, height: 4 }, // 35mm photo
  { width: 14, height: 9 }, // commercials
  { width: 5, height: 3 }, // Paramount
  { width: 7, height: 4 }, // early 35mm
  { width: 11, height: 5 }, // 70mm
  { width: 12, height: 5 }, // Bluray
  { width: 8, height: 3 }, // Super 16
  { width: 18, height: 5 }, // IMAX
  { width: 12, height: 3 }, // Polyvision
];

export function getAspectRatio({ width, height }: AspectRatio): AspectRatio {
  const denom = gcd(width, height);

  return {
    width: width / denom,
    height: height / denom,
  };
}

export function getNearestAspectRatio(ratio: AspectRatio): AspectRatio {
  let nearest = Number.MAX_VALUE;
  let id = 0;

  for (let i = 0; i < ASPECT_RATIO.length; i += 1) {
    const target = ASPECT_RATIO[i];

    const x = target.width - ratio.width;
    const y = target.height - ratio.height;
    const distance = Math.sqrt(x * x + y * y);

    if (i === 0) {
      nearest = distance;
    } else if (distance < nearest) {
      id = i;
      nearest = distance;
    }
  }

  return ASPECT_RATIO[id];
}

function kebabify(str: string): string {
  return str.replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export function shimStyle(style: JSX.CSSProperties): JSX.CSSProperties {
  const keys = Object.keys(style) as (keyof JSX.CSSProperties)[];
  const newStyle: JSX.CSSProperties = {};

  for (let i = 0, len = keys.length; i < len; i += 1) {
    newStyle[kebabify(keys[i])] = style[keys[i]];
  }
  return newStyle;
}

export function getAspectRatioBoxStyle(ratio: AspectRatio): JSX.CSSProperties {
  return {
    position: 'relative',
    'padding-top': `${(ratio.height * 100) / ratio.width}%`,
    width: '100%',
    height: '0',
    overflow: 'hidden',
  };
}

export const ASPECT_RATIO_CONTENT: JSX.CSSProperties = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
};

export const IMAGE_CONTAINER: JSX.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

export const CSS_PLACEHOLDER: JSX.CSSProperties = {
  ...ASPECT_RATIO_CONTENT,
  pointerEvents: 'none',
};

export const IMAGE: JSX.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};

export function getEmptySVGPlaceholder({ width, height }: AspectRatio): string {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
}

export function getEncodedSVG(svg: string): string {
  const encodedSVG = encodeURIComponent(svg);
  return `data:image/svg+xml,${encodedSVG}`;
}

export function getEncodedOptionalSVG(ratio: AspectRatio, svg?: string): string {
  return getEncodedSVG(svg ?? getEmptySVGPlaceholder(ratio));
}

export function getEmptyImageURL(ratio: AspectRatio): string {
  return getEncodedOptionalSVG(ratio);
}
