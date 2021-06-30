import { decode } from "./decode";

export default function toSVG(
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

    const bytesPerRow = width * 4;
    let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const r = decodedData[4 * x + 0 + y * bytesPerRow];
        const g = decodedData[4 * x + 1 + y * bytesPerRow];
        const b = decodedData[4 * x + 2 + y * bytesPerRow];
        const a = 255;

        svg += `<rect x="${x}" y="${y}" width="1" height="1" fill="rgba(${r},${g},${b},${a})"/>`;
      }
    }

    svg += '</svg>';

    return svg;
  }
  
  return null;
}
