<template>
  <section class="cont_introduce">
    <h3 class="screen_out">aci 소개</h3>
    <div class="wrap_introduce">
      <a class="link_introduce" href="#none">
        <strong class="tit_introduce">ACI 소개</strong>
        <p class="desc_introduce">Asia Culture Institute</p>
      </a>
    </div>
    <div class="wrap_introduce">
      <a class="link_introduce" href="#none">
        <strong class="tit_introduce">ACI 프로그램</strong>
        <p class="desc_introduce">
          연령별 교육, 전시, 공연, 창제작 등 다양한 컨텐츠가 준비되어 있습니다.
        </p>
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.cont_introduce {
  float: left;
  height: 250px;
  margin-left: 20px;
  width: 275px;
  border-left: 1px solid #808080;
}
.wrap_introduce {
  display: block;
  height: 125px;
  border-bottom: 1px solid #808080;
}
.link_introduce {
  display: block;
}
.tit_introduce {
  font-size: 30px;
  margin: 10px;
}
.desc_introduce {
  font-size: 15px;
  margin: 10px;
}
</style>
