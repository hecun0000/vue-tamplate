import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { user, app } from './modules'

Vue.use(Vuex)

const types = {
  'SET_USER_INFO': 'SET_USER_INFO',
  'SET_RANK': 'SET_RANK'
}

const state = {
  groups: [1]
}

const mutations = {
  [types.SET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}
const actions = {
  changeUserInfo ({ commit }, info) {
    let userInfo = `this is ${info}`
    commit(types.SET_USER_INFO, userInfo)
  }
}

export default new Vuex.Store({
  modules: {
    user,
    app
  },
  state,
  actions,
  mutations,
  getters
})
