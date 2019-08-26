export default {
  namespaced: true,
  state: {
    sidebarCollapse: false
  },
  mutations: {
    SET_SIDEBAR_COLLAPSE (state) {
      state.sidebarCollapse = !state.sidebarCollapse
    }
  },
  actions: {

  }
}
