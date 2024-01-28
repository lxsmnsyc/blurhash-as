import type { AspectRatio } from 'blurhash-as-helper/utils';
import type { JSX } from 'preact';

export function getAspectRatioBoxStyle(ratio: AspectRatio): JSX.CSSProperties {
  return {
    position: 'relative',
    paddingTop: `${(ratio.height * 100) / ratio.width}%`,
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

export function getEmptyImageURL(ratio: AspectRatio): string {
  return getEncodedSVG(getEmptySVGPlaceholder(ratio));
}
