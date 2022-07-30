<template>
  <header class="header">
    <h1 :style="{ color: $store.state.todos.color }">
      {{ $store.state.todos.title }}
    </h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="enter"
      ref="input"
    />
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      color: '',
    }
  },
  created() {
    // console.log(this.$store.state.todos.color)
    // this.color=this.$store.state.todos.color
  },
  methods: {
    ...mapMutations(['addFn']),
    enter() {
      this.addFn(this.$refs.input.value)
    },
  },
  computed: {
    // ...mapState(['color']),
  },
}
</script>
<style lang="less" scopedS></style>
