/**
 * 单位转换方法
 */
import {
  platform,
} from './env'

const systemInfo = platform.getSystemInfoSync()

export function toRpx(px) {
  const { screenWidth } = systemInfo
  return px / (screenWidth / 750)
}

export function toPx(rpx) {
  const { screenWidth } = systemInfo
  return rpx * (screenWidth / 750)
}
