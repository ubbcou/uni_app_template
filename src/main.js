import Vue from 'vue'
import * as dayjs from 'dayjs'
import plugin from '@/plugin'
import App from './App'
import './global.css'

Vue.config.productionTip = false
Vue.use(plugin)
dayjs.locale('zh-cn')

App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
