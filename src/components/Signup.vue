<template lang="html">
  <b-container>
    <b-form @submit.prevent="submit()">
      <b-form-input type="text" name="username" v-model="credentials.username" placeholder="Username"></b-form-input>
      <b-form-input type="password" name="password" v-model="credentials.password" placeholder="Password"></b-form-input>
      <b-button type="submit" variant="secondary">Signup</b-button>
    </b-form>
    <b-btn @click="logout()" type="logout" variant="secondary">Logout</b-btn>
  </b-container>
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
export default class Signup extends Vue {
  credentials: UserCredentials = {username: '', password: ''}

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
    hoodie.account.signOut().then((result) => {
      console.log(result)
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
