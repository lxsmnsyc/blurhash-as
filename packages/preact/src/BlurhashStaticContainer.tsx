/** @jsx h */
import { h } from 'preact';
import useLaze from 'preact-laze';
import { useState } from 'preact/hooks';
import {
  getAspectRatioBoxStyle,
  ASPECT_RATIO_CONTENT,
  IMAGE_CONTAINER,
  IMAGE,
  getEmptyImageURL,
} from './utils';

export interface BlurhashStaticContainerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  onLoad?: () => void;
  children: (visible: boolean, onLoad: () => void) => JSX.Element;
}

export default function BlurhashStaticContainer(
  {
    src,
    alt,
    width,
    height,
    children,
    onLoad,
  }: BlurhashStaticContainerProps,
): JSX.Element {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const { ref, visible } = useLaze<HTMLDivElement>();
  const [defer, setDefer] = useState(true);

  function onPlaceholderLoad() {
    setDefer(false);
  }

  return (
    <div
      ref={ref}
      className="blurhash-as__aspect-ratio-box"
      style={getAspectRatioBoxStyle({ width, height })}
    >
      <div
        className="blurhash-as__aspect-ratio-content"
        style={ASPECT_RATIO_CONTENT}
      >
        <div
          className="blurhash-as__image-container"
          style={IMAGE_CONTAINER}
        >
          {
            visible && (
              <img
                className="blurhash-as__image"
                src={defer ? getEmptyImageURL({ width, height }) : src}
                alt={alt}
                onLoad={() => {
                  if (!defer) {
                    setShowPlaceholder(false);
                    onLoad?.();
                  }
                }}
                style={{
                  ...IMAGE,
                  opacity: showPlaceholder ? 0 : 1,
                }}
              />
            )
          }
          {children(showPlaceholder, onPlaceholderLoad)}
        </div>
      </div>
    </div>
  );
}
