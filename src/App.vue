<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  body {
    background-color: #2b2b2b;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #bababa;
    margin-top: 60px;
  }
  .accordion-item{
    position: relative;
  }
  .accordion-item-head{
    background-color: #424242;
    border-top-left-radius: 5px ;
    border-top-right-radius: 5px;
    cursor: pointer;
    padding:10px;
  }
  .accordion-item-head:after{
    content: ' > ';
    display: block;
    height: 29px;
    position: absolute;
    right: 25px;
    transform: rotate(90deg) scaleY(2);
    top: 8px;
  }
  .accordion-item-head.active:after{
    content: ' < ';
  }
  .accordion-item-body{
    display: none;
  }
  .accordion-item-head.active + .accordion-item-body{
    display: block !important;
  }
</style>