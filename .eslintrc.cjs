/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname
  },
  rules: {
    "no-console": [
      "warn",
      { "allow": ["clear", "info", "error", "dir", "trace", "log"] }
     ],
    "no-undef": "off"
  },
};