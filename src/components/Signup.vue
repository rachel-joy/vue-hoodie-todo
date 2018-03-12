<template lang="html">
  <b-container class="content center-text">
    <div v-if="user">
      <p>Hello, {{ user.username }}. You are signed in.</p>
      <b-btn @click="logout()" type="logout" variant="secondary">Logout</b-btn>
    </div>
    <b-form v-else @submit.prevent="submit()">
      <b-form-input type="text" name="username" v-model="credentials.username" placeholder="Username"></b-form-input>
      <b-form-input type="password" name="password" v-model="credentials.password" placeholder="Password"></b-form-input>
      <br>
      <b-button type="submit" variant="secondary">Signup</b-button>
    </b-form>
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
export default class Signup extends Vue {
  credentials: UserCredentials = {username: '', password: ''}
  user: User | null = null

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

  login(credentials: UserCredentials) {
    hoodie.account.signIn(credentials).then(() => {
      return hoodie.account.get()
    }).then((user) => {
      if (user) {
        this.user = user
        this.$router.push('/todo')
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

  submit() {
    this.createAccount(this.credentials)
  }

  createAccount(credentials: UserCredentials) {
    hoodie.account.signUp(credentials).then(() => {
      return this.login(credentials)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="css">
</style>
