export default {
  state: {
    todosList: [
      {
        name: '吃饭',
        done: false,
        id: 1,
      },
      {
        name: '睡觉',
        done: false,
        id: 2,
      },
      {
        name: '打豆豆',
        done: false,
        id: 3,
      },
    ],
  },
  getters: {},
  mutations: {
    addFn(state,payload) {
      let newTask = {
        name: payload,
        done: false,
        id:state.todosList[state.todosList.length-1].id+1
      }
      state.todosList.unshift(newTask)
    }
  },
  actions: {},
  modules: {},
}
