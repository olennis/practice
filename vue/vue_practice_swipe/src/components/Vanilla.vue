<template lang="">
  <transition-group name="swipe">
    <div class="swipe_div" key="1" v-if="current === 1" @click="next">1</div>
    <div class="swipe_div" key="2" v-if="current === 2">2</div>
  </transition-group>
</template>
<script>
export default {
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    next() {
      this.current += 1;
    },
  },
};
</script>
<style scope>
.swipe_div {
  float: left;
}
.swipe-enter-active {
  transition: all 0.3s ease;
}
.swipe-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.swipe-enter, .swipe-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-30px);
}
</style>
