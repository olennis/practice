<template>
  <main class="doc-main">
    <section class="inner-main" id="mainContent">
      <h2 class="screen_out">메인 페이지</h2>
      <section class="content-feature">
        <h3 class="screen_out">메인 이미지 및 소개</h3>
        <Main-img></Main-img>
        <Main-Content></Main-Content>
        <Main-introduce></Main-introduce>
      </section>
      <section class="content-snb">
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
              <li>
                <a href="#none">
                  <span class="tit_board">게시글 제목</span>
                  <span class="date_noti">게시글 날짜</span>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span class="tit_board">게시글 제목</span>
                  <span class="date_noti">게시글 날짜</span>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span class="tit_board"
                    >게시글 제목게시글 제목게시글 제목게시글 제목게시글
                    제목게시글 제목게시글 제목게시글 제목게시글 제목게시글
                    제목게시글 제목게시글 제목게시글 제목게시글 제목게시글
                    제목게시글 제목게시글 제목게시글 제목</span
                  >
                  <span class="date_noti">게시글 날짜</span>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span class="tit_board">게시글 제목</span>
                  <span class="date_noti">게시글 날짜</span>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span class="tit_board">게시글 제목</span>
                  <span class="date_noti">게시글 날짜</span>
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
              <li>
                <a class="link_culture" href="#none">
                  <img
                    class="img_culture"
                    alt="문화 이미지"
                    src="https://dummyimage.com/275x200/f0cb6b/000000.jpg"
                  />
                  <p class="desc_culture">
                    [아시아의 문화Ⅱ] 이슬람 문화로 짜여진 터키의 카펫
                  </p>
                </a>
              </li>
              <li>
                <a class="link_culture" href="#none">
                  <img
                    class="img_culture"
                    alt="문화 이미지"
                    src="https://dummyimage.com/275x200/f0cb6b/000000.jpg"
                  />
                  <p class="desc_culture">
                    [아시아의 문화Ⅱ] 전쟁과 여성의 삶, 비랑고나 이야기
                  </p>
                </a>
              </li>
              <li>
                <a class="link_culture" href="#none">
                  <img
                    class="img_culture"
                    alt="문화 이미지"
                    src="https://dummyimage.com/275x200/f0cb6b/000000.jpg"
                  />
                  <p class="desc_culture">
                    [아시아의 문화Ⅱ] 표해록, 아시아 해양 문명 네트워크 ‘무한한
                    상상력’
                  </p>
                </a>
              </li>
              <li>
                <a class="link_culture" href="#none">
                  <img
                    class="img_culture"
                    alt="문화 이미지"
                    src="https://dummyimage.com/275x200/f0cb6b/000000.jpg"
                  />
                  <p class="desc_culture">
                    [아시아의 문화Ⅱ] 바닷길, 아시아를 잇다
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </section>
  </main>
</template>

<script>
import MainImg from "./MainImg.vue";
import MainContent from "./MainContent.vue";
import MainIntroduce from "./MainIntroduce.vue";
export default {
  components: {
    MainImg,
    MainContent,
    MainIntroduce,
  },
};
</script>

<style>
.doc-main {
  overflow: hidden;
  float: left;
}
.inner-main {
  position: relative;
}
</style>
