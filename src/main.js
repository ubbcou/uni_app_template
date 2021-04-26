import Vue from 'vue'
import App from './App'
import platformInstall from './sdk/platform/install'

Vue.use(platformInstall)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
