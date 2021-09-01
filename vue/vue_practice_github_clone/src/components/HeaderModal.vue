<template>
  <div class="wrap_modal">
    <ul class="list_modal">
      <li v-for="(num, idx) in 5" :key="idx">{{ num }}</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style>
.wrap_modal {
  position: absolute;
  width: 100px;
  background-color: #707070;
  color: #000;
  top: 50px;
  right: 10px;
  z-index: 1;
}
.list_modal li:hover {
  background-color: #000;
}
</style>
