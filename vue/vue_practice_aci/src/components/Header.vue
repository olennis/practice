<template>
  <header class="doc-header">
    <h1 class="doc-title">ACI | 아시아문화원</h1>
    <nav id="gnbContent" class="doc-gnb">
      <h2 class="screen_out">메뉴</h2>
      <ul class="list_gnb">
        <li><a class="tab_gnb" href="#none">정보공개</a></li>
        <li><a class="tab_gnb" href="#none">주요사업</a></li>
        <li><a class="tab_gnb" href="#none">알림마당</a></li>
        <li><a class="tab_gnb" href="#none">고객센터</a></li>
        <li><a class="tab_gnb" href="#none">ACI 소개</a></li>
        <li><a class="tab_gnb" href="#none">사회적가치</a></li>
        <li><a class="tab_gnb" href="#none">정부혁신</a></li>
      </ul>
      <div class="wrap_menu">
        <a href="#none">
          <img
            class="ico_menu"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          />
          <span>전체메뉴</span>
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.doc-title {
  float: left;
  margin-right: 50px;
}
.doc-gnb {
  line-height: 36px;
  font-size: 15px;
  float: left;
}
.list_gnb {
  overflow: hidden;
  float: left;
}
.list_gnb li {
  float: left;
  margin-left: 80px;
}
.tab_gnb {
  color: #333;
  text-decoration: none;
}
.tab_gnb:hover {
  color: #000;
  text-decoration: none;
}
.wrap_menu {
  margin-left: 50px;
  float: left;
}
.ico_menu {
  width: 17px;
  height: 17px;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
