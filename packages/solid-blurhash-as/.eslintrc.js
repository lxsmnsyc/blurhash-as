module.exports = {
  "root": true,
  "extends": [
    'lxsmnsyc/typescript/react',
  ],
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
    "tsconfigRootDir": __dirname,
  },
  "rules": {
    "react/jsx-props-no-spreading": "off",
    "react-hooks/rules-of-hooks": "off",
    "react/destructuring-assignment": "off",
    "react/no-unknown-property": "off"
  }
};