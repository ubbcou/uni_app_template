module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@ubbcou/vue'],
  rules: {},
  globals: {
    wx: 'readonly',
    Component: 'readonly',
    uni: 'readonly',
    getCurrentPages: 'readonly',
    globalThis: 'readonly',
  },
}
