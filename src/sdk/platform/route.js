/* eslint-disable no-param-reassign */
import { queryStrToObject } from '@/utils/index'
import { isJSON } from '@/utils/is'
// eslint-disable-next-line import/no-cycle
import $uni from './index'


export function getScene() {
  const { options } = getCurrentPages().pop()
  const queryStr = decodeURIComponent(options.scene || '')
  return queryStrToObject(queryStr)
}


/**
 * 获取页面参数
 * @return {Object} query对象
 */
 export function getQuery(jsonParse = true) {
  const { options = {} } = getCurrentPages().pop() || {}
  let queryData = {}
  if (options.scene) {
    queryData = getScene()
  } else {
    const keys = Object.keys(options)
    if (keys.length) {
      queryData = keys.reduce((pre, curr) => {
        const str = decodeURIComponent(options[curr])
        if (jsonParse && isJSON(str)) {
          pre[curr] = JSON.parse(str)
        } else {
          pre[curr] = str
        }
        return pre
      }, {})
    }
  }
  return queryData
}

export function dataToQuery(data = {}) {
  return Object.keys(data).reduce((pre, curr, index, arr) => {
    let value = data[curr]
    if (typeof value === 'object') {
      value = encodeURIComponent(JSON.stringify(value))
    }
    pre += `${pre ? '&' : ''}${curr}=${value}`
    return index === arr.length - 1 ? `?${pre}` : pre
  }, '')
}

export function navigateTo(path, data = {}, option = {}) {
  $uni.navigateTo({
    ...option,
    url: `${path}${dataToQuery(data)}`,
  })
}

export function switchTab(url, option = {}) {
  $uni.switchTab({
    ...option,
    url,
  })
}

export function redirectTo(path, data = {}, option = {}) {
  $uni.redirectTo({
    ...option,
    url: `${path}${dataToQuery(data)}`,
  })
}

export function reLaunch(path, data = {}, option = {}) {
  $uni.reLaunch({
    ...option,
    url: `${path}${dataToQuery(data)}`,
  })
}

export function navigateBack(delta, option = {}) {
  $uni.navigateBack({
    fail: () => {
      reLaunch('/pages/main/index/index')
    },
    delta,
    ...option,
  })
}

/**
 * 上一个页面
 */
export function getLastPage() {
  const pages = getCurrentPages()
  return pages[pages.length - 2] || {}
}

/**
 * 上一个页面
 */
export function getCurrentPage() {
  const pages = getCurrentPages()
  return pages[pages.length - 1] || {}
}
