<template>
  <div id="app">
    <router-link :to="{ name: 'Actions'}"><button>actions</button></router-link>
    <router-link :to="{ name: 'Responses'}"><button>responses</button></router-link>
    <router-link :to="{ name: 'CombinationRequired'}"><button>combination required</button></router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
