<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './TodoList'

export default {
  name: 'app',
  components: {
    TodoList,
  }
}
</script>

<style lang="css">

</style>
