<template>
  <section class="cont_item">
    <h4 class="screen_out">사업 소개</h4>
    <ul class="list_content">
      <li v-for="(content, index) in contents" :key="index">
        <a class="link_content" href="#none">
          <img class="img_item" alt="콘텐츠 이미지" :src="content.img" />
          <strong class="tit_content">연구 및 자원활용 활성화</strong>
          <p class="desc_item">아시아 문화 연구 및 자원 아카이빙</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      contents: [
        {
          img: "https://picsum.photos/id/225/125/125",
        },
        {
          img: "https://picsum.photos/id/239/125/125",
        },
        {
          img: "https://picsum.photos/id/227/125/125",
        },
        {
          img: "https://picsum.photos/id/228/125/125",
        },
      ],
    };
  },
};
</script>

<style>
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
</style>
