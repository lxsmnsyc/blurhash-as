import { decode } from "./decode";

function getGradients(
  decodedData: Uint8ClampedArray,
  width: i32,
  height: i32,
): string {
  const bytesPerRow = width * 4;

  let gradients = '';
  for (let y = 0; y < height; y += 1) {
    let gradient = '';
    for (let x = 0; x < width; x += 1) {
      const r = decodedData[4 * x + 0 + y * bytesPerRow];
      const g = decodedData[4 * x + 1 + y * bytesPerRow];
      const b = decodedData[4 * x + 2 + y * bytesPerRow];
      const a = 255;

      const color = `rgba(${r}, ${g}, ${b}, ${a})`;
      const start = x === 0
        ? ''
        : ` ${(<f32>x / <f32>width) * 100}%`;
      const end = x === width - 1
        ? ''
        : ` ${(<f32>(x + 1) / <f32>width) * 100}%`;
      const comma = x === width - 1
        ? ''
        : ', ';
      gradient += `${color}${start}${end}${comma}`;
    }
    const comma = y === height - 1
      ? ''
      : ', ';
    gradients += `linear-gradient(90deg, ${gradient})${comma}`;
  }

  return gradients;
}

function getPosition(height: i32): string {
  let position = '';

  for (let y = 0; y < height; y += 1) {
    position += (y === 0)
      ? '0 0'
      : `0 ${(<f32>y / <f32>(height - 1)) * 100}%`
    position += y === height - 1
      ? ''
      : ', ';
  }

  return position;
}

export function toCSSSheet(
  blurhash: string,
  width: i32,
  height: i32,
  punch: i32 = 0,
): string | null {
  const decodedData = decode(blurhash, width, height, punch);

  if (decodedData) {
    if (width * height * 4 !== decodedData.length) {
      return null;
    }
    return `
background-image: ${getGradients(decodedData, width, height)};
background-position: ${getPosition(height)};
background-size: 100% ${100.0 / <f32>height};
background-repeat: no-repeat;
`;
  }
  
  return null;
}

export function toCSSObject(
  blurhash: string,
  width: i32,
  height: i32,
  punch: i32 = 0,
): string | null {
  const decodedData = decode(blurhash, width, height, punch);

  if (decodedData) {
    if (width * height * 4 !== decodedData.length) {
      return null;
    }
    return `{
"backgroundImage": "${getGradients(decodedData, width, height)}",
"backgroundPosition": "${getPosition(height)}",
"backgroundSize": "100% ${100.0 / <f32>height}%",
"backgroundRepeat": "no-repeat"
}`;
  }
  
  return null;
}
