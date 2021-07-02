const esbuild = require('esbuild');
const blurhash = require('./dist/cjs').default;

esbuild.build({
  entryPoints: ['example-code.js'],
  bundle: true,
  loader: {
    '.jpg': 'file'
  },
  plugins: [
    blurhash(),
  ],
  format: 'esm',
  outdir: 'example',
});
