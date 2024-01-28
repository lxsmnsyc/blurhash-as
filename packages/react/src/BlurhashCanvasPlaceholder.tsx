import {
  getAspectRatio,
  getNearestAspectRatio,
} from 'blurhash-as-helper/utils';
import type { JSX } from 'react';
import { useEffect, useMemo, useRef } from 'react';
import type { BlurhashOptions } from './types';
import { useBlurhashData } from './useBlurhashData';
import { CSS_PLACEHOLDER } from './utils';

export interface BlurhashCanvasPlaceholderProps extends BlurhashOptions {
  visible: boolean;
}

export function BlurhashCanvasPlaceholder({
  visible,
  width,
  height,
  onLoad,
  ...props
}: BlurhashCanvasPlaceholderProps): JSX.Element {
  const result = useBlurhashData({
    ...props,
    width,
    height,
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const ratio = useMemo(() => {
    const originalAspectRatio = getAspectRatio({
      width,
      height,
    });
    const corrected = getNearestAspectRatio(originalAspectRatio);
    return {
      width: corrected.width * 5,
      height: corrected.height * 5,
    };
  }, [width, height]);

  useEffect(() => {
    const { current } = canvasRef;
    if (current) {
      const ctx = current.getContext('2d');
      if (!ctx) {
        return;
      }

      current.width = ratio.width;
      current.height = ratio.height;

      ctx.clearRect(0, 0, ratio.width, ratio.height);
      const imageData = ctx.createImageData(ratio.width, ratio.height);

      imageData.data.set(result);
      ctx.putImageData(imageData, 0, 0);

      onLoad?.();
    }
  }, [result, ratio, onLoad]);

  return (
    <canvas
      ref={canvasRef}
      width={ratio.width}
      height={ratio.height}
      className="blurhash-as__placeholder"
      style={{
        ...CSS_PLACEHOLDER,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
