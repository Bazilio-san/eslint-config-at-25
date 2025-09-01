const globals = require('globals');
const tseslint = require('@typescript-eslint/eslint-plugin');
const vue = require('eslint-plugin-vue');
const importPlugin = require('eslint-plugin-import');
const preferArrow = require('eslint-plugin-prefer-arrow');
const unusedImports = require('eslint-plugin-unused-imports');
const vueParser = require('vue-eslint-parser');
const tsParserPath = require.resolve('@typescript-eslint/parser');

module.exports = [
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParserPath,
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        jquery: 'readonly',
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
        ga: 'readonly',
        cordova: 'readonly',
        __statics: 'readonly',
        __QUASAR_SSR__: 'readonly',
        __QUASAR_SSR_SERVER__: 'readonly',
        __QUASAR_SSR_CLIENT__: 'readonly',
        __QUASAR_SSR_PWA__: 'readonly',
        process: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly',
      },
    },

    plugins: {
      'prefer-arrow': preferArrow,
      '@typescript-eslint': tseslint,
      vue: vue,
      import: importPlugin,
      'unused-imports': unusedImports,
    },

    ignores: ['node_modules/**', '**/*.json', '**/dist/**/*.*', 'eslint.config.js'],

    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-var-requires': 'off',

      'comma-dangle': ['warn', 'always-multiline'],
      'consistent-return': 'off',
      'default-case': 'off',
      'global-require': 'off',

      'import/default': 'error',
      'import/export': 'error',
      'import/extensions': 'off',
      'import/first': 'off',
      'import/named': 'off',
      'import/namespace': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      'linebreak-style': ['error', 'unix'],
      'max-classes-per-file': 'off',
      'max-len': ['warn', 200],
      'no-console': 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-nested-ternary': 'off',
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-shadow': 'off',
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-void': 'off',
      'object-curly-newline': [
        'error',
        {
          ExportDeclaration: { minProperties: 8, multiline: true },
          ImportDeclaration: { minProperties: 8, multiline: true },
          ObjectExpression: { minProperties: 8, multiline: true },
          ObjectPattern: { minProperties: 8, multiline: true },
        },
      ],
      'prefer-promise-reject-errors': 'off',
      quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'space-before-function-paren': ['error', 'always'],

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
      ],

      'vue/multi-word-component-names': 'off',
      'no-restricted-syntax': 'off',
      'no-await-in-loop': 'off',
      curly: ['error', 'all'],
      'prefer-destructuring': ['error', { object: true, array: false }],
    },
  },
];
