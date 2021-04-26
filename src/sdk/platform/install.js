import platform from './index'

export default {
  /**
   * 自定义方法
   * 使用： this.$uni.xxx
   */
  install(Vue) {
    Vue.$uni = platform
    Vue.prototype.$uni = platform
  },
}
