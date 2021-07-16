<template>
  <div id="app">
    <h1>vue_practice</h1>
    <input type="text" />
    <button @click="isOpen">click me!</button>
    <div v-show="popup" class="wrap_popup">
      <div>popup</div>
      <div>hello</div>
    </div>
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
.wrap_popup {
  position: absolute;
  background-color: #808080;
  width: 100px;
  height: 200px;
  color: #fff;
  left: 200px;
  top: 80px;
}
</style>
