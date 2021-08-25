declare module '*?blurhash=css' {
  export interface BlurhashStyle {
    backgroundImage: string;
    backgroundPosition: string;
    backgroundSize: string;
    backgroundRepeat: 'no-repeat';
  }
  export const hash: string;
  export const source: string;
  export const width: number;
  export const height: number;
  export const placeholder: BlurhashStyle;
}

declare module '*?blurhash=svg' {
  export const hash: string;
  export const source: string;
  export const width: number;
  export const height: number;
  export const placeholder: string;
}

declare module '*?blurhash=png' {
  export const hash: string;
  export const source: string;
  export const width: number;
  export const height: number;
  export const placeholder: string;
}

declare module '*?blurhash=jpg' {
  export const hash: string;
  export const source: string;
  export const width: number;
  export const height: number;
  export const placeholder: string;
}

declare module '*?blurhash=webp' {
  export const hash: string;
  export const source: string;
  export const width: number;
  export const height: number;
  export const placeholder: string;
}
