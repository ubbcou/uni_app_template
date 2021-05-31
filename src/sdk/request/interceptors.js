import { isUrl } from '@/utils/is'
import { locToken } from '@/sdk/local'
import $uni from '@/sdk/platform'
import { groupLog } from '@/utils/dev-log.js'

/**
 * @TODO 
 *  - toast
 *  - loading <not suggest>
 */

const host = 'http://localhost:3000'
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
  // toast
  // loading
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
      const currentPage = $uni.getCurrentPage()
      $uni.navigate('/pages/main/login/login', {
        path: encodeURIComponent(`/${currentPage.route}${$uni.dataToQuery(currentPage.options)}`),
      })
    } else if (statusCode === 0) {
      customMessage = '无网络'
    }

    const errorMessage = customMessage || statusText || (typeof data === 'string' ? data : data && (data.msg || data.message)) || `请重试(${statusCode})`

    // 自定义 errLevel，用来错误提示
    if (config.errLevel === 1) {
      $uni.toast(errorMessage)
    } else if (config.errLevel === 2) {
      $uni.modal(errorMessage)
    }
    reject(new Error(errorMessage))
  })
}
