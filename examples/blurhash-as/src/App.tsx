import React, { CSSProperties, useEffect, useState } from 'react';
import * as blurhash from 'blurhash-as/browser';
import wasmURL from 'blurhash-as/build/optimized.wasm?url';

blurhash.setURL(wasmURL);

export default function App(): JSX.Element {
  const [skeleton, setSkeleton] = useState(true);
  const [placeholder, setPlaceholder] = useState(true);

  const [hash, setHash] = useState<string>();
  const [imageSrc, setImageSrc] = useState('');
  const [cssObject, setCSSObject] = useState<CSSProperties>();

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setSkeleton(true);
    setHash(undefined);
    setImageSrc('');
    setCSSObject(undefined);

    let mounted = true;

    async function processImageData(imageData: ImageData) {
      const encoded = await blurhash.encode(
        imageData.data,
        imageData.width,
        imageData.height,
        4,
        3,
      );

      if (encoded && mounted) {
        setHash(encoded);

        const sheet = await blurhash.toCSSObject(
          encoded,
          4,
          3,
        );

        if (sheet && mounted) {
          setCSSObject(sheet);
          setSkeleton(false);
        }
      }
    }

    async function processImage() {
      const response = await fetch(`https://source.unsplash.com/1024x768/?v=${Date.now()}`);

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 1024;
      canvas.height = 768;

      if (ctx && mounted) {
        const image = new Image();
        image.src = response.url;
        image.crossOrigin = 'anonymous';

        setImageSrc(response.url);

        const imageData = await new Promise<ImageData>((resolve) => {
          image.onload = () => {
            ctx.drawImage(image, 0, 0);
            resolve(ctx.getImageData(0, 0, 1024, 768));
          };
        });
        await processImageData(imageData);
      }
    }

    processImage().catch(() => {
      //
    });

    return () => {
      mounted = false;
    };
  }, [refresh]);

  return (
    <div className="page">
      <div className="container">
        <div className="aspect-ratio-box">
          <div className="aspect-ratio-content">
            <div className="image-container">
              <img className={`${(skeleton || placeholder) ? 'hidden' : ''}`} src={imageSrc} alt="" />
              <div className={`placeholder ${(skeleton || !placeholder) ? 'hidden' : ''}`} style={cssObject} />
              <div className={`skeleton ${!skeleton ? 'hidden' : ''}`} />
            </div>
          </div>
        </div>
        <div className="hash-container">
          <span className="hash">{hash ?? 'No hash'}</span>
        </div>
        <div className="">
          <button
            type="button"
            className="refresh"
            onClick={() => {
              setRefresh(refresh + 1);
            }}
          >
            Refresh
          </button>
          <button
            type="button"
            className="placeholder-toggle"
            onClick={() => {
              setPlaceholder(!placeholder);
            }}
          >
            {`Show ${placeholder ? 'Image' : 'Placeholder'}`}
          </button>
        </div>
      </div>
    </div>
  );
}
