module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@ubbcou/vue', '@ubbcou/base'],
  rules: {
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
    uni: 'off',
    getCurrentPages: 'readonly',
  },
}
