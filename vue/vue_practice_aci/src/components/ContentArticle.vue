<template>
  <article class="content-article">
    <section class="section_information">
      <h3 class="screen_out">정보 섹션</h3>
      <div class="cont_information">
        <div class="header_information">
          <ul class="list_information">
            <li><a class="link_information" href="#none">공지사항</a></li>
            <li><a class="link_information" href="#none">채용정보</a></li>
            <li><a class="link_information" href="#none">보도자료</a></li>
          </ul>
          <button type="button" class="btn_information">
            <span class="screen_out">공지사항 더보기</span>+
          </button>
        </div>
        <ul class="list_board">
          <li v-for="(noti, idx) in notis" :key="idx">
            <a href="#none">
              <span class="tit_board">{{ noti.tit }}</span>
              <span class="date_noti">{{ noti.date }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="section_popup">
        <div class="header_popup">
          <strong>팝업존</strong>
          <button class="btn_close" type="button">
            <span class="screen_out">팝업 닫기</span>x
          </button>
        </div>
        <div class="item_popup"></div>
      </div>
    </section>
    <section class="section_culture">
      <h3 class="tit_culture">아시아 문화 이야기</h3>
      <div class="container_culture">
        <ul class="list_culture">
          <li v-for="(asiaCulture, idx) in asiaCultures" :key="idx">
            <a class="link_culture" href="#none">
              <img
                class="img_culture"
                alt="문화 이미지"
                :src="asiaCulture.img"
              />
              <p class="desc_culture">[아시아의 문화Ⅱ] {{ asiaCulture.tit }}</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  data: function() {
    return {
      notis: [
        { tit: "tit 1", date: "00/00/00" },
        {
          tit:
            "겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀겁내 긴 타이틀",
          date: "00/00/00",
        },
        { tit: "tit 3", date: "00/00/00" },
        { tit: "tit 4", date: "00/00/00" },
        { tit: "tit 5", date: "00/00/00" },
      ],
      asiaCultures: [
        { img: "https://picsum.photos/id/200/275/200", tit: "tit1" },
        { img: "https://picsum.photos/id/201/275/200", tit: "tit2" },
        { img: "https://picsum.photos/id/202/275/200", tit: "tit3" },
        { img: "https://picsum.photos/id/203/275/200", tit: "tit4" },
      ],
    };
  },
};
</script>

<style>
.section_information {
  overflow: hidden;
  height: 300px;
  float: left;
  margin-top: 50px;
}
.cont_information {
  float: left;
  width: 920px;
  height: 250px;
  border-bottom: 1px solid #808080;
}
.header_information {
  overflow: hidden;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #808080;
  margin-bottom: 20px;
}
.btn_information {
  float: right;
  font-size: 15px;
  margin: 15px;
  border-left: 1px solid #808080;
  padding-left: 15px;
  text-align: center;
}
.list_information {
  overflow: hidden;
  float: left;
}

.list_information li {
  float: left;
  text-align: center;
  margin: 15px;
}
.list_board {
  margin-bottom: 15px;
}
.list_board li {
  position: relative;
  margin: 15px 0;
}
.list_board li::before {
  content: "-";
  margin-left: 10px;
  vertical-align: top;
}
.tit_board {
  display: inline-block;
  width: 800px;
}
.date_noti {
  position: absolute;
  right: 10px;
}
.section_popup {
  float: left;
  width: 275px;
  height: 250px;
  border: 1px solid #808080;
}
.header_popup {
  width: 250px;
  margin: 5px auto;
  font-size: 20px;
}
.btn_close {
  float: right;
  font-size: 20px;
  width: 22px;
  height: 22px;
  text-align: center;
}
.item_popup {
  border: 1px solid #808080;
  width: 250px;
  height: 180px;
  margin: 15px auto;
}
.section_culture {
  width: 1200px;
}

.tit_culture {
  margin: 20px 0;
  text-align: center;
  font-size: 25px;
}

.list_culture {
  overflow: hidden;
}

.list_culture li {
  float: left;
  text-align: center;
  margin: 10px;
}
.link_culture {
  display: block;
}

.img_culture {
  width: 275px;
  height: 200px;
  border: 1px solid #808080;
  display: block;
}
.desc_culture {
  margin: 10px 0;
  max-width: 275px;
}
</style>
