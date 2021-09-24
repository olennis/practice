<template>
  <div class="pin">
    <ul class="list_pin">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style>
.pin {
  margin: 20px 0 0 500px;
}
.list_pin {
  overflow: hidden;
}
.list_pin li {
  float: left;
  width: calc(50% - 40px);
  margin: 20px;
}
</style>
