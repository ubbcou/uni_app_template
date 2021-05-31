import $uni from '@/sdk/platform'
import { responseInter, requestInter } from './interceptors'

// http.get(
//   '/api/test',
//   { id: 1 },
//   { timeout: 100000 }
// )


/**
 * @typedef Config
 * @property {number} timeout
 * @property {object} header
 */
export default {
  /**
   * get 请求
   * @param {string} url, eg: https://www.api.com/api/getUserInfo or /api/getUserInfo
   * @param {object} data 
   * @param {number} config.timeout
   * @param {object} config.header
   * @param {any} config[someKey]
   * @returns {Promise<{ statusCode: number; data: any }>}
   */
  get(url, data, config) {
    return requestMiddle(combineConfig(url, 'GET', data, config))
  },
  
  /**
   * post 请求
   * @param {string} url, eg: https://www.api.com/api/getUserInfo or /api/getUserInfo
   * @param {object} data 
   * @param {number} config.timeout
   * @param {object} config.header
   * @param {any} config[someKey]
   * @returns {Promise<{ statusCode: number; data: any }>}
   */
  post(url, data, config) {
    return requestMiddle(combineConfig(url, 'POST', data, config))
  },
  
  /**
   * put 请求
   * @param {string} url, eg: https://www.api.com/api/getUserInfo or /api/getUserInfo
   * @param {object} data 
   * @param {number} config.timeout
   * @param {object} config.header
   * @param {any} config[someKey]
   * @returns {Promise<{ statusCode: number; data: any }>}
   */
  put(url, data, config) {
    return requestMiddle(combineConfig(url, 'PUT', data, config))
  },
  
  /**
   * delete 请求
   * @param {string} url, eg: https://www.api.com/api/getUserInfo or /api/getUserInfo
   * @param {object} data 
   * @param {number} config.timeout
   * @param {object} config.header
   * @param {any} config[someKey]
   * @returns {Promise<{ statusCode: number; data: any }>}
   */
  delete(url, data, config) {
    return requestMiddle(combineConfig(url, 'DELETE', data, config))
  },
}

/**
 * 
 * @param {*} config 
 * @returns {Promise<{ statusCode: number; data: any }>}
 */
function base(config) {
  const {
    url,
    method,
    header,
    data,
    timeout,
  } = config
  return new Promise((resolve) => {
    $uni.request({
      url,
      header,
      method,
      data,
      timeout,
      success: res => {
        resolve({
          ...res,
        })
      },
      fail: (err) => {
        resolve({
          statusCode: 0,
          data: '',
          statusText: err.errMsg,
        })
      },
    })
  })
}

function combineConfig(url, method, data, config = {}) {
  const {
    timeout = 30000,
    header,
    ...rest
  } = config
  const result = {
    ...rest,
    url,
    data,
    header,
    method,
    timeout,
  }
  return result
}

/** 请求中间件
 * @param {object} config
 * @param {string} config
 */
async function requestMiddle(config) {
  const currentConfig = await requestInter(config)
  const response = await base(currentConfig)
  return responseInter(currentConfig, response)
}

