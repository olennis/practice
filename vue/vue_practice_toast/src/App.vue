<template>
  <div id="app">
    <transition name="toast">
      <Toast v-if="showToast" class="toast"></Toast>
    </transition>
    <button @click="changeToastStatus"></button>
  </div>
</template>

<script>
import Toast from "./components/Toast.vue";
export default {
  name: "App",
  data: function() {
    return {
      showToast: false,
    };
  },
  components: {
    Toast,
  },
  methods: {
    changeToastStatus() {
      this.showToast = !this.showToast;
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
  margin-top: 60px;
}
.toast-enter {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.toast-enter-active {
  transition: all 0.35s;
}
.toast-leave {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-to {
  opacity: 1;
  transform: translateY(0);
}
.toast-leave-active {
  transition: all 0.35s;
}
.toast {
  background-color: red;
}
</style>
