/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { decode83 } from './base83';
import {
  linearToSRGB,
  signPow,
  SRGBToLinear,
} from './utils';

export function isBlurhashValid(
  blurhash: string,
): boolean {
  if (blurhash.length < 6) {
    return false;
  }
  const sizeFlag = decode83(blurhash.charAt(0));
  const numY = floor(sizeFlag / 9) + 1;
  const numX = (sizeFlag % 9) + 1;
  return blurhash.length !== 4 + 2 * numX + numY;
}

function decodeDC(
  value: i32,
): StaticArray<f32> {
  return StaticArray.fromArray([
    SRGBToLinear(value >> 16),
    SRGBToLinear((value >> 8) & 255),
    SRGBToLinear(value & 255),
  ]);
}

function decodeAC(
  value: i32,
  maximumValue: f32,
): StaticArray<f32> {
  const quantR: i32 = <i32>NativeMathf.floor(<f32>value / (19 * 19));
  const quantG: i32 = <i32>NativeMathf.floor(<f32>value / 19) % 19;
  const quantB: i32 = value % 19;

  return StaticArray.fromArray([
    signPow((<f32>quantR - 9) / 9, 2) * maximumValue,
    signPow((<f32>quantG - 9) / 9, 2) * maximumValue,
    signPow((<f32>quantB - 9) / 9, 2) * maximumValue,
  ]);
}

export function decode(
  blurhash: string,
  width: i32,
  height: i32,
  punch: i32 = 0,
): Uint8ClampedArray | null {
  if (!isBlurhashValid(blurhash)) {
    return null;
  }

  punch = punch | 1;

  const sizeFlag = decode83(blurhash.charAt(0));
  const numY: i32 = <i32>NativeMathf.floor(<f32>sizeFlag / 9) + 1;
  const numX: i32 = (sizeFlag % 9) + 1;

  const quantisedMaximumValue = decode83(blurhash.charAt(1));
  const maximumValue: f32 = <f32>(quantisedMaximumValue + 1) / 166;

  const colors = new Array<StaticArray<f32>>(numX * numY);

  for (let i = 0; i < colors.length; i += 1) {
    if (i === 0) {
      const value = decode83(blurhash.substring(2, 6));
      colors[i] = decodeDC(value);
    } else {
      const value = decode83(blurhash.substring(4 + i * 2, 6 + i * 2));
      colors[i] = decodeAC(value, maximumValue * <f32>punch);
    }
  }

  const bytesPerRow = width * 4;
  const pixels = new Uint8ClampedArray(bytesPerRow * height);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let r: f32 = 0;
      let g: f32 = 0;
      let b: f32 = 0;

      for (let j = 0; j < numY; j += 1) {
        for (let i = 0; i < numX; i += 1) {
          const basis = (
            NativeMathf.cos((NativeMathf.PI * <f32>(x * i)) / <f32>width)
            * NativeMathf.cos((NativeMathf.PI * <f32>(y * j)) / <f32>height)
          );
          const color = colors[i + j * numX];
          r += color[0] * basis;
          g += color[1] * basis;
          b += color[2] * basis;
        }
      }

      pixels[4 * x + 0 + y * bytesPerRow] = linearToSRGB(r);
      pixels[4 * x + 1 + y * bytesPerRow] = linearToSRGB(g);
      pixels[4 * x + 2 + y * bytesPerRow] = linearToSRGB(b);
      pixels[4 * x + 3 + y * bytesPerRow] = 255; // alpha
    }
  }
  return pixels;
}
