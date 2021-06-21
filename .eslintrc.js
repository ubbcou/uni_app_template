module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@ubbcou/vue', '@ubbcou/base'],
  rules: {
    'no-use-before-define': ['error', { 'functions': false }],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 4,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
  globals: {
    wx: 'readonly',
    Component: 'readonly',
    uni: 'readonly',
    getCurrentPages: 'readonly',
    globalThis: 'readonly',
  },
}
