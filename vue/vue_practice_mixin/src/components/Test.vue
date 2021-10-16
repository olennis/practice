<template lang="">
  <div @click="practiceMixin">
    믹스인 연습
    <div @click="plus">{{ num }}</div>
  </div>
</template>
<script>
import { practiceMixin } from "../mixins/practiceMixin";
export default {
  data() {
    return {
      test: "this is original test",
      num: 0,
    };
  },
  mixins: [practiceMixin],
};
</script>
<style lang=""></style>
