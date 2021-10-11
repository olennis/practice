<template>
  <div>
    <swiper @slideChange="slideChange">
      <swiper-slide>1</swiper-slide>
      <swiper-slide>2</swiper-slide>
      <swiper-slide>3</swiper-slide>
      <swiper-slide>4</swiper-slide>
    </swiper>
    <ul>
      <li>paging btn1</li>
      <li>paging btn2</li>
      <li>paging btn3</li>
      <li>paging btn4</li>
    </ul>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  methods: {
    slideChange() {
      console.log("!!");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.d1 {
  background: red;
}
.d2 {
  background: blue;
}
.d3 {
  background: pink;
}
.d4 {
  background: yellow;
}
</style>
