<template>
  <div>
    <ul>
      <li v-for="(slide, idx) in slides" :key="`slideIdx${idx}`">
        <img :src="slide" v-if="visibleNum === idx" />
      </li>
    </ul>
    <button @click="slidePrev">prev</button>
    <button @click="slideNext">next</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        "https://placeimg.com/300/300/any",
        "https://placeimg.com/300/300/animals",
        "https://placeimg.com/300/300/arch",
        "https://placeimg.com/300/300/nature",
        "https://placeimg.com/300/300/tech",
      ],
      visibleNum: 0,
    };
  },
  methods: {
    slidePrev() {
      if (this.visibleNum === 0) return;
      else this.visibleNum -= 1;
    },
    slideNext() {
      console.log(this.visibleNum);
      if (this.visibleNum === this.slides.length - 1) {
        this.visibleNum = 0;
      } else this.visibleNum += 1;
    },
  },
};
</script>
<style>
ul {
  overflow: hidden;
}
li {
  list-style: none;
}
</style>
