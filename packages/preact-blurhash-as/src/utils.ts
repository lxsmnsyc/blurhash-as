import { h } from 'preact';

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

  const originalRatio = ratio.width / ratio.height;

  for (let i = 0; i < ASPECT_RATIO.length; i += 1) {
    const target = ASPECT_RATIO[i];

    const tRatio = target.width / target.height;
    const squared = tRatio - originalRatio;
    const distance = Math.sqrt(squared * squared);

    if (i === 0) {
      nearest = distance;
    } else if (distance < nearest) {
      id = i;
      nearest = distance;
    }
  }

  return ASPECT_RATIO[id];
}

export function getAspectRatioBoxStyle(ratio: AspectRatio): h.JSX.CSSProperties {
  return {
    position: 'relative',
    paddingTop: `${(ratio.height * 100) / ratio.width}%`,
    width: '100%',
    height: '0',
    overflow: 'hidden',
  };
}

export const ASPECT_RATIO_CONTENT: h.JSX.CSSProperties = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
};

export const IMAGE_CONTAINER: h.JSX.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

export const CSS_PLACEHOLDER: h.JSX.CSSProperties = {
  ...ASPECT_RATIO_CONTENT,
  pointerEvents: 'none',
};

export const IMAGE: h.JSX.CSSProperties = {
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

export function getEmptyImageURL(ratio: AspectRatio): string {
  return getEncodedSVG(getEmptySVGPlaceholder(ratio));
}
