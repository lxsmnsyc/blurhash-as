import react from '@vitejs/plugin-react';
import { blurhashAS } from 'unplugin-blurhash-as';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [blurhashAS.vite(), react()],
});
