<template lang="html">
  <b-container>
    <b-row id="todo" class="content">
      <b-col lg="6" offset-lg="3" md="8" offset-md="2" sm="12">
        <b-input-group>
          <b-form-input v-model="todo.title" @keydown.enter.native="createTodo()" placeholder="What's on your list to do?"></b-form-input>
          <b-input-group-append>
            <b-btn v-model="todo.title" @click="createTodo()" variant="info" type="submit">Add Todo</b-btn>
          </b-input-group-append>
        </b-input-group>
        <br>
         <b-list-group>
           <b-list-group-item v-for="todo in todos" :key="todo.id">
             <b-form-checkbox v-model="todo.completed" @change="checkboxToggle(todo)" class="checkbox-center"></b-form-checkbox>
             {{ todo.title }}
             <b-btn @click="deleteTodo(todo)" class="float-right" size="sm" variant="outline-danger">Delete</b-btn>
           </b-list-group-item>
         </b-list-group>
     </b-col>
  </b-row>
</b-container>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import hoodie from '../util/hoodie'

export interface Todo {
  title: string
  completed: boolean
}

@Component
export default class TodoComponent extends Vue {
  protected hoodie = hoodie;
  protected store = hoodie.store.withIdPrefix('todo');
  todo: Todo = {title: '', completed: false};
  todos: Todo[] = [];

  createTodo() {
    const title = this.todo.title.trim();
    this.store.add({
      title,
      completed: false,
    }).then((response) => {
      this.fetchTodos();
    })
    this.todo.title = ''
  }

  fetchTodos() {
    console.log('loading items')
    this.store.findAll().then((todos) => {
      console.log(todos)
      this.todos = todos
    }).catch((err) => {
      this.hoodie.log(err)
    })
  }

  deleteTodo(todo) {
    this.store.remove(todo).then((response) => {
      console.log(response);
      this.fetchTodos();
    })
  }

  checkboxToggle(todo) {
    const id = todo._id
    const completed = !this.todo.completed
    this.store.update(id, {
      completed: completed
    })
    console.log(todo)
  }
  created() {
    this.fetchTodos();
  }

}
</script>

<style lang="scss">
</style>
