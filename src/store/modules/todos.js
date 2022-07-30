
export default {
  state: {
    title: 'todos',
    color: `rgb(184, 63, 69)`,
  },
  getters: {},
  mutations: {
    changeColor(state, payload) {
      state.color = payload
    },
  },
  actions: {
    titleColor({commit},val) {
      commit('changeColor',val)
    }
  },
  modules: {},
  
}
