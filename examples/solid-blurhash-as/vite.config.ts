import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid';
import blurhash from 'rollup-plugin-blurhash-as';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...blurhash(),
      enforce: 'pre'
    },
    solidPlugin()
  ]
})
