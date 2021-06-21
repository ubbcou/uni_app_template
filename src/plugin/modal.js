/**
 * 
 * @param {string | object} content content类型为object时，将等同于option
 * @param {object} option 
 * @returns Promise.resolve(Boolean)
 */
export function modal(content, option) {
  const ctn = typeof content === 'string' ? content : ''
  const opt = typeof content === 'string' ? option : {}

  return new Promise((resolve) => {
    uni.showModal({
      confirmColor: '#000',
      showCancel: false,
      content: ctn,
      ...opt,
      success: ({
        confirm,
      }) => {
        if (confirm) {
          resolve(true)
        } else {
          resolve(false)
        }
      },
      fail: () => {
        resolve(false)
      },
    })
  })
}
