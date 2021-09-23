<template>
  <div id="app">
    <Header />
    <nav class="nav_subnav">
      <ul class="list_subnav">
        <li
          v-for="(title, idx) in titles"
          :key="idx"
          :class="{ active: idx === current }"
          @click="changeCurrent(idx)"
        >
          <a>{{ title.title }}</a>
        </li>
      </ul>
    </nav>
    <side-nav></side-nav>
    <div>
      <pin></pin>
      <div>content2</div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SideNav from "./components/sideNav.vue";
import Pin from "./components/Pin.vue";
export default {
  name: "App",
  data() {
    return {
      current: 0,
      titles: [
        { title: "overview" },
        { title: "repositories" },
        { title: "projects" },
        { title: "packages" },
      ],
    };
  },
  components: {
    Header,
    SideNav,
    Pin,
  },
  methods: {
    changeCurrent(idx) {
      this.current = idx;
    },
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
.list_subnav li a {
  cursor: pointer;
}
.list_subnav .active {
  border-bottom: 1px solid red;
}
</style>
