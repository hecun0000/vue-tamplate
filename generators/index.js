const componentGenerrator = require('./component/index.js')
const viewGenerrator = require('./view/index.js')
const storeGenerrator = require('./store/index.js')
const apiGenerrator = require('./api/index.js')

module.exports = plop => {
  plop.setGenerator('component', componentGenerrator)
  plop.setGenerator('views', viewGenerrator)
  plop.setGenerator('vuex', storeGenerrator)
  plop.setGenerator('api', apiGenerrator)
}
