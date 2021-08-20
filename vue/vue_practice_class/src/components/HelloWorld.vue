<template>
  <div>
    <button @click="makeClass">click</button>
    <div v-for="(e, idx) in arr" :key="idx" :class="e">{{ e }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    this.arr = Object.keys(this.obj).map((e) => `txt_${e}`);
  },
  methods: {
    makeClass() {
      this.arr = Object.keys(this.obj);
    },
  },
  data() {
    return {
      obj: {
        id: 1234,
        date: 930217,
        title: "dh",
      },
      arr: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
