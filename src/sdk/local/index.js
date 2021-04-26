import $uni from '@/sdk/platform'
import { DEFAULT_ENV } from '@/project.config'

class StorageItem {
  /**
   * @param {string} key     存储键名
   * @param {*} defaultValue 获取的默认值
   */
  constructor(key, defaultValue = null) {
    this.key = key
    this.defaultValue = defaultValue
  }

  get() {
    return $uni.getStorageSync(this.key) || this.defaultValue
  }

  set(value) {
    return $uni.setStorageSync(
      this.key,
      value,
    )
  }

  remove() {
    return $uni.removeStorageSync(this.key)
  }
}
const ENV = 'Env'

export const locEnv = new StorageItem(ENV, process.env.VUE_APP_HOST_ENV)
