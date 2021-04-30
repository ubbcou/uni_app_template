import { isUrl } from '@/utils/is'
// interceptors.js
const host = 'http://localhost:3000'

// 请求拦截
export function requestInter(config) {
  const { url } = config
  return {
    ...config,
    url: isUrl(url) ? url : `${host}${url}`,
    header: {
      ...config.header,
      Authorization: '',
    },
  }
}

export function responseInter(config, response) {
  const { statusCode, data } = response
  if (statusCode === 200) {
    return data
  } else {
    return Promise.reject(new Error('响应非200'))
  }
}
