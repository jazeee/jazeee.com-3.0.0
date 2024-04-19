module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index', 'object'],
        pathGroups: [
          {
            pattern: '@*{,/**}',
            group: 'external',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    curly: ['error', 'all'],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      {
        json: 'always',
        tsx: 'never',
        ts: 'never',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
  overrides: [
    {
      files: ['**/index.ts*'],
      rules: {
        'no-restricted-exports': 'off',
      },
    },
    {
      files: ['e2e/**/*', 'playwright.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
