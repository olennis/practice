<template>
  <div class="wrap_content">
    <section class="cont_item">
      <h4 class="screen_out">사업 소개</h4>
      <ul class="list_content">
        <li v-for="(content, index) in contents" :key="index">
          <a class="link_content" href="#none">
            <img class="img_item" alt="콘텐츠 이미지" :src="content.img" />
            <strong class="tit_content">{{ content.tit }}</strong>
            <p class="desc_item">{{ content.desc }}</p>
          </a>
        </li>
      </ul>
    </section>
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
            연령별 교육, 전시, 공연, 창제작 등 다양한 컨텐츠가 준비되어
            있습니다.
          </p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      contents: [
        {
          tit: "tit1",
          desc: "desc1",
          img: "https://picsum.photos/id/225/125/125",
        },
        {
          tit: "tit2",
          desc: "desc2",
          img: "https://picsum.photos/id/239/125/125",
        },
        {
          tit: "tit3",
          desc: "desc3",
          img: "https://picsum.photos/id/227/125/125",
        },
        {
          tit: "tit4",
          desc: "desc4",
          img: "https://picsum.photos/id/228/125/125",
        },
      ],
    };
  },
};
</script>

<style>
.wrap_content {
  border-bottom: 1px solid #808080;
  overflow: hidden;
}
.cont_item {
  width: 900px;
  float: left;
}
.list_content {
  overflow: hidden;
}
.list_content li {
  float: left;
  width: 125px;
  margin: 20px 50px;
  text-align: center;
}
.link_content {
  display: block;
  text-decoration: none;
}
.img_item {
  height: 125px;
  border-radius: 50%;
  display: block;
}
.tit_content {
  display: block;
  margin: 10px 0;
  font-size: 13px;
}
.cont_introduce {
  float: left;
  margin-left: 20px;
  width: 275px;
  border-left: 1px solid #808080;
}
.cont_introduce > .wrap_introduce:last-child {
  border-top: 1px solid #808080;
}
.wrap_introduce {
  display: block;
  height: 125px;
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
