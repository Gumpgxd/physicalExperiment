import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'./assets/all.css'
// 手动配置element ui
import ElementUI from 'element-ui'
import { Message } from 'element-ui'
Vue.prototype.$massage=Message
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://180.76.111.200/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('data')
  return config
})
// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    return next()
  }
  else if (!window.sessionStorage.getItem("student_id")) {
    Message.error('您还没有填写信息，请先填写信息')
    return next('/login')
  }
  next()
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')