<template>
  <div class="content center-text">
    <h1>{{ msg }}</h1>
    <h3>Typescript + Vue + Hoodie</h3>
    <br>
    <div v-if="user">
      <p>Welcome, {{ user.username }}! You are currently signed in.</p>
      <b-btn @click.prevent="logout()" variant="secondary">Logout</b-btn>
    </div>
    <div v-else>
      <b-btn to="Signup" variant="secondary" type="signup">Signup</b-btn>
      <b-btn to="Login" variant="secondary" type="login">Login</b-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import hoodie from '../util/hoodie'
import {User} from '../util/user'


@Component
export default class HelloWorld extends Vue {
    msg:string = 'Todo List'
    user: User | null = null

  created() {
    hoodie.account.get().then((user) => {
      if (user.session) {
        this.user = user
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  logout() {
    hoodie.account.signOut().then((result) => {
      console.log(result)
      this.user = null
    }).catch((err) => {
      console.log(err)
    })
  }

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
