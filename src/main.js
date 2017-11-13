// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
// elementui 国际化
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale/'

// page
import App from './App'

// 路由配置文件
import router from './router/router'

// 引用注入
Vue.use(VueRouter)
Vue.use(VueResource)
// elementui语言设置
locale.use(lang)
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
