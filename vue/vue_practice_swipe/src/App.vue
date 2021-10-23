<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <vanilla></vanilla>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Vanilla from "./components/Vanilla.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Vanilla,
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
  margin-top: 60px;
}
</style>
