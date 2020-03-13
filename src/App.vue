<template>
  <div id="app">
    <b>actions:</b>
    <div v-for="data in myJson.actions">
      {{data.method}} {{data.path.path}}
    </div>

    <b>tests:</b>
    <div v-for="data in myJson.tests">
      {{data}}
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import json from '/Users/dima/pet_projects/open_source/report.json'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      myJson: json
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
