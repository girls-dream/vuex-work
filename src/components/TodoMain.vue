<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="item in todosList" :key="item.id">
      <div class="view" >
        <input class="toggle" type="checkbox" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      todosList: [],
    }
  },
  created() {
    this.todosList = this.$store.state.work.todosList
    console.log(this.$store.state.work.todosList)
  },
  methods: {
    del(id) {
      //删除任务
      // this.todosList.splice(this.todosList.findIndex(item => item.id=== 1), 1)
      this.todosList = this.todosList.filter((item) => {
        return item.id != id
      })
      // console.log(this.todosList);
    },
  },
}
</script>
