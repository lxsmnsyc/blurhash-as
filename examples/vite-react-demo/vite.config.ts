import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import blurhash from 'rollup-plugin-blurhash-as';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...blurhash(),
      enforce: 'pre'
    },
    reactRefresh()
  ]
})
