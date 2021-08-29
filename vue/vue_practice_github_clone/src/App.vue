<template>
  <div id="app">
    <Header />
    <test-section></test-section>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TestSection from "./components/TestSection.vue";
export default {
  name: "App",
  components: {
    Header,
    TestSection,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.wrap_modal {
  background-color: #707070;
  position: absolute;
  z-index: 1;
  right: 50px;
  top: 0;
}
</style>
