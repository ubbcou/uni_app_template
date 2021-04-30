import { isUrl } from '@/utils/is'
import { locToken } from '@/sdk/local'
import $uni from '@/sdk/platform'
const host = 'http://localhost:3000'
/**
 * 请求拦截
 *   √ 通常函数
 *   √ Promise
 */
export function requestInter(config) {
  const { url } = config
  return {
    ...config,
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
*/
export function responseInter(config, response) {
  return new Promise((resolve, reject) => {
    const { statusCode, data } = response
    // http status code
    if (statusCode === 200) {
      return data
    } else if (statusCode === 401) {
      const currentPage = $uni.getCurrentPage()
      $uni.navigate('/pages/main/login/login', {
        path: encodeURIComponent(`/${currentPage.route}${$uni.dataToQuery(currentPage.options)}`),
      })
    } else {
      return Promise.reject(new Error(`错误码：${response.statusCode}`))
    }
  })
}
