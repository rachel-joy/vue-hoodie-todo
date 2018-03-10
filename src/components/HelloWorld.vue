<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-btn to="Signup" variant="secondary" type="signup">Signup</b-btn>
    <b-btn to="Login" variant="secondary" type="login">Login</b-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import hoodie from '../util/hoodie'

export interface UserCredentials {
  username: string
  password: string
}

@Component
export default class HelloWorld extends Vue {
    msg:string = 'Welcome to Your Vue.js App'
    credentials: UserCredentials = {username: '', password: ''}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
