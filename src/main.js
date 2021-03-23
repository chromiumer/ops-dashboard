// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
import ElementUI from 'element-ui'

// 导入全局样式
import './assets/css/global.css'
import './assets/fonts/iconfont.css'

import axios from 'axios'

// api根路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'

// axios 请求拦截
axios.interceptors.request.use(config => {
  // console.log(config)
  // 为请求对象添加Token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 最后必须return config
  return config
})
Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
