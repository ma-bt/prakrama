// eslint.config.js
module.exports = {
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    quotes: ['error', 'single'], // Prefer single quotes
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }], // Configure rule
    eqeqeq: 'error',
    'no-undef': 'warn',
    // Uncomment if needed
    // 'no-console': 'error',
    // 'no-unused-vars': 'warn',
  },
  ignorePatterns: ['*.js', '*.scss'],
  settings: {
    react: {
      version: 'detect', // Automatically detects the React version
    },
  },
};

