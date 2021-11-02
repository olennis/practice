<template>
  <div class="hello">
    <VueSlickCarousel v-bind="settings">
      <div class="test">1</div>
      <div class="test">2</div>
      <div class="test">3</div>
      <div class="test">4</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "HelloWorld",
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        dotsClass: "slick-dots",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  components: { VueSlickCarousel },
  props: {
    msg: String,
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
.test {
  background: red;
}
</style>
