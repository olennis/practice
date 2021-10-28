<template>
  <div class="hello">
    <header><button @click="sideMenuHandler">header</button></header>
    <div class="sideMenu" :class="{ sideMenuOpen: isSideMenuOpen }">
      <button @click="sideMenuHandler">close</button>
      <h2>page</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isSideMenuOpen: false,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    sideMenuHandler() {
      this.isSideMenuOpen = !this.isSideMenuOpen;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
header {
  background: red;
  overflow: hidden;
}
header button {
  float: left;
}
.sideMenu {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 154, 200);
  overflow-x: hidden;
  transition: 0.5s ease-in-out;
}
.sideMenu button {
  float: left;
}
.sideMenuOpen {
  width: 80%;
}
</style>
