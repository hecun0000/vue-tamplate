/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 */

const dev = {
  baseUrl: '/api',
  routerMode: 'hash'
}

const prod = {
  ...dev
}

export default process.env.NODE_ENV === 'development' ? dev : prod
