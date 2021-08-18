import { isUrl } from '@/utils/is'
import { locToken } from '@/utils/local'
import { groupLog } from '@/utils/dev-log.js'
import { getCurrentPage, navigate } from '@/plugin/nav'
import { objectToQuery } from '@/utils/url'
import { toast } from '@/plugin/toast'
import { modal } from '@/plugin/modal'

/**
 * @TODO
 *  - toast
 *  - loading <not suggest>
 */

const host = 'http://localhost:3000'
const loadingQueue = new Map()
const duration = 600
let isLoading = false
/**
 * @returns timeoutID
 */
function createTimer() {
  const timerId = setTimeout(() => {
    isLoading = true
    uni.showLoading({ title: '加载中..', mask: true })
    loadingQueue.set(timerId, timerId)
  }, duration)
  return timerId
}
/**
 * @param {timeoutID} timerId
 */
function removeTimer(timerId) {
  clearTimeout(timerId)
  loadingQueue.delete(timerId)
  if (![...loadingQueue].length) {
    isLoading = false
  }
}
function assertLoading() {
  if (![...loadingQueue].length && !isLoading) {
    uni.hideLoading()
  }
}

/**
 * 请求拦截
 *   √ 通常函数
 *   √ Promise
 * @param {object} config
 */
export function requestInter(config) {
  const { url, errLevel = 1 } = config
  return {
    ...config,
    errLevel,
    url: isUrl(url) ? url : `${host}${url}`,
    loadingTimer: createTimer(),
    header: {
      ...config.header,
      'ubbcou-header': locToken.get(),
    },
  }
}

/**
 * 响应拦截
 *   √ 通常函数
 *   √ Promise
 * @param {object} config
 * @param {{ statusCode: number; data: any }} response
*/
export function responseInter(config, response) {
  // 清除timer，如果createTimer后到执行这段代码不足 duration 时长
  // loading不会显示
  if (config.loadingTimer) {
    removeTimer(config.loadingTimer)
    assertLoading()
  }
  return new Promise((resolve, reject) => {
    const { statusCode, data, statusText = '' } = response
    groupLog(`${config.method} - ${config.url.split('?')[0]}`, [config, response])
    let customMessage = ''
    // http status code
    if (statusCode === 200) {
      customMessage = 'ok'
      // http response-data
      resolve(data)
      return
    } if (statusCode === 401) {
      customMessage = '请登录'
      const currentPage = getCurrentPage
      navigate('/pages/main/login/login', {
        path: encodeURIComponent(`/${currentPage.route}?${objectToQuery(currentPage.options)}`),
      })
    } else if (statusCode === 0) {
      customMessage = '无网络'
    }

    const errorMessage = customMessage || statusText || (typeof data === 'string' ? data : data && (data.msg || data.message)) || `请重试(${statusCode})`

    // 自定义 errLevel，用来错误提示
    if (config.errLevel === 1) {
      toast(errorMessage)
    } else if (config.errLevel === 2) {
      modal(errorMessage)
    }
    reject(new Error(errorMessage))
  })
}
