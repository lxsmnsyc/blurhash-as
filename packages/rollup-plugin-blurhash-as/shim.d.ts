declare module '*?blurhash=css' {
  export interface BlurhashStyle {
    backgroundImage: string;
    backgroundPosition: string;
    backgroundSize: string;
    backgroundRepeat: 'no-repeat';
  }
  interface BlurhashModule {
    hash: string;
    source: string;
    placeholder: BlurhashStyle;
  }
  const mod: BlurhashModule;
  export default mod;
}

declare module '*?blurhash=svg' {
  interface BlurhashModule {
    hash: string;
    source: string;
    placeholder: string;
  }
  const mod: BlurhashModule;
  export default mod;
}

declare module '*?blurhash=png' {
  interface BlurhashModule {
    hash: string;
    source: string;
    placeholder: string;
  }
  const mod: BlurhashModule;
  export default mod;
}

declare module '*?blurhash=jpg' {
  interface BlurhashModule {
    hash: string;
    source: string;
    placeholder: string;
  }
  const mod: BlurhashModule;
  export default mod;
}

declare module '*?blurhash=webp' {
  interface BlurhashModule {
    hash: string;
    source: string;
    placeholder: string;
  }
  const mod: BlurhashModule;
  export default mod;
}
