<template lang="">
  <div>
    <div v-for="(e, idx) in 40" :key="idx">e</div>
    <InfiniteLoading></InfiniteLoading>
  </div>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";

export default {
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const testData = await axios.get(
        "//hn.algolia.com/api/v1/search_by_date?tags=story"
      );
      await console.log(testData);
    },
  },
  components: {
    InfiniteLoading,
  },
};
</script>
<style lang=""></style>
