import * as blurhash from 'blurhash-as';
import sharp from 'sharp';
import fs from 'fs';

interface ImageData {
  width: number;
  height: number;
  data: Uint8ClampedArray;
}

export async function getImageDataFromFile(originalPath: string): Promise<ImageData> {
  const stream = fs.createReadStream(originalPath);
  if (originalPath.endsWith('.png')) {
    const result = await stream.pipe(sharp().png())
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    return {
      width: result.info.width,
      height: result.info.height,
      data: result.data as unknown as Uint8ClampedArray,
    };
  }
  if (originalPath.endsWith('.webp')) {
    const result = await stream.pipe(sharp().webp())
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    return {
      width: result.info.width,
      height: result.info.height,
      data: result.data as unknown as Uint8ClampedArray,
    };
  }
  if (originalPath.endsWith('.jpg')) {
    const result = await stream.pipe(sharp().jpeg())
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    return {
      width: result.info.width,
      height: result.info.height,
      data: result.data as unknown as Uint8ClampedArray,
    };
  }
  throw new Error('unsupported format');
}

export async function toRawStream(
  hash: string,
  width: number,
  height: number,
  rasterScale = 5,
) {
  const decodedBytes = await blurhash.decode(
    hash,
    width * rasterScale,
    height * rasterScale,
  );
  return sharp(Buffer.from(decodedBytes), {
    raw: {
      width: width * rasterScale,
      height: height * rasterScale,
      channels: 4,
    },
  });
}

export async function toJPEG(
  hash: string,
  width: number,
  height: number,
  rasterScale = 5,
) {
  const stream = await toRawStream(hash, width, height, rasterScale);
  const jpegStream = stream.jpeg({ quality: 100 });
  const encodedBuffer = await jpegStream.toBuffer();
  const b64 = encodedBuffer.toString('base64');
  return `data:image/jpeg;base64,${b64}`;
}

export async function toPNG(
  hash: string,
  width: number,
  height: number,
  rasterScale = 5,
) {
  const stream = await toRawStream(hash, width, height, rasterScale);
  const pngStream = stream.png();
  const encodedBuffer = await pngStream.toBuffer();
  const b64 = encodedBuffer.toString('base64');
  return `data:image/png;base64,${b64}`;
}

export async function toWebP(
  hash: string,
  width: number,
  height: number,
  rasterScale = 5,
) {
  const stream = await toRawStream(hash, width, height, rasterScale);
  const webpStream = stream.webp({ quality: 100 });
  const encodedBuffer = await webpStream.toBuffer();
  const b64 = encodedBuffer.toString('base64');
  return `data:image/webp;base64,${b64}`;
}
