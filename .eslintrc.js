module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },

  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    globalThis: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react', 'jest', 'filenames', 'import', 'react', 'jsx-a11y', 'react-hooks', 'prettier'],
  rules: {
    // General
    'no-plusplus': 'off',
    'no-underscore-dangle': ['error', { allow: ['__NEXT_DATA__'] }],
    'consistent-return': 'error',
    'no-implicit-coercion': ['error', {}], // second argument needed to override airbnb config
    // Filenames
    'filenames/match-regex': [
      'error',
      '^.?[0-9a-z-]+(.test|.integration.test|.mock|.config|.setup|.d|.stories)?(.default|.prod|.dev)?$',
      true,
    ],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // should add ".ts" if typescript project
    'filenames/match-exported': [2, 'kebab'],
    curly: [2, 'all'],
    'no-empty-function': ['error', { allow: [] }],
    quotes: ['error', 'single', { allowTemplateLiterals: false, avoidEscape: true }],

    // React
    'react/default-props-match-prop-types': 'error',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/no-array-index-key': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-boolean-value': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': 'off',

    // ES modules
    'no-duplicate-imports': 'error',
    'import/no-unresolved': 'error',
    'import/no-self-import': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'],
      },
    ],
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',

    // Jest
    'jest/no-disabled-tests': 'error',
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // s
    'no-multiple-empty-lines': 'warn',
    'no-shadow': 'error',
    'react/prop-types': 'error',
    'react/display-name': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message: 'Use specific lodash methods instead like "lodash/isUndefined"',
          },
          {
            name: 'lodash/fp',
            message: 'Use specific lodash methods instead like "lodash/fp/compose"',
          },
        ],
        patterns: [
          {
            group: ['lodash.*'],
            message: 'Import lodash methods from lodash package like "lodash/mergeWith"',
          },
        ],
      },
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './**/*.test.js',
            from: './**/__mocks__/*',
            message: "Please don't use __mocks__ folder if it's not jest manual mocks",
          },
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
      'babel-module': {},
    },
  },
  overrides: [
    {
      files: [
        // pages in next.js
        '**/**/pages/*.js',
        // stories files
        '*.stories.js',
      ],
      rules: {
        'import/no-default-export': 'off',
        'react-hooks/rules-of-hooks': 'off',
      },
    },
    {
      files: ['*.stories.js'],
      rules: { 'import/no-extraneous-dependencies': 'off' },
    },
    {
      files: [
        '**/*.stories.js',
        '**/__mocks__/*.js',
        '**/__mock__/*.js',
        '**/mocks.js',
        '**/mock.js',
        '**/*.test.js',
        '**/*.spec.js',
        '**/packages/server/**/*.js',
        '**/tokens*.js',
      ],
      rules: {
        'no-empty-function': 'off',
        'consistent-return': 'off',
        'react/display-name': 'off',
      },
    },
    {
      files: ['**/server/index.js'],
      rules: {
        'no-empty-function': 'off',
      },
    },
  ],
};
