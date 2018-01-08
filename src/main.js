// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import '@/styles/reset.js'
import '@/styles/index.less'
import router from './router'
import { Swipe, SwipeItem, Indicator, Lazyload, MessageBox } from 'mint-ui'

import store from './store'
import axios from 'axios'
import fastclick from 'fastclick'
Vue.prototype.$http = axios
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.prototype.loading = Indicator
Vue.prototype.$msg = MessageBox
Vue.use(Lazyload)

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
