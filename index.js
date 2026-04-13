const prettierConfig = require('./prettier.config.cjs')

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  overrides: [
    {
      files: ['*.vue'],
      env: {
        // 兼容：如果你项目里的 vue-eslint-parser 版本较低，编译宏需要显式启用
        'vue/setup-compiler-macros': true
      },
      globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineSlots: 'readonly',
        withDefaults: 'readonly',
        defineModel: 'readonly',
        defineOptions: 'readonly'
      }
    }
  ],
  rules: {
    'no-undef': 'off',
    'array-callback-return': 'error',
    'no-await-in-loop': 'error',
    'no-duplicate-imports': 'error',
    'no-inner-declarations': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    // 'no-useless-assignment': 'warn' eslint version 9xxx,
    'new-cap': 'error',
    'prefer-const': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    //  conflict with prettier
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: {
    //       max: 3
    //     },
    //     multiline: {
    //       max: 3
    //     }
    //   }
    // ] ,
    'vue/no-template-shadow': 'error',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/v-on-event-hyphenation': 'error',
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/v-slot-style': ['error'],
    'vue/no-lone-template': [
      'error',
      {
        ignoreAccessible: false
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true
      }
    ],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/html-comment-content-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    // 'vue/no-undef-directives': 'error',
    // 'vue/slot-name-casing': ['error', 'camelCase'],
    'prettier/prettier': ['error', prettierConfig]
  }
}
