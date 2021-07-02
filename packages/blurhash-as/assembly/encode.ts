/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { encode83 } from './base83';
import {
  linearToSRGB, signPow, SRGBToLinear,
} from './utils';

function multiplyBasisFunction(
  pixels: Uint8ClampedArray,
  xComponent: i32,
  yComponent: i32,
  width: i32,
  height: i32,
): StaticArray<f32> {
  let r: f32 = 0;
  let g: f32 = 0;
  let b: f32 = 0;
  const bytesPerRow = width * 4;
  const normalization: f32 = (xComponent === 0 && yComponent === 0) ? 1 : 2;

  for (let x = 0; x < width; x += 1) {
    const xBasis = NativeMathf.cos((NativeMathf.PI * <f32>(xComponent * x)) / <f32>width);
    for (let y = 0; y < height; y += 1) {
      const yBasis = NativeMathf.cos((NativeMathf.PI * <f32>(yComponent * y)) / <f32>height);
      const basis = xBasis * yBasis;
      r += basis * SRGBToLinear(pixels[4 * x + 0 + y * bytesPerRow]);
      g += basis * SRGBToLinear(pixels[4 * x + 1 + y * bytesPerRow]);
      b += basis * SRGBToLinear(pixels[4 * x + 2 + y * bytesPerRow]);
    }
  }

  const scale: f32 = normalization / <f32>(width * height);

  return StaticArray.fromArray([
    r * scale,
    g * scale,
    b * scale,
  ]);
}

function encodeDC(r: f32, g: f32, b: f32): i32 {
  const roundedR = linearToSRGB(r);
  const roundedG = linearToSRGB(g);
  const roundedB = linearToSRGB(b);
  return (roundedR << 16) + (roundedG << 8) + roundedB;
}

function encodeACQuant(value: f32, maximumValue: f32): i32 {
  return <i32>NativeMathf.floor(
    NativeMathf.max(
      0,
      NativeMathf.min(
        18.0,
        signPow(value / maximumValue, 0.5) * 9.0 + 9.5,
      ),
    ),
  );
}

function encodeAC(r: f32, g: f32, b: f32, maximumValue: f32): i32 {
  const quantR = encodeACQuant(r, maximumValue);
  const quantG = encodeACQuant(g, maximumValue);
  const quantB = encodeACQuant(b, maximumValue);

  return quantR * 19 * 19 + quantG * 19 + quantB;
}

export default function encode(
  pixels: Uint8ClampedArray,
  width: i32,
  height: i32,
  componentX: i32,
  componentY: i32,
): string {
  const factors: StaticArray<StaticArray<f32>> = new StaticArray(componentX * componentY);
  for (let y = 0; y < componentY; y += 1) {
    for (let x = 0; x < componentX; x += 1) {
      factors[y * componentX + x] = multiplyBasisFunction(
        pixels,
        x,
        y,
        width,
        height,
      );
    }
  }

  const dc = factors[0];
  const ac = StaticArray.slice(factors, 1);

  const sizeFlag = componentX - 1 + (componentY - 1) * 9;
  let hash = encode83(sizeFlag, 1);

  let maximumValue: f32;
  if (ac.length > 0) {
    let actualMaximumValue: f32 = 0;
    for (let i = 0; i < ac.length; i += 1) {
      actualMaximumValue = NativeMathf.max(ac[i][0], actualMaximumValue);
      actualMaximumValue = NativeMathf.max(ac[i][1], actualMaximumValue);
      actualMaximumValue = NativeMathf.max(ac[i][2], actualMaximumValue);
    }

    const quantisedMaximumValue: i32 = <i32>NativeMathf.floor(
      NativeMathf.max(
        0,
        NativeMathf.min(
          82.0,
          actualMaximumValue * 166.0 - 0.5,
        ),
      ),
    );
    maximumValue = (<f32>quantisedMaximumValue + 1) / 166.0;
    hash += encode83(quantisedMaximumValue, 1);
  } else {
    maximumValue = 1;
    hash += encode83(0, 1);
  }

  hash += encode83(encodeDC(dc[0], dc[1], dc[2]), 4);

  for (let i = 0; i < ac.length; i += 1) {
    hash += encode83(encodeAC(ac[i][0], ac[i][1], ac[i][2], maximumValue), 2);
  }

  return hash;
}
