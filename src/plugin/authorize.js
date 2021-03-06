/**
 * @file
 * 微信小程序 - 授权校验
 */
import pkg from '~/package.json'

const PROJECT_NAME = pkg.name

const scopeInfo = {
  userLocation: {
    describe: '地理位置',
    tips: '获取您的地理位置',
  },
  address: {
    describe: '通讯地址',
    tips: '获取您的通讯地址',
  },
  invoiceTitle: {
    describe: '发票抬头',
    tips: '获取您的发票抬头',
  },
  invoice: {
    describe: '发票信息',
    tips: '获取您的发票信息',
  },
  werun: {
    describe: '微信运动步数',
    tips: '获取您的微信运动步数',
  },
  record: {
    describe: '录音功能',
    tips: '使用录音功能',
  },
  writePhotosAlbum: {
    describe: '保存到相册',
    tips: '访问您的相册',
  },
  camera: {
    describe: '摄像头',
    tips: '使用摄像头',
  },
  userInfo: {
    describe: '用户信息',
    tips: '使用微信用户信息',
  },
}

/**
 * 求授权，首次申请拒绝后，将会引导用户进入设置页
 * @param {String} scopeType userLocation | address | invoiceTitle | invoice | werun | record | writePhotosAlbum | camera | userInfo
 * @param {Boolean} config.isModal default true。是否使用modal引导去setting
 * @returns Promise.resolve(Boolean)
*/
export async function authorize(scopeType, config = { isModal: true }) {
  const [, userSetting] = await uni.getSetting()
  if (userSetting.authSetting[`scope.${scopeType}`]) {
    return true
  }

  try {
    const [err] = await uni.authorize({ scope: `scope.${scopeType}` })
    if (err) {
      throw new Error(err.errMsg)
    } else {
      return true
    }
  } catch (err) {
    if (config.isModal) {
      const [, action] = await uni.showModal({
        title: '提示',
        confirmColor: '#000',
        content: `${PROJECT_NAME}申请 \n「${scopeInfo[scopeType].tips}」`,
      })
      if (action.confirm) {
        // eslint-disable-next-line no-shadow
        const [, userSetting] = await uni.openSetting()
        if (userSetting.authSetting[`scope.${scopeType}`]) {
          return true
        }
      }
      throw new Error(false)
    } else {
      throw new Error(false)
    }
  }
}
