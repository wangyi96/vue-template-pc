import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

//字体图标引入
import './assets/fonts/iconfont.css';

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

//公共方法utils
import methods from './utils/methods'
Vue.prototype.$methods = methods;
//接口调用
import api from "./api/index"
Vue.prototype.$api = api;
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, form, next) => {
  let sessionToken = methods.getSessionStorage('store') ? JSON.parse(methods.getSessionStorage('store')).user.token : ''
  let token = store.state.user.token || sessionToken
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) { // 判断当前的token是否存在
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
