/* eslint-disable no-console */
export const groupLog = (name, args = []) => {
  if (globalThis.navigator && (globalThis.navigator.platform.includes('Win') || globalThis.navigator.platform.includes('Mac'))) {
    try {
      console.groupCollapsed(`${name}\n`)
      args.forEach((item) => {
        console.log(item)
      })
      console.groupEnd()
    } catch (e) {
      console.warn(e)
    }
  } else {
    try {
      console.warn(`${name}\n`)
      args.forEach((item) => {
        console.info(item)
      })
    } catch (e) {
      console.warn(e)
    }
  }
}
