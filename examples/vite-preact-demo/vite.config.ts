import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import blurhash from 'rollup-plugin-blurhash-as';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...blurhash(),
      enforce: 'pre'
    },
    preact()
  ]
})
