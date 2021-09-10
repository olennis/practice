<template>
  <div id="app">
    <section>
      <ul class="list_test">
        <li class="red"></li>
        <li class="blue"></li>
        <li class="green"></li>
        <li class="yellow"></li>
        <li class="pink"></li>
        <li class="black"></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      popup: false,
    };
  },
  components: {},
  methods: {
    isOpen: function() {
      this.popup = !this.popup;
    },
  },
};
</script>

<style>
#app {
  position: relative;
}
section {
  max-width: 1400px;
  margin: 0 auto;
  background-color: #909090;
}
.list_test {
  overflow: hidden;
}
.list_test li {
  list-style: none;
  float: left;
  width: 400px;
  height: 300px;
  margin: 20px;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.yellow {
  background-color: yellow;
}
.green {
  background-color: green;
}
.black {
  background-color: black;
}

.pink {
  background-color: pink;
}
</style>
