<template>
  <div class="container">
    <img  src="../assets/logo.png">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <p>{{ date }}&nbsp;{{ day }}</p>
              <draggable>
                <div class="" v-for="todo in todos">
                  <p>{{todo.thing}}
                    <input type="checkbox" v-model="todo.check">
                  </p>
                </div>
              </draggable>
            <div class="form">
              <div class="form-group">
                <label>What's needs to be done</label>
                <input class="form-control" type="text" v-model="todo.thing">
              </div>
            </div>
            <button class="btn btn-primary" v-on:click="addTodo">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import moment from 'moment'
import draggable from 'vuedraggable'

export default {
  name: 'todo-list',
  data () {
    return {
      title: 'ToDo',
      todo: {
        thing: '',
        check: false
      },
      day: moment().format('dddd'),
      date: moment().format('ll'),
      todos: [
        {
          thing: 'Buy new sweatshirt',
          check: true
        },
        {
          thing: 'Begin promotional phase',
          check: true
        },
        {
          thing: 'Go for a walk',
          check: false
        },
        {
          thing: 'Read an article',
          check: false
        },
        {
          thing: 'Try not to fall asleep',
          check: false
        },
        {
          thing: 'Watch "Sherlock"',
          check: false
        }
      ]
    }
  },
  methods: {
    addTodo() {
      let { thing, check } = this.todo
      this.todos.push({
        thing,
        check
      })
    },
  },
  components: {
    draggable,
  }


}
</script>

<style lang="css">

</style>
