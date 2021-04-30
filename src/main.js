import Vue from 'vue'
import App from './App'
import platformInstall from './sdk/platform/install'
import './global.css'

Vue.use(platformInstall)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
