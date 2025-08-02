import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['dist/**', 'node_modules/**', 'vite.config.js'],
    plugins: {
      js,
      prettier: eslintPluginPrettier,
    },
    extends: ['js/recommended', eslintConfigPrettier],
    languageOptions: { globals: globals.browser },
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
    },
  },
])
