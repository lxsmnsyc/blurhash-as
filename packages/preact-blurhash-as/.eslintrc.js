module.exports = {
  "root": true,
  "extends": [
    'lxsmnsyc/typescript/preact',
  ],
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
    "tsconfigRootDir": __dirname,
  },
  "rules": {
    "react/jsx-props-no-spreading": "off"
  }
};