import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import RegisterAccount from '@/pages/RegisterAccount'
import RegisterAccountLogin from '@/pages/RegisterAccountLogin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'RegisterAccount',
      component: RegisterAccount
    },
    {
      path: '/register-login',
      name: 'RegisterAccountLogin',
      component: RegisterAccountLogin
    }
  ]
})
