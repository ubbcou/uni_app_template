const path = require('path')

module.exports = {
  configureWebpack: config => {
    return {
      resolve: {
        alias: {
          '~': path.resolve(__dirname)
        }
      }
    }
  }
}
