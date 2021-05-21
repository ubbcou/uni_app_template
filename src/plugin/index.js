/* eslint-disable no-param-reassign */
import ldGet from 'lodash.get'

const CDN_PIC = 'https://xxx.com/oss'

/**
 * 安全获取数据
 * @param {String} path 路径lodash.get第一个参数
 * @param def 默认值
 * @return return 获取的值，不存在时返回默认值
 */
 function _ldGet(path, def) {
  return ldGet(this, path, def)
}

export default {
  install(Vue) {
    Vue.prototype.$lg = _ldGet
    Vue.prototype.$cdn = (pic) => CDN_PIC + pic
    global.$cdn = CDN_PIC
  },
}


