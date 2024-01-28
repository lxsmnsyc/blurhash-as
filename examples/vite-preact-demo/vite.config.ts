import preact from '@preact/preset-vite';
import { blurhashAS } from 'unplugin-blurhash-as';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [blurhashAS.vite(), preact()],
});
