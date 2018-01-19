// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// elementui 国际化
// import lang from 'element-ui/lib/locale/lang/en'
// import locale from 'element-ui/lib/locale/'

// page
import App from './App'

// 路由配置文件
import routes from './router/routes'

// 全局组件
import zTable from './components/assembly/zTable'
import zSearchButton from './components/assembly/zSearchButton'

// 注册全局组件
Vue.component(zTable.name, zTable)
Vue.component(zSearchButton.name, zSearchButton)

// 引用注入
Vue.use(VueRouter)
Vue.use(VueResource)
// elementui语言设置
// locale.use(lang)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.config.debug = true

const router = new VueRouter({routes})
/* eslint-disable no-new */
const VueComponent = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

window.vue = VueComponent
