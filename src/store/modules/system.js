export default {
  namespaced: true,
  state: {
    systemInfo: uni.getSystemInfoSync(),
  },
  getters: {
    SAFE_BOTTOM_HEIGHT: (state) => {
      const {
        screenHeight,
        safeArea: { height, top },
      } = state.systemInfo
      return (screenHeight - height - top) / 2
    },
    STATUS_BAR_HEIGHT: state => state.systemInfo.statusBarHeight,
    SCREEN_HEIGHT: state => state.systemInfo.screenHeight,
    SCREEN_WIDTH: state => state.systemInfo.screenWidth,
  },
  actions: {},
  mutations: {},
}
