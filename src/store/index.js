import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import work from './modules/work'
import createVuexPersisted from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todos,
    work,
  },
  plugins: [
    createVuexPersisted({
      reducer(state) {
        return {
          todos: state.todos,
        }
      },
    }),
  ],
})
