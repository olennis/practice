<template lang="">
  <div class="wrapper">
    <div class="images">
      <div
        class="div_swipe div1"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></div>
      <div
        class="div_swipe div2"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></div>
      <div
        class="div_swipe div3"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></div>
      <div
        class="div_swipe div4"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      position: 0,
      startX: null,
      endX: null,
      divWidth: 375,
    };
  },
  methods: {
    prev() {
      const images = document.querySelector(".images");
      if (this.current > 0) {
        this.position += this.divWidth;
        images.style.transform = `translateX(${this.position}px)`;
        this.current = this.current - 1;
      }
    },
    next() {
      const images = document.querySelector(".images");
      if (this.current < 3) {
        this.position -= this.divWidth;
        images.style.transform = `translateX(${this.position}px)`;
        this.current = this.current + 1;
      }
    },
    touchStart(event) {
      this.startX = event.touches[0].pageX;
    },
    touchEnd(event) {
      this.endX = event.changedTouches[0].pageX;
      if (this.startX > this.endX) {
        this.next();
      } else {
        this.prev();
      }
    },
  },
};
</script>
<style scope>
.wrapper {
  overflow: hidden;
  width: 375px;
  height: 300px;
}
.images {
  position: relative;
  display: flex;
  height: 300px;
  transition: transform 0.5s;
}
.div_swipe {
  width: 375px;
}
.div1 {
  background: red;
}
.div2 {
  background: blue;
}
.div3 {
  background: green;
}
.div4 {
  background: yellow;
}
</style>
