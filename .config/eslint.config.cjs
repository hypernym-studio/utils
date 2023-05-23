module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es2022: true
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022
  },

  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  rules: {
    '@typescript-eslint/no-explicit-any': 'off'
  },

  ignorePatterns: [
    '.DS_Store',
    'node_modules',
    'package*',
    '*-lock.*',
    '*.log*',
    '.cache',
    '.env',
    'dist'
  ]
}
