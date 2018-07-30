<template>
  <div class="container">
    <!-- <img  src="../assets/logo.png"> -->
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body mt-5 mb-5">
            <div class="card-title mb-5">
            <h2 class="date">{{ dmonth }} <h6>{{ month }} <br> {{ year }}</h6></h2><h6> {{ day }}</h6>
            </div>
              <draggable>
                <div class="things justify-content-between" v-for="todo in todos">
                  <div class="row">
                    <div class="col-lg-10 text-left">
                      {{todo.thing}}
                    </div>
                    <div class="col-lg-2 round">
                      <input type="checkbox" class="checkbox-round" value="1" v-model="todo.check">
                      <label for="checkbox"></label>
                    </div>
                  </div>
                </div>
              </draggable>
              <input type="checkbox" class="checkbox-button" value="+" v-model="showForm"></input>
            <div class="form" v-if="showForm">
              <div class="form-group">
                <label>What's needs to be done</label>
                <input class="form-control" type="text" v-model="todo.thing">
              </div>
                <button class="btn btn-primary" v-on:click="addTodo">Submit</button>
            </div>
            <!-- testv2 -->
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
      dmonth: moment().format('D'),
      month: moment().format('MMM'),
      year: moment().format('Y'),
      showForm: false,
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
