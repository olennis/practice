<template>
  <footer class="doc-footer">
    <h2 class="screen_out">푸터</h2>
    <section class="section_footer">
      <h3 class="tit_footer">ACI | 아시아문화원</h3>
      <div class="wrap_footer">
        <ul class="list_menu">
          <li><a class="link_footer" href="#none">개인정보 처리방침</a></li>
          <li><a class="link_footer" href="#none">오시는길</a></li>
          <li><a class="link_footer" href="#none">이메일무단수집거부</a></li>
          <li><a class="link_footer" href="#none">고객센터</a></li>
          <li><a class="link_footer" href="#none">사이트맵</a></li>
          <li>
            <a class="link_footer" href="#none">국립아시아문화전당 소개</a>
          </li>
        </ul>
        <p>
          광주광역시 동구 문화전당로 38(우편번호) 61485 / TEL 1899-5566 / 대표자
          이기표 / 사업자 등록번호 616-82-28736
        </p>
        <small>Copyright(C) Asia Culture Institute.All right reserved</small>
      </div>

      <ul class="list_sns">
        <li><a href="#none">1</a></li>
        <li><a href="#none">2</a></li>
        <li><a href="#none">3</a></li>
        <li><a href="#none">4</a></li>
        <li><a href="#none">5</a></li>
      </ul>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.doc-footer {
  background-color: #000;
  color: #fff;
  overflow: hidden;
  float: left;
}
.wrap_footer {
  float: left;
  overflow: hidden;
  width: 600px;
}
.tit_footer {
  float: left;
  margin: 25px 50px;
  font-size: 30px;
}
.list_menu {
  overflow: hidden;
  margin: 10px auto;
}
.list_menu li {
  float: left;
  font-weight: bold;
}
.link_footer {
  color: #fff;
}
.list_menu li:after {
  margin: 0 5px;
  content: "|";
}
.list_menu li:last-child:after {
  content: "";
}
.section_footer {
  overflow: hidden;
}
.section_footer small {
  float: left;
}
.list_sns {
  float: left;
  width: 250px;
  overflow: hidden;
  margin: 30px 50px;
}
.list_sns li {
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid red;
  margin: 0 10px;
}
</style>
