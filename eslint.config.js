const typescriptParser = require('@typescript-eslint/parser');
const jsoncParser = require('jsonc-eslint-parser');
const jestPlugin = require('eslint-plugin-jest');
const jsdocPlugin = require('eslint-plugin-jsdoc');
const prettierPlugin = require('eslint-plugin-prettier');
const importPlugin = require('eslint-plugin-import');
const rxjsPlugin = require('eslint-plugin-rxjs-angular-updated');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const baseConfig = require('./eslint.base.config.js');
const nx = require('@nx/eslint-plugin');

module.exports = [
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {},
  },
  ...baseConfig,
  {
    ignores: ['**/dist', '**/tools'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.*?.json',
      },
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
        jest: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@nx': nx,
      'jest': jestPlugin,
      'jsdoc': jsdocPlugin,
      'prettier': prettierPlugin,
      'import': importPlugin,
      'rxjs-angular': rxjsPlugin,
    },
    rules: {
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'switch'] },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let'], next: '*' },
        { blankLine: 'always', prev: '*', next: ['const', 'let'] },
        {
          blankLine: 'any',
          prev: ['const', 'let'],
          next: ['export', 'const', 'let'],
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true },
      ],
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'no-public' },
      ],
      semi: [2, 'always'],
      'max-len': ['error', { code: 120, ignorePattern: '^import\\s.+\\sfrom\\s.+;$' }],
      'one-var': ['error', 'never'],
      'eol-last': ['error', 'always'],
      'lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      'quote-props': ['error', 'consistent', { keywords: true, unnecessary: false }],
      quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
      'import/named': 'off',
      'import/namespace': 'off',
      'import/order': [
        'warn',
        { groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index'] },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      'no-prototype-builtins': 'warn',
    },
  },
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'rxjs-angular/prefer-composition': 'error',
      'rxjs-angular/prefer-async-pipe': 'error',
      'rxjs-angular/prefer-takeuntil': 'error',
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  },
  {
    files: ['**/package.json', '**/generators.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      '@nx/nx-plugin-checks': 'error',
    },
  },
];
