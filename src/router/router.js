import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      hidden: true,
      leaf: false
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true,
      leaf: false
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      hidden: true,
      leaf: false
    }

  ]
})
