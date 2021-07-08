<template>
  <div>
    <nuxt-link to="/search">to search</nuxt-link>
    <nuxt-link to="/about">to about</nuxt-link>
    <div>{{ text }}</div>
    <span v-show="open">opentest class="wrap_open"</span>
    <button @click="isOpen">오픈테스트</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 'data test',
      open: false,
    }
  },
  methods: {
    isOpen() {
      this.open = !this.open
    },
  },
}
</script>
<style>
a {
  text-decoration: none;
}
.wrap_open {
  background-color: #808080;
}
</style>
