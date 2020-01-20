<template>
  <div id="app">
    <img src="./assets/smallappimg.jpg" />

    <div>
      <child message="child te"></child>
      <router-link to="/t1">t1</router-link>
      <router-link to="/t2">t2</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
