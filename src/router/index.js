import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import RegisterAccount from '@/pages/RegisterAccount'
import SuccessfullyRegistered from '@/pages/SuccessfullyRegistered'
import RegisterAccountLogin from '@/pages/RegisterAccountLogin'
import Login from '@/pages/Login'

import Home from '@/pages/Home'
import ClubMembers from '@/pages/ClubMembers'
import Constitution from '@/pages/Constitution'

import store from '@/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter (to, from, next) {
        if (store.getters.isUserAuthenticated) {
          next()
        } else {
          next('/login')
        }
      },
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: '/members',
          name: 'ClubMembers',
          component: ClubMembers
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
      path: '/success',
      name: 'SuccessfullyRegistered',
      component: SuccessfullyRegistered
    },
    
    {
      path: '/register-login',
      name: 'RegisterAccountLogin',
      component: RegisterAccountLogin
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    
  ]
})
