<template>
  <div>
    <div class="box red">1</div>
    <div class="box blue">2</div>
    <div class="box green">3</div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.box {
  display: inline-block;
  transform: translateY(1000px);
  width: 300px;
  height: 700px;
  margin: 10px;
}
.red {
  background-color: red;
  animation: test 4s 0s 1 ease forwards normal;
}
/* .box:hover {
  animation: test 4s 0.1s 1 ease forwards normal;
} */
@keyframes test {
  0% {
    transform: translateY(1000px);
  }
  100% {
    transform: translateY(0);
  }
}
.blue {
  background-color: blue;
  animation: test 4s 2s 1 ease forwards normal;
}
.green {
  background-color: green;
  animation: test 4s 4s 1 ease forwards normal;
}
</style>
