<template lang="html">
  <b-navbar toggleable="md" type="dark" class="nav">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">Todo List</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item  href="/">Home</b-nav-item>
        <b-nav-item  href="/about">About</b-nav-item>
        <b-nav-item v-if="showNav" href="/">Todo</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import hoodie from '../util/hoodie'

@Component({

})
export default class Nav extends Vue {
  showNav: boolean = false


  created() {
    hoodie.account.get().then((user) => {
      console.log(user)
      if (user.session) {
        this.showNav = true
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  @Watch('$route.path')
  pathChanged() {
    hoodie.account.get().then((user) => {
      if (user.session) {
        // user is signed in, show navbar
        this.showNav = true;
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="css">
  nav {
    background-color: #35495E;
  }
</style>
