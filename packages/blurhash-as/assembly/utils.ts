export function linearToSRGB(value: f32): i32 {
  const v: f32 = NativeMathf.max(0.0, NativeMathf.min(1.0, value));
  const result: i32 = <i32>(
    (v <= 0.0031308
      ? NativeMathf.round(v * 12.92 * 255.0 + 0.5)
      : NativeMathf.round(
          (1.055 * NativeMathf.pow(v, 1.0 / 2.4) - 0.055) * 255 + 0.5,
        ))
  );
  return result;
}

export function SRGBToLinear(value: i32): f32 {
  const v: f32 = <f32>value / 255.0;
  if (v <= 0.04045) {
    return v / 12.92;
  }
  return NativeMathf.pow((v + 0.055) / 1.055, 2.4);
}

export function signPow(val: f32, exp: f32): f32 {
  return copysign(NativeMathf.pow(NativeMathf.abs(val), exp), val);
}
