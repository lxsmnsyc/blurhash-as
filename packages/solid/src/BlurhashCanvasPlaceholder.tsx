import { getAspectRatio, getNearestAspectRatio } from 'blurhash-as-helper/utils';
import { createEffect, createMemo, JSX } from 'solid-js';
import { BlurhashOptions } from './types';
import useBlurhashData from './useBlurhashData';
import { CSS_PLACEHOLDER } from './utils';

export interface BlurhashCanvasPlaceholderProps extends BlurhashOptions {
  visible: boolean;
}

export default function BlurhashCanvasPlaceholder(
  props: BlurhashCanvasPlaceholderProps,
): JSX.Element {
  const result = useBlurhashData(props);

  let canvasRef: HTMLCanvasElement | undefined;

  const getRatio = createMemo(() => {
    const originalAspectRatio = getAspectRatio({
      width: props.width,
      height: props.height,
    });
    const corrected = getNearestAspectRatio(originalAspectRatio);
    return {
      width: corrected.width * 5,
      height: corrected.height * 5,
    };
  });

  createEffect(() => {
    if (canvasRef) {
      const ctx = canvasRef.getContext('2d');
      if (!ctx) {
        return;
      }

      const ratio = getRatio();

      canvasRef.width = ratio.width;
      canvasRef.height = ratio.height;

      ctx.clearRect(0, 0, ratio.width, ratio.height);
      const imageData = ctx.createImageData(
        ratio.width,
        ratio.height,
      );

      const data = result();
      if (data) {
        imageData.data.set(data);
        ctx.putImageData(imageData, 0, 0);
        props.onLoad?.();
      }
    }
  });

  return (
    <canvas
      ref={canvasRef}
      width={getRatio().width}
      height={getRatio().height}
      class="blurhash-as__placeholder"
      style={{
        ...CSS_PLACEHOLDER,
        opacity: props.visible ? 1 : 0,
      }}
    />
  );
}
