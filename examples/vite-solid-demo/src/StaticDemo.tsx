import {
  BlurhashStatic,
  BlurhashStaticPlaceholder,
} from 'solid-blurhash-as';
import SRC from './example.jpg';
import * as css from './example.jpg?blurhash=css';
import * as svg from './example.jpg?blurhash=svg';
import * as jpg from './example.jpg?blurhash=jpg';
import * as png from './example.jpg?blurhash=png';

export default function StaticDemo(): JSX.Element {
  return (
    <div class="showcase">
      <div class="showcase-item">
        <h1>Original Image</h1>
        <div class="aspect-ratio-box">
          <div class="aspect-ratio-content">
            <div class="image-container">
              <img class="image" src={SRC} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="showcase-item">
        <h1>CSS</h1>
        <div class="showcase-gallery">
          <BlurhashStatic
            mode="css"
            src={css.source}
            placeholder={css.placeholder}
            alt="CSS"
            width={css.width}
            height={css.height}
          />
          <div class="aspect-ratio-box">
            <div class="aspect-ratio-content">
              <div class="image-container">
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
      <div class="showcase-item">
        <h1>SVG</h1>
        <div class="showcase-gallery">
          <BlurhashStatic
            mode="svg"
            src={svg.source}
            placeholder={svg.placeholder}
            alt="SVG"
            width={svg.width}
            height={svg.height}
          />
          <div class="aspect-ratio-box">
            <div class="aspect-ratio-content">
              <div class="image-container">
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
      <div class="showcase-item">
        <h1>Image with JPEG Placeholder</h1>
        <div class="showcase-gallery">
          <BlurhashStatic
            mode="image"
            src={jpg.source}
            placeholder={jpg.placeholder}
            alt="JPEG"
            width={jpg.width}
            height={jpg.height}
          />
          <div class="aspect-ratio-box">
            <div class="aspect-ratio-content">
              <div class="image-container">
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
      <div class="showcase-item">
        <h1>Image with PNG Placeholder</h1>
        <div class="showcase-gallery">
          <BlurhashStatic
            mode="image"
            src={png.source}
            placeholder={png.placeholder}
            alt="PNG"
            width={png.width}
            height={png.height}
          />
          <div class="aspect-ratio-box">
            <div class="aspect-ratio-content">
              <div class="image-container">
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
