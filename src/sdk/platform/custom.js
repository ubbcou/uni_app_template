import {
  platform,
} from './env'
// eslint-disable-next-line import/no-cycle
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
// eslint-disable-next-line import/no-cycle
import authorize from './authorize'
import { toRpx, toPx } from './unit'

function showToast(title) {
  platform.showToast({
    title,
    icon: 'none',
  })
}
function showModal(option) {
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
class CustomApi {
  constructor() {
    this.navigate = navigateTo
    this.switch = switchTab
    this.redirect = redirectTo
    this.launch = reLaunch
    this.back = navigateBack
    this.authorize = authorize
    this.getLastPage = getLastPage
    this.getCurrentPage = getCurrentPage
    this.getQuery = getQuery
    this.getScene = getScene
    this.modal = showModal
    this.toRpx = toRpx
    this.toPx = toPx
    this.dataToQuery = dataToQuery
    this.toast = showToast
  }

  

}
const customApi = new CustomApi()
export default customApi 
