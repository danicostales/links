// ESLint v9 flat config
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import importPlugin from 'eslint-plugin-import';
import a11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**'],
  },
  // JS/TS
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      'jsx-a11y': a11yPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'warn',
    },
  },
  // Astro
  {
    files: ['**/*.astro'],
    plugins: { astro: astroPlugin, prettier: prettierPlugin },
    languageOptions: {
      parser: astroParser,
      parserOptions: { parser: tsParser },
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,
      'prettier/prettier': 'warn',
    },
  },
];
