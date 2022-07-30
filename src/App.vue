<template>
  <div>
    <button @click="Peeling">换肤</button><br>
    <button @click='back'>恢复默认</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import {
  mapState,
  mapMutations,
  mapActions,
  mapGetters,
  createNamespacedHelpers,
} from 'vuex'
// const { mapMutations: mapMutationsTodos } = createNamespacedHelpers('todos')
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
  },

  created() {},

  methods: {
    // ...mapMutationsTodos(['changeColor']),
    ...mapMutations(['changeColor']),
    ...mapActions(['titleColor']),
    Peeling() {
      // ;`rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      //   Math.random() * 256
      // )},${Math.floor(Math.random() * 256)})`
      // this.$store.state.todos.color
      const rgb1 = Math.floor(Math.random() * 256)
      const rgb2 = Math.floor(Math.random() * 256)
      const rgb3 = Math.floor(Math.random() * 256)
      let color = `rgb(${rgb1},${rgb2},${rgb3})`
       this.$store.commit('changeColor', color)//1方法
      // console.log(color)
    },
    back(){
      this.$store.commit('changeColor', `rgb(184, 63, 69)`)
    }
  },
}
</script>

<style scoped></style>
