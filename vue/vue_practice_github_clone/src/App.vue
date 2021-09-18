<template>
  <div id="app">
    <Header />
    <nav class="nav_subnav">
      <ul class="list_subnav">
        <li class="active"><a>overview</a></li>
        <li><a>repositories</a></li>
        <li><a>projects</a></li>
        <li><a>packages</a></li>
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
  border-bottom: 1px solid #909090;
  padding-top: 30px;
}
.list_subnav {
  text-align: center;
  max-width: 1440px;
  margin: 0 auto;
}
.list_subnav li {
  display: inline-block;
  margin-left: 30px;
  height: 30px;
}
.list_subnav .active {
  border-bottom: 1px solid red;
}
</style>
