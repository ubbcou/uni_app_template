import Vue from 'vue'
import * as dayjs from 'dayjs'
import plugin from '@/plugin'
import App from './App'
import './global.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(plugin)
dayjs.locale('zh-cn')

App.mpType = 'app'

const app = new Vue({
  store,
  ...App,
})
app.$mount()
