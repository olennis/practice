<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div v-show="first">
      <input type="number" v-model="spending" placeholder="하루 소비" />
      <button v-on:click="changeStatus">next</button>
    </div>
    <div v-show="second">
      <input type="number" v-model="goal" placeholder="한 달 목표" />
      <button v-on:click="changeStatus">
        next
      </button>
    </div>
    <div v-show="last">라스트팡!</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      spending: "",
      goal: "",
      first: true,
      second: false,
      last: false,
    };
  },
  methods: {
    changeStatus() {
      this.first = false;
      this.second = !this.second;
      if (!this.first && !this.second) this.last = true;
    },
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
  max-width: 1440px;
  height: 1320px;
  margin: 0 auto;
  background-color: #808080;
}
img {
  display: block;
  width: 200px;
  margin: 10px auto;
}
input {
  width: 500px;
  margin: 100px auto;
  border: none;
  background-color: #2c3e50;
  color: white;
  height: 50px;
  font-size: 40px;
  border-radius: 10px;
  text-align: center;
}
</style>
