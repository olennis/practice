<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="red"></div>
    <div class="red"></div>
    <div class="red"></div>
    <div class="red"></div>
    <div class="red"></div>
    <div class="red"></div>
    <div class="red"></div>
    <div class="red"></div>
    <div class="red"></div>
    <div class="red"></div>
    <div class="red"></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
.red {
  width: 200px;
  height: 200px;
  background: red;
}
</style>
