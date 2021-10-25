<template lang="">
  <div>
    <div>counter : {{ countNum }}</div>
    <button type="button" @click="addNum">+</button>
    <button type="button" @click="minusNum">-</button>
    <button type="button" @click="add5Num">+5</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["addNum", "minusNum", "add5Num"]),
  },
  computed: {
    ...mapState(["countNum"]),
  },
};
</script>
<style lang=""></style>
