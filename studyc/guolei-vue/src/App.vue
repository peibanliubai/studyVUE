<template>
  <div id="app">
<Tab></Tab>
    <router-view/>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue'
export default {
  name: 'app',
  components:{Tab}
}
</script>

<style>
  *{margin: 0;padding: 0;}
  ul,li{
    list-style: none;}
  a{text-decoration: none;}
  input,button{-webkit-appearance: none}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
