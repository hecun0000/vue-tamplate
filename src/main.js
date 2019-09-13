import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import filters from './filters'
import './control'
import './components'
import './assets/icons'
import './plugins/element'
import './styles/index.scss' // global css

// 开发环境添加mock数据
if (process.env.NODE_ENV !== 'production') {
  require('../mock')
}

Vue.config.productionTip = false

// 将 filter/index.导出的函数添加为全局过滤器
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
