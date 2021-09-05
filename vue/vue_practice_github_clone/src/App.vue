<template>
  <div id="app">
    <Header />
    <nav class="nav_subnav">
      <ul class="list_subnav">
        <li>overview</li>
        <li>repositories</li>
        <li>projects</li>
        <li>packages</li>
      </ul>
    </nav>
    <div class="side_nav">side nav</div>
    <div>
      <div>content1</div>
      <div>content2</div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
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
.nav_subnav {
  margin-left: 625px;
  overflow: hidden;
}
.list_subnav {
  overflow: hidden;
}
.list_subnav li {
  float: left;
  margin-left: 30px;
}
.side_nav {
}
</style>
