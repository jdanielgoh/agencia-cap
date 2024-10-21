import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

import eslintConfigPrettier from 'eslint-config-prettier'

import html from '@html-eslint/eslint-plugin'
import htmlParser from '@html-eslint/parser'

export default [
  { files: ['**/*.{js,mjs,cjs,vue,**/*.html}'] },
  { ignores: ['**/node_modules', '.git', '**/dist'] },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: htmlParser,
    },
  },
  {
    plugins: {
      '@html-eslint': html,
    },
  },
  {
    rules: {
      eqeqeq: 'error',
      'no-var': 'error',
      'no-alert': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  eslintConfigPrettier,
]
