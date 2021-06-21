/**
 * @file
 * 微信小程序 - 导航方法
 */

/* eslint-disable no-param-reassign */
import { objectToQuery } from '@/utils/url'

export function navigate(path, data = {}, option = {}) {
  uni.navigateTo({
    ...option,
    url: `${path}?${objectToQuery(data)}`,
  })
}

export function switchTab(url, option = {}) {
  uni.switchTab({
    ...option,
    url,
  })
}

export function redirect(path, data = {}, option = {}) {
  uni.redirectTo({
    ...option,
    url: `${path}?${objectToQuery(data)}`,
  })
}

export function reLaunch(path, data = {}, option = {}) {
  uni.reLaunch({
    ...option,
    url: `${path}?${objectToQuery(data)}`,
  })
}

export function back(delta, option = {}) {
  uni.navigateBack({
    fail: () => {
      reLaunch('/pages/main/index/index')
    },
    delta,
    ...option,
  })
}

/**
 * 当前页面
 */
export function getCurrentPage() {
  const pages = getCurrentPages()
  return pages[pages.length - 1] || {}
}
