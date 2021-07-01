import React, { useRef, useEffect } from 'react';
import { BlurhashOptions } from './types';
import useBlurhashData from './useBlurhashData';
import { CSS_PLACEHOLDER } from './utils';

export interface BlurhashCanvasPlaceholderProps extends BlurhashOptions {
  visible: boolean;
}

export default function BlurhashCanvasPlaceholder(
  {
    visible,
    width,
    height,
    onLoad,
    ...props
  }: BlurhashCanvasPlaceholderProps,
): JSX.Element {
  const result = useBlurhashData({
    ...props,
    width,
    height,
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const { current } = canvasRef;
    if (current) {
      const ctx = current.getContext('2d');
      if (!ctx) {
        return;
      }

      current.width = width;
      current.height = height;

      ctx.clearRect(0, 0, width, height);
      const imageData = ctx.createImageData(width, height);
      imageData.data.set(result);
      ctx.putImageData(imageData, 0, 0);

      onLoad?.();
    }
  }, [result, width, height, onLoad]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="blurhash-as__placeholder"
      style={{
        ...CSS_PLACEHOLDER,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
