import Vue from 'vue'
import Router from 'vue-router'
import env from '@/utils/env'

const Layout = () => import('@/views/layout/index')

Vue.use(Router)

/**
 * 路由配置
 * name:'router-name'             路由名称 必填 不能与其他路由冲突
 * path:'router-path'             路由路径 必填 不能与其他路径冲突
 * hidden: true                   是否在侧边栏隐藏，默认不隐藏
 * redirect: noRedirect           重定向路由 一般在有会默认填写为子路由的第一个path

 * meta : {
    title: 'title'               侧栏显示的title名称
    icon: 'svg-name'             侧栏中显示的icon名称
    auth: true                   该页面权限标识
  }
 */

// 有权限路由
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/dashboard'),
        name: 'dashboard',
        meta: { title: '管理看板', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/role',
    meta: { title: '系统管理', icon: 'dashboard' },
    children: [
      {
        path: 'role',
        component: () => import('@/views/system/role/index'),
        name: 'role',
        meta: { title: '角色管理', icon: 'dashboard' }
      },
      {
        path: 'user',
        component: () => import('@/views/system/user/index'),
        name: 'user',
        meta: { title: '用户管理', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/resource',
    component: Layout,
    redirect: '/resource/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/resource/index'),
        name: 'Resource',
        meta: { title: '资源管理', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'dashboard' }
      }
    ]
  }
]
// 无权限路由
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/login')
  },
  {
    path: '*',
    redirect: '/'
  },
  ...asyncRoutes
]
const createRouter = () => new Router({
  mode: env.routerMode,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
