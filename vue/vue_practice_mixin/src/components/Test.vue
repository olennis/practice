<template lang="">
  <div @click="practiceMixin">
    믹스인 연습
  </div>
</template>
<script>
import { practiceMixin } from "../mixins/practiceMixin";
export default {
  mixins: [practiceMixin],
};
</script>
<style lang=""></style>
