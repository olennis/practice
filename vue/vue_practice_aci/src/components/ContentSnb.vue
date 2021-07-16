<template>
  <section
    class="content-snb"
    v-bind:style="{ transition: '1s', top: `${scroll + 65}px` }"
  >
    <div class="wrap_snb">
      <h3 class="screen_out">
        사이드 메뉴(해당 영역의 역할을 숨김 텍스트로 할 것!)
      </h3>
      <div class="snb_search">
        <div class="wrap_search">
          <strong class="tit_search">검색</strong>
        </div>
        <div class="wrap_input">
          <input type="text" />
          <button class="btn_search" type="button">검색</button>
        </div>
      </div>
      <div class="snb_quickmenu">
        <strong class="tit_quickmenu">Quick Menu</strong>
        <ul class="list_snb">
          <li>
            <ul>
              <li><a href="#none">정부혁신</a></li>
              <li><a href="#none">ACI 소개</a></li>
              <li><a href="#none">사회적가치</a></li>
            </ul>
          </li>
          <li>
            <ul>
              <li><a href="#none">주요사업</a></li>
              <li><a href="#none">대관안내</a></li>
              <li><a href="#none">사전정보공표</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="snb_cs">
        <h4 class="tit_cs">고객센터</h4>
        <span
          >1899-5566<br />
          09:00 - 18:00 / 매주 월 휴무<br />
          (예매업무 09:00 - 17:00)</span
        >
      </div>
      <a href="#none" class="snb_etc">ACC 도서관</a>
      <a href="#none" class="snb_etc">ACC 아카이브</a>
      <div class="snb_logo"><a href="#none">LOGO</a></div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      scroll: null,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Any code to be executed when the window is scrolled
      this.scroll = window.scrollY;
    },
  },
};
</script>

<style>
.content-snb {
  background-color: #fff;
  width: 200px;
  position: absolute;
  top: 65px;
  right: 0;
}
.wrap_snb {
  border: 1px solid #5c6570;
  border-top: 3px solid #5c6570;
}
@media (max-width: 1400px) {
  .content-snb {
    display: none;
  }
}

.snb_search {
  background-color: #ccc;
  padding-bottom: 10px;
  border-bottom: 1px solid #5c6570;
}
.wrap_search {
  border-bottom: 1px solid #5c6570;
  margin-bottom: 10px;
}
.tit_search {
  font-size: 15px;
  font-weight: normal;
  padding: 10px;
}
.wrap_input {
  margin-left: 5px;
}

.btn_search {
  display: inline-block;
  background-color: #5c6570;
  color: #fff;
  width: 25px;
}
.snb_quickmenu {
  overflow: hidden;
  border-bottom: 1px solid #5c6570;
}
.tit_quickmenu {
  display: block;
  font-weight: normal;
  margin: 10px;
  text-align: center;
  font-size: 20px;
}
.list_snb {
  overflow: hidden;
}
.list_snb > li {
  text-align: center;
  margin-bottom: 15px;
}

.list_snb > li:first-child {
  width: 80px;
  float: left;
  border-right: 1px solid #5c6570;
}
.list_snb > li:last-child {
  width: 90px;
  float: right;
}
.snb_cs {
  margin: 10px;
  text-align: center;
}
.tit_cs {
  font-size: 25px;
}
.snb_etc {
  display: block;
  text-align: center;
  background-color: #ccc;
  height: 40px;
  border: 1px solid #5c6570;
  font-size: 20px;
}
.snb_logo {
  text-align: center;
  font-size: 40px;
  background: no-repeat url("https://dummyimage.com/500x300/f0cb6b/000000.jpg");
}
</style>
