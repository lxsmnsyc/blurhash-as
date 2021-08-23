import { createSignal, JSX } from 'solid-js';
import useLaze from 'solid-laze';
import {
  getAspectRatioBoxStyle,
  ASPECT_RATIO_CONTENT,
  IMAGE_CONTAINER,
  IMAGE,
  getEmptyImageURL,
  shimStyle,
} from './utils';

export interface BlurhashContainerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  onLoad?: () => void;
  children: (visible: () => boolean, onLoad: () => void) => JSX.Element;
}

export default function BlurhashContainer(
  props: BlurhashContainerProps,
): JSX.Element {
  const [showPlaceholder, setShowPlaceholder] = createSignal(true);
  const laze = useLaze<HTMLDivElement>();
  const [defer, setDefer] = createSignal(true);

  function onPlaceholderLoad() {
    setDefer(false);
  }

  return (
    <div
      ref={laze.ref}
      class="blurhash-as__aspect-ratio-box"
      style={getAspectRatioBoxStyle({ width: props.width, height: props.height })}
    >
      <div
        class="blurhash-as__aspect-ratio-content"
        style={ASPECT_RATIO_CONTENT}
      >
        <div
          class="blurhash-as__image-container"
          style={IMAGE_CONTAINER}
        >
          {
            laze.visible && (
              <>
                <img
                  class="blurhash-as__image"
                  src={(
                    defer()
                      ? getEmptyImageURL({ width: props.width, height: props.height })
                      : props.src
                  )}
                  alt={props.alt}
                  onLoad={() => {
                    if (!defer()) {
                      setShowPlaceholder(false);
                      props.onLoad?.();
                    }
                  }}
                  style={shimStyle({
                    ...IMAGE,
                    opacity: showPlaceholder() ? 0 : 1,
                  })}
                />
                {props.children(showPlaceholder, onPlaceholderLoad)}
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}
