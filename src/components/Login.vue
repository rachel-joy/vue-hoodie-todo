<template lang="html">
  <b-container id="login" class="content center-text">
    <div v-if="user">
      <p>Hello, {{ user.username }}. You are logged in.</p>
      <b-btn @click="logout()" type="logout" variant="secondary">Logout</b-btn>
    </div>
    <b-card v-else title="Log In">
      <b-form-group @submit.prevent="submit()"
                    description="Please log in with your user name and password.">
        <b-form-input type="text" name="username" v-model="credentials.username" placeholder="Username"></b-form-input>
        <br>
        <b-form-input type="password" name="password" v-model="credentials.password" placeholder="Password"></b-form-input>
        <br>
        <b-button type="submit" variant="secondary">Login</b-button>
      </b-form-group>
      <p>New to this website? <a href="/signup">Sign up here.</a></p>
    </b-card>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import hoodie from '../util/hoodie'
import { User } from '../util/user'

export interface UserCredentials {
  username: string
  password: string
}

@Component
export default class Login extends Vue {
  credentials: UserCredentials = {username: '', password: ''}
  user : User | null = null

  created() {
    hoodie.account.get().then((user) => {
      if (user.session) {
        this.user = user
      } else {
        this.user = null
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  submit() {
    this.login(this.credentials)
  }

  login(credentials: UserCredentials) {
    hoodie.account.signIn(credentials).then(() => {
      return hoodie.account.get()
    }).then((result) => {
      console.log(result)
      this.$router.push('/todo')
    }).catch((err) => {
      console.log(err)
    })
  }

  logout() {
    hoodie.account.signOut().then(() => {
      this.user = null
      this.$router.push('/')
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="css">
</style>
