const CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~';

export function decode83(string: string): i32 {
  let value: i32 = 0;
  for (let i = 0, len = string.length; i < len; i += 1) {
    const c = string.charAt(i);
    const digit = CHARSET.indexOf(c);
    value = value * 83 + digit;
  }
  return value;
}

export function encode83(value: i32, length: i32): string {
  let destination = '';
  for (let i = 1; i <= length; i += 1) {
    const digit = (value / (83 ** (length - i))) % 83;
    destination += CHARSET.charAt(digit);
  }
  return destination;
}
