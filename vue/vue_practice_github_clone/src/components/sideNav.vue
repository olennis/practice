<template>
  <div class="nav_side">
    <div class="wrap_profile"></div>
    <div class="inner_profile">
      <strong class="tit_profile">name</strong>
      <span class="txt_profile">githubNaem</span>
      <p class="desc_profile">introduce</p>
      <button class="btn_profile">Edit profile</button>
      <ul class="list_follow">
        <li>followers</li>
        <li>following</li>
        <li>favorite</li>
      </ul>
      <div>location</div>
      <div>blog</div>
    </div>
    <div class="wrap_organization">
      <strong class="tit_organization">organization</strong>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.nav_side {
  position: fixed;
  top: 80px;
  left: 100px;
}
.wrap_profile {
  width: 300px;
  height: 300px;
  border-radius: 150px;
  border: 1px solid black;
  top: -30px;
}
.tit_profile {
  display: block;
  font-size: 30px;
}
.inner_profile {
  margin-top: 10px;
}
.desc_profile {
  margin-top: 20px;
}
.btn_profile {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 15px 0;
}
.list_follow {
  overflow: hidden;
  margin-bottom: 15px;
}
.list_follow li {
  float: left;
  font-weight: bold;
}
.list_follow li + li {
  margin-left: 15px;
}
.wrap_organization {
  border-top: 1px solid #909090;
  margin-top: 15px;
  padding-top: 15px;
}
.tit_organization {
  font-weight: bold;
}
</style>
