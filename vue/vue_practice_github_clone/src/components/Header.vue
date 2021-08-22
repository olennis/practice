<template>
  <header>
    <h1 class="doc-title">
      <a href="/"
        ><img class="img_logo" alt="logo" src="../assets/logo.png"
      /></a>
    </h1>
    <div class="wrap_search">
      <input class="input_header" placeholder="search" />
      <button class="btn_search">/</button>
    </div>

    <nav>
      <ul class="list_gnb">
        <li><a>pull request</a></li>
        <li><a>issue</a></li>
        <li><a>market place</a></li>
        <li><a>explore</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {};
</script>
<style>
header {
  height: 62px;
  line-height: 30px;
  color: #fff;
  background-color: rgb(37, 41, 46);
  padding: 16px 32px;
  box-sizing: border-box;
  overflow: hidden;
}
h1 {
  float: left;
}
nav {
  overflow: hidden;
}

.img_logo {
  width: 30px;
  height: 30px;
}
.input_header {
  vertical-align: middle;
  margin-left: 12px;
  background: none;
  border: 0;
  box-shadow: none;
  padding-bottom: 0;
  padding-top: 0;
  width: 210px;
  box-sizing: border-box;
}
.wrap_search {
  float: left;
  padding: 5px;
  width: 270px;
  border: 1px solid rgb(70, 77, 85);
  margin-left: 20px;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  border-radius: 8px;
}
.btn_search {
  min-width: 20px;
  height: 20px;
  vertical-align: middle;
  float: right;
  background: none;
  border: 1px solid rgb(70, 77, 85);
  color: #707070;
  border-radius: 5px;
}
.list_gnb {
  overflow: hidden;
  float: left;
}
.list_gnb li {
  float: left;
  margin-left: 10px;
}
</style>
