<template lang="">
  <div>
    <div>counter : {{ countNum }}</div>
    <button type="button" @click="addNum">+</button>
    <button type="button" @click="minusNum">-</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["addNum", "minusNum"]),
  },
  computed: {
    ...mapState(["countNum"]),
  },
};
</script>
<style lang=""></style>
