import $uni from '@/sdk/platform'
import { responseInter, requestInter } from './interceptors'

/**
http.get(
  '/api/test',
  { id: 1 },
  { timeout: 100000 }
)
 */

class Http {
  get(url, data, config) {
    return this.request(this.combineConfig(url, 'GET', data, config))
  }

  post(url, data, config) {
    return this.request(this.combineConfig(url, 'POST', data, config))
  }

  put(url, data, config) {
    return this.request(this.combineConfig(url, 'PUT', data, config))
  }

  delete(url, data, config) {
    return this.request(this.combineConfig(url, 'DELETE', data, config))
  }

  // 处理 config
  combineConfig(url, method, data, config = {}) {
    const {
      timeout = 30000,
      header,
    } = config
    const result = {
      url,
      method,
      timeout,
      data,
      header,
    }
    return result
  }

  async request(config) {
    const currentConfig = await requestInter(config)
    const response = await this.base(currentConfig)
    return responseInter(config, response)
  }

  base(config) {
    const {
      url,
      method,
      header,
      data,
      timeout,
    } = config
    return new Promise((resolve, reject) => {
      $uni.request({
        url,
        header,
        method,
        data,
        timeout,
        success: res => {
          console.group('HTTP 请求详情')
          console.log('{{{')
          console.log('  HTTP URL', url)
          console.log('  HTTP 参数', config.data)
          console.log('  HTTP 返回数据', res)
          console.log('}}}')
          console.groupEnd()
          resolve(res)
        },
        fail: (err) => {
          console.group('HTTP 请求详情')
          console.log('{{{')
          console.log('  HTTP URL', url)
          console.log('  HTTP 参数', config.data)
          console.log('  HTTP 失败', err)
          console.log('}}}')
          console.groupEnd()
          reject(new Error(`客户端错误(${err.errMsg})`))
        },
      })
    })
  }
}
export default new Http()
