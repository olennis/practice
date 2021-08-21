<template>
  <header>
    <h1 class="doc-title">
      <a href="/"
        ><img class="img_logo" alt="logo" src="../assets/logo.png"
      /></a>
    </h1>
    <div class="wrap_search">
      <input class="input_header" placeholder="search" />
      <button class="btn_search">click</button>
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
  min-height: 28px;
  background: none;
  border: 0;
  box-shadow: none;
  padding-bottom: 0;
  padding-top: 0;
  width: 240px;
  box-sizing: border-box;
}
.wrap_search {
  float: left;
  padding: 5px 12px;
  width: 270px;
}
.btn_search {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  overflow: hidden;
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
