import React from 'react';
import {
  BlurhashStatic,
  BlurhashStaticPlaceholder,
} from 'react-blurhash-as';
import SRC from './example.jpg';
import css from './example.jpg?blurhash=css';
import svg from './example.jpg?blurhash=svg';
import jpg from './example.jpg?blurhash=jpg';
import png from './example.jpg?blurhash=png';

const WIDTH = 1280;
const HEIGHT = 720;

export default function StaticDemo(): JSX.Element {
  return (
    <div className="showcase">
      <div className="showcase-item">
        <h1>Original Image</h1>
        <div className="aspect-ratio-box">
          <div className="aspect-ratio-content">
            <div className="image-container">
              <img className="image" src={SRC} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-item">
        <h1>CSS</h1>
        <div className="showcase-gallery">
          <BlurhashStatic
            mode="css"
            src={css.source}
            placeholder={css.placeholder}
            alt="CSS"
            width={WIDTH}
            height={HEIGHT}
          />
          <div className="aspect-ratio-box">
            <div className="aspect-ratio-content">
              <div className="image-container">
                <BlurhashStaticPlaceholder
                  visible
                  mode="css"
                  placeholder={css.placeholder}
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
          <BlurhashStatic
            mode="svg"
            src={svg.source}
            placeholder={svg.placeholder}
            alt="CSS"
            width={WIDTH}
            height={HEIGHT}
          />
          <div className="aspect-ratio-box">
            <div className="aspect-ratio-content">
              <div className="image-container">
                <BlurhashStaticPlaceholder
                  visible
                  mode="svg"
                  placeholder={svg.placeholder}
                  width={WIDTH}
                  height={HEIGHT}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-item">
        <h1>Image with JPEG Placeholder</h1>
        <div className="showcase-gallery">
          <BlurhashStatic
            mode="image"
            src={jpg.source}
            placeholder={jpg.placeholder}
            alt="CSS"
            width={WIDTH}
            height={HEIGHT}
          />
          <div className="aspect-ratio-box">
            <div className="aspect-ratio-content">
              <div className="image-container">
                <BlurhashStaticPlaceholder
                  visible
                  mode="image"
                  placeholder={jpg.placeholder}
                  width={WIDTH}
                  height={HEIGHT}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-item">
        <h1>Image with PNG Placeholder</h1>
        <div className="showcase-gallery">
          <BlurhashStatic
            mode="image"
            src={png.source}
            placeholder={png.placeholder}
            alt="CSS"
            width={WIDTH}
            height={HEIGHT}
          />
          <div className="aspect-ratio-box">
            <div className="aspect-ratio-content">
              <div className="image-container">
                <BlurhashStaticPlaceholder
                  visible
                  mode="image"
                  placeholder={png.placeholder}
                  width={WIDTH}
                  height={HEIGHT}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
