<template lang="html">
  <b-container>
      <b-card class="content" title="About"
              sub-title="">
          <p class="card-text">
              This simple todo app is built with Vue.js, Hoodie, Typescript and Bootstrap-Vue.
          </p>
          <p>View the code on github <a href="https://github.com/rachel-joy/Typescript-Vue-Hoodie-Todo">here</a>.</p>
          <!-- <p class="card-text">User authentication is coming soon!</p> -->
          <a href="https://vuejs.org/"
             class="card-link">Vue.js</a>
          <b-link href="http://docs.hood.ie/en/latest/welcome.html"
                  class="card-link">Hoodie</b-link>
          <b-link href="https://github.com/Microsoft/TypeScript-Vue-Starter"
                  class="card-link">Typescript-Vue</b-link>
          <!-- </br> -->
          <b-link href="https://github.com/hoodiehq/hoodie-client#constructor"
                  class="card-link">Hoodie-Client</b-link>
          <b-link href="https://bootstrap-vue.js.org/"
                  class="card-link">Bootstrap-Vue</b-link>
      </b-card>
    </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import hoodie from '../util/hoodie'

@Component({})

export default class About extends Vue {
}
</script>

<style lang="css">
</style>
