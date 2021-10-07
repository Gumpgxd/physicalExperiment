import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'
Vue.prototype.$massage = Message
import login from '../components/login.vue'
import test from '../components/test.vue'
import test1 from '../components/test1.vue'
import test2 from '../components/test2.vue'
import test3 from '../components/test3.vue'
import test4 from '../components/test4.vue'
import test5 from '../components/test5.vue'
import test6 from '../components/test6.vue'
import test7 from '../components/test7.vue'
import test9 from '../components/test9.vue'
import test8 from '../components/test8.vue'
import test10 from '../components/test10.vue'
import test11 from '../components/test11.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: 'login' },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  { path: '/test1', component: test1, name: 'test1' },
  { path: '/test2', component: test2, name: 'test2' },
  { path: '/test3', component: test3, name: 'test3' },
  { path: '/test4', component: test4, name: 'test4' },
  { path: '/test5', component: test5, name: 'test5' },
  { path: '/test6', component: test6, name: 'test6' },
  { path: '/test7', component: test7, name: 'test7' },
  { path: '/test9', component: test9, name: 'test9' },
  { path: '/test8', component: test8, name: 'test8' },
  { path: '/test10', component: test10, name: 'test10' },
  { path: '/test11', component: test11, name: 'test11' },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
