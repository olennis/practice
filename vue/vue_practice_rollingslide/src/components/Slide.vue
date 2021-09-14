<template>
  <section class="section_banner">
    <div class="searchbar">searchbar</div>
    <div class="wrap_cont" v-for="(slide, idx) in slides" :key="`slide_${idx}`">
      <img
        class="img_main"
        alt="메인 이미지"
        :src="slide.img"
        v-if="idx === current"
      />
      <strong class="txt_img" v-if="idx === current">{{ slide.text }}</strong>
      <a class="link_img" v-if="idx === current">
        <span class="txt_link">{{ slide.title }}</span>
        <span class="ico_comm ico_link"></span>
      </a>
    </div>
    <div class="wrap_carrousel">
      <ul class="list_paging">
        <li v-for="(paging, idx) in slides" :key="`carrousel_${idx}`">
          <button
            type="button"
            class="btn_paging"
            @click="changeActive(idx)"
            :class="{ btn_paging_active: current === idx }"
          >
            <span class="screen_out">{{ idx + 1 }}번 페이지</span>
            <span
              class="paging_main"
              :class="{ paging_main_active: current === idx }"
            ></span>
          </button>
        </li>
      </ul>
      <button class="btn_stop" @click="stopSlide">stop</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      slides: [
        {
          title: "소개",
          text: "adklfjeifjkjkjfiqjfkxjxijkjfokfjlkejfijkfj",
          link: "https://google.com",
          img: "https://picsum.photos/id/235/1200/520",
        },
        {
          title: "보기",
          text: "adklfjeifjkjkjfiqjfkxjxijkjfijkfj",
          link: "https://google.com",
          img: "https://picsum.photos/id/234/1200/520",
        },
        {
          title: "알아보기",
          text: "adklfjeifjkjkjfiqjfkxjxijkjfoj",
          link: "https://google.com",
          img: "https://picsum.photos/id/233/1200/520",
        },
        {
          title: "문의하기",
          text: "adklf",
          link: "https://google.com",
          img: "https://picsum.photos/id/232/1200/520",
        },
      ],
    };
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    toNext() {
      if (this.slides.length - 1 === this.current) {
        this.current = 0;
      } else {
        this.current++;
      }
    },
    changeActive(idx) {
      this.current = idx;
    },

    startSlide() {
      this.interval = setInterval(this.toNext, 2000);
    },
    stopSlide() {
      clearInterval(this.interval);
    },
  },
};
</script>
<style>
/* reset */
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
textarea,
p,
blockquote,
th,
td,
input,
select,
button {
  margin: 0;
  padding: 0;
}
fieldset,
img {
  border: 0 none;
}
dl,
ul,
ol,
menu,
li {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
input,
select,
textarea,
button {
  vertical-align: middle;
}
input::-ms-clear {
  display: none;
}
button {
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
}
body {
  background: #fff;
}
body,
th,
td,
input,
select,
textarea,
button {
  font-size: 12px;
  line-height: 1.5;
  font-family: "돋움", dotum, sans-serif;
  color: #333;
} /* color값은 디자인가이드에 맞게사용 */
a {
  color: #333;
  text-decoration: none;
}
a:active,
a:hover {
  text-decoration: underline;
}
a:active {
  background-color: transparent;
}
address,
caption,
cite,
code,
dfn,
em,
var {
  font-style: normal;
  font-weight: normal;
}
.screen_out {
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
} /* 대체텍스트가 아닌 접근성을 위한 숨김텍스트를 제공할때 */

.section_banner {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.img_main {
  width: 100%;
  height: 520px;
}
.searchbar {
  position: absolute;
  top: 50px;
  left: 100px;
  height: 30px;
  background-color: #fff;
}

.txt_img,
.link_img {
  display: block;
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translateY(-50%);
  color: #fff;
}
.link_img {
  color: yellow;
  margin-top: 50px;
}
.wrap_carrousel {
  position: absolute;
  bottom: 50px;
  left: 100px;
}
.list_paging {
  overflow: hidden;
}
.list_paging li {
  float: left;
  list-style: none;
}
.list_paging li + li {
  margin-left: 10px;
}
.btn_paging {
  background-color: lightgray;
  border: none;
  min-width: 50px;
  height: 3px;
}
.btn_paging_active {
  background-color: red;
}
.btn_stop {
  position: absolute;
  bottom: 0;
  left: 250px;
  color: #fff;
}
</style>
