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
            width={css.width}
            height={css.height}
          />
          <div className="aspect-ratio-box">
            <div className="aspect-ratio-content">
              <div className="image-container">
                <BlurhashStaticPlaceholder
                  visible
                  mode="css"
                  placeholder={css.placeholder}
                  width={css.width}
                  height={css.height}
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
            alt="SVG"
            width={svg.width}
            height={svg.height}
          />
          <div className="aspect-ratio-box">
            <div className="aspect-ratio-content">
              <div className="image-container">
                <BlurhashStaticPlaceholder
                  visible
                  mode="svg"
                  placeholder={svg.placeholder}
                  width={svg.width}
                  height={svg.height}
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
            alt="JPEG"
            width={jpg.width}
            height={jpg.height}
          />
          <div className="aspect-ratio-box">
            <div className="aspect-ratio-content">
              <div className="image-container">
                <BlurhashStaticPlaceholder
                  visible
                  mode="image"
                  placeholder={jpg.placeholder}
                  width={jpg.width}
                  height={jpg.height}
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
            alt="PNG"
            width={png.width}
            height={png.height}
          />
          <div className="aspect-ratio-box">
            <div className="aspect-ratio-content">
              <div className="image-container">
                <BlurhashStaticPlaceholder
                  visible
                  mode="image"
                  placeholder={png.placeholder}
                  width={png.width}
                  height={png.height}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
