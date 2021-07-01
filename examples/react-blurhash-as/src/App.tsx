import React from 'react';
import { Blurhash } from 'react-blurhash-as';
import * as blurhash from 'blurhash-as/browser';
import wasmURL from 'blurhash-as/build/optimized.wasm?url';

blurhash.setURL(wasmURL);

interface ImageShowcaseProps {
  src: string;
  hash: string;
}

const WIDTH = 1366;
const HEIGHT = 768;

function ImageShowcase({ src, hash }: ImageShowcaseProps): JSX.Element {
  return (
    <div className="showcase">
      <div className="showcase-item">
        <h1>Original Image</h1>
        <div className="aspect-ratio-box">
          <div className="aspect-ratio-content">
            <div className="image-container">
              <img src={src} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-item">
        <h1>CSS</h1>
        <Blurhash
          mode="css"
          src={src}
          hash={hash}
          alt="CSS"
          width={WIDTH}
          height={HEIGHT}
        />
      </div>
      <div className="showcase-item">
        <h1>SVG</h1>
        <Blurhash
          mode="svg"
          src={src}
          hash={hash}
          alt="CSS"
          width={WIDTH}
          height={HEIGHT}
        />
      </div>
      <div className="showcase-item">
        <h1>Canvas</h1>
        <Blurhash
          mode="canvas"
          src={src}
          hash={hash}
          alt="CSS"
          width={WIDTH}
          height={HEIGHT}
        />
      </div>
      <div className="showcase-item">
        <h1>Image</h1>
        <Blurhash
          mode="image"
          src={src}
          hash={hash}
          alt="CSS"
          width={WIDTH}
          height={HEIGHT}
          format="image/webp"
        />
      </div>
    </div>
  );
}

const SRC = 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=768&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI1MTQxODkx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1366';
const HASH = 'L467[,JU00]%=|Sh9twb00w]~EE%';

export default function App(): JSX.Element {
  return (
    <div className="page">
      <div className="container">
        <ImageShowcase src={SRC} hash={HASH} />
      </div>
    </div>
  );
}
