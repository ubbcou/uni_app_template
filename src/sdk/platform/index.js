import { platform } from './env'
import customApi from './custom'

const handler = {
  get: function(obj, prop) {
    // 优先使用自定义Api
    if (customApi[prop]) {
      return customApi[prop]
    } else {
      // 然后从被代理的对象内查找是否有该属性，否则返回null
      return obj[prop] ? obj[prop] : null
    }
  },
}

export default new Proxy(platform, handler)
