module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "plugin:react/recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "global": true,
    "__dirname": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "max-len": 0,
    "indent": ["error", 2],
    "camelcase": 0,
    "no-unused-vars": "error",
    "no-undef": "error",
    "no-underscore-dangle": 0,
    "no-trailing-spaces": "error",
    "no-else-return": "error",
    "react/require-extension": 0,
    "react/prop-types": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unescaped-entities": 0,
    "global-require": 0,
    "key-spacing": "error",
    "arrow-spacing": "error",
    "space-in-parens": "error",
    "semi": "error"
  }
};
