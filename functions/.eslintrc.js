module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    // We do NOT want style rules blocking deploy right now
    indent: "off",
    "comma-dangle": "off",
    "object-curly-spacing": "off",
    "quote-props": "off",
    "eol-last": "off",
    "max-len": "off",

    // Google config defaults we don’t want for this project
    "require-jsdoc": "off",
    "valid-jsdoc": "off",

    // Keep quotes consistent
    quotes: ["error", "double"],
  },
};