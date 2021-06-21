/* eslint-disable no-param-reassign */
import { lg } from './lg'
import { authorize } from './authorize'
import * as nav from './nav'
import { toast } from './toast'
import { modal } from './modal'

const CDN_PIC = 'https://xxx.com/oss'

export default {
  install(Vue) {
    // lodash.get
    Vue.prototype.$lg = lg
    // 微信小程序导航
    Vue.prototype.$nav = nav
    // 微信小程序权限
    Vue.$authorize = authorize
    // cdn 路径组合
    Vue.prototype.$cdn = (pic) => CDN_PIC + pic
    // toast
    Vue.prototype.$toast = toast
    // modal
    Vue.prototype.$modal = modal
  },
}


