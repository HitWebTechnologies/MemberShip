import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import RegisterAccount from '@/pages/RegisterAccount'
import RegisterAccountLogin from '@/pages/RegisterAccountLogin'

import Home from '@/pages/Home'
import Constitution from '@/pages/Constitution'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: '/constitution',
          name: 'Constitution',
          component: Constitution
        }
      ]
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
