import {
  platform,
} from './env'
import {
  navigateTo,
  switchTab,
  redirectTo,
  reLaunch,
  navigateBack,
  getLastPage,
  getCurrentPage,
  getQuery,
  getScene,
  dataToQuery,
} from './route'
import authorize from './authorize'
import { toRpx, toPx } from './unit'

export default new (class CustomApi {
  tShowModal(option) {
    return new Promise((resolve, reject) => {
      platform.showModal({
        confirmColor: '#F28100',
        ...option,
        success: ({
          confirm,
        }) => {
          if (confirm) {
            resolve()
          } else {
            reject(new Error('拒绝'))
          }
        },
        fail: err => {
          reject(new Error(err.errMsg))
        },
      })
    })
  }

  tShowToast(title) {
    platform.showToast({
      title,
      icon: 'none',
    })
  }

  navigate = navigateTo
  switch = switchTab
  redirect = redirectTo
  launch = reLaunch
  back = navigateBack
  authorize = authorize
  getLastPage = getLastPage
  getCurrentPage = getCurrentPage
  getQuery = getQuery
  getScene = getScene
  toRpx = toRpx
  toPx = toPx
  dataToQuery = dataToQuery
})()
