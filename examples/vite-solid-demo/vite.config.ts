import { blurhashAS } from 'unplugin-blurhash-as';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [blurhashAS.vite(), solidPlugin()],
});
