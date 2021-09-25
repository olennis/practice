<template>
  <div class="pin">
    <div class="wrap_pin">
      <strong class="tit_pin">Pinned</strong>
      <span class="txt_pin">customize your pins</span>
    </div>
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
  width: calc(50% - 42px);
  margin: 20px;
  border: 1px solid black;
}
.wrap_pin {
  overflow: hidden;
}
.tit_pin {
  float: left;
}
.txt_pin {
  float: right;
}
</style>
