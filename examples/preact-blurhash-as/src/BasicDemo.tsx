import { Blurhash, BlurhashPlaceholder } from 'preact-blurhash-as';

const SRC = 'https://images.unsplash.com/photo-1624429900825-f1df90d339e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixlib=rb-1.2.1&q=80&w=1280';
const HASH = '|gM$VZ4:EMt6ayj]R+WCWW~VRkIpoyaeo0j[ayjt9vxvniWqWXWBj[jtay=xkWRkaebbayayfkjsS4$%WXjZWXoLjtbHj@M|fPxZofayWCj[j]j[R*R,WBs:s:jZj@j@oLoyjZWCRkj[kBoLayWVt7WBWXWCWCWXj[oKfP';

const WIDTH = 1280;
const HEIGHT = 720;

export default function BasicDemo(): JSX.Element {
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
          <Blurhash
            mode="css"
            src={SRC}
            hash={HASH}
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
                  hash={HASH}
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
            src={SRC}
            hash={HASH}
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
                  hash={HASH}
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
            src={SRC}
            hash={HASH}
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
                  hash={HASH}
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
            src={SRC}
            hash={HASH}
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
                  hash={HASH}
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
