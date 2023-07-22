module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'personal-fsd-ako-plugin',
    'unused-imports',
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'no-restricted-syntax': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'linebreak-style': ['warn', 'windows'],
    'import/no-unresolved': 'off',
    'personal-fsd-ako-plugin/path-checker': [
      'error',
      {
        alias: '@',
      },
    ],
    'personal-fsd-ako-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/storeProvider', '**/testing'],
      },
    ],
    'personal-fsd-ako-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/StoreDecorator.tsx',
          '**/*.story.*',
        ],
      },
    ],
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'as',
          'target',
          'border',
          'role',
          'data-testid',
          'to',
          'direction',
          'gap',
          'align',
          'justify',
        ],
      },
    ],
    'no-undef': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'no-shadow': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'warn',
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
        ignoreComments: true,
      },
    ],
    'react/no-unstable-nested-components': 'warn',
    'object-curly-newline': 'warn',
    'react/no-array-index-key': 'warn',
    'no-param-reassign': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
  },
  globals: {
    __IS__DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
