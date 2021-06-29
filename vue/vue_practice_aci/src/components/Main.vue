<template>
  <main class="doc-main">
    <section class="inner-main" id="mainContent">
      <h2 class="screen_out">메인 페이지</h2>
      <section class="content-feature">
        <h3 class="screen_out">메인 이미지 및 소개</h3>
        <Main-img></Main-img>
        <Main-content></Main-content>
        <Content-snb></Content-snb>
        <Content-article></Content-article>
      </section>
    </section>
  </main>
</template>

<script>
import MainImg from "./MainImg.vue";
import MainContent from "./MainContent.vue";
import ContentSnb from "./ContentSnb.vue";
import ContentArticle from "./ContentArticle.vue";
export default {
  components: {
    MainImg,
    MainContent,

    ContentSnb,
    ContentArticle,
  },
};
</script>

<style>
.doc-main {
  overflow: hidden;
  float: left;
}
</style>
