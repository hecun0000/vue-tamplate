import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
const layout = _import('layout/index')

Vue.use(Router)

const constantRouterMap = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: _import('home')
  // },
  {
    path: '/about',
    name: 'about',
    component: _import('about')
  },
  {
    path: '/dashboard',
    component: layout,
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: _import('dashboard/dashboard')
      }

    ]
  },
  {
    path: '/',
    name: 'login',
    component: _import('login/login')
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default new Router({
  routes: constantRouterMap,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
