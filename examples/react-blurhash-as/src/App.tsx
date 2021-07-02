import React from 'react';
import { Blurhash, BlurhashPlaceholder } from 'react-blurhash-as';
import * as blurhash from 'blurhash-as/browser';
import wasmURL from 'blurhash-as/build/optimized.wasm?url';

blurhash.setURL(wasmURL);

interface ImageShowcaseProps {
  src: string;
  hash: string;
}

const WIDTH = 1280;
const HEIGHT = 720;

function ImageShowcase({ src, hash }: ImageShowcaseProps): JSX.Element {
  return (
    <div className="showcase">
      <div className="showcase-item">
        <h1>Original Image</h1>
        <div className="aspect-ratio-box">
          <div className="aspect-ratio-content">
            <div className="image-container">
              <img className="image" src={src} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-item">
        <h1>CSS</h1>
        <div className="showcase-gallery">
          <Blurhash
            mode="css"
            src={src}
            hash={hash}
            alt="CSS"
            width={WIDTH}
            height={HEIGHT}
          />
          <div className="aspect-ratio-box">
            <div className="aspect-ratio-content">
              <div className="image-container">
                <BlurhashPlaceholder
                  visible
                  mode="css"
                  hash={hash}
                  width={WIDTH}
                  height={HEIGHT}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-item">
        <h1>SVG</h1>
        <div className="showcase-gallery">
          <Blurhash
            mode="svg"
            src={src}
            hash={hash}
            alt="CSS"
            width={WIDTH}
            height={HEIGHT}
          />
          <div className="aspect-ratio-box">
            <div className="aspect-ratio-content">
              <div className="image-container">
                <BlurhashPlaceholder
                  mode="svg"
                  visible
                  hash={hash}
                  width={WIDTH}
                  height={HEIGHT}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-item">
        <h1>Canvas</h1>
        <div className="showcase-gallery">
          <Blurhash
            mode="canvas"
            src={src}
            hash={hash}
            alt="CSS"
            width={WIDTH}
            height={HEIGHT}
          />
          <div className="aspect-ratio-box">
            <div className="aspect-ratio-content">
              <div className="image-container">
                <BlurhashPlaceholder
                  mode="canvas"
                  visible
                  hash={hash}
                  width={WIDTH}
                  height={HEIGHT}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-item">
        <h1>Image</h1>
        <div className="showcase-gallery">
          <Blurhash
            mode="image"
            src={src}
            hash={hash}
            alt="CSS"
            width={WIDTH}
            height={HEIGHT}
            format="image/png"
          />
          <div className="aspect-ratio-box">
            <div className="aspect-ratio-content">
              <div className="image-container">
                <BlurhashPlaceholder
                  mode="image"
                  visible
                  hash={hash}
                  width={WIDTH}
                  height={HEIGHT}
                  format="image/png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SRC = 'https://images.unsplash.com/photo-1624429900825-f1df90d339e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixlib=rb-1.2.1&q=80&w=1280';
const HASH = '|gM$VZ4:EMt6ayj]R+WCWW~VRkIpoyaeo0j[ayjt9vxvniWqWXWBj[jtay=xkWRkaebbayayfkjsS4$%WXjZWXoLjtbHj@M|fPxZofayWCj[j]j[R*R,WBs:s:jZj@j@oLoyjZWCRkj[kBoLayWVt7WBWXWCWCWXj[oKfP';

export default function App(): JSX.Element {
  return (
    <div className="page">
      <div className="container">
        <ImageShowcase src={SRC} hash={HASH} />
      </div>
    </div>
  );
}
