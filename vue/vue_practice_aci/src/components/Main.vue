<template>
  <main class="doc-main">
    <section class="inner-main" id="mainContent">
      <h2 class="screen_out">메인 페이지</h2>
      <section class="content-feature">
        <h3 class="screen_out">메인 이미지 및 소개</h3>
        <Main-img></Main-img>
        <section class="cont_item">
          <h4 class="screen_out">사업 소개</h4>
          <ul class="list_content">
            <li>
              <a class="link_content" href="#none">
                <img
                  class="img_item"
                  alt="콘텐츠 이미지"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX/3AAAAB//4gD/4AD/5AD/3gD/4QAABh8ACB//5gAABx8AAB792gARFB8ACx99bRhcUhnKrwxzZRfewAkeHh0HDh+kjxLuzgXStgtZTxrDqQ4oJh331QOqlBGBcRa9pA9pXRiMehU8NxwbHB4TFh5QRxpJQhu4nxCOfBU1MRzy0QavmBGXgxR4aRgxLRxAOhskIx3jxAhsXxhNRRpm5ptnAAAD50lEQVR4nO3Y2XajOhAFUJekAmSDZwbbGI/xnMHJ///bLQk7nYdOnnqgc89+sTFZLA4llURaLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4f2Ctvzz9p+7jt+HT9Px5RG3y+A/ezG+herQ2n53UxYxO/3oVVRXtPk+4ICq/QcK3756w/fBVws4/n9D07gl/JHn/pvcUfoOE4cQnDE7KfXBgLGurfC5J2K0Tqrrfsg6UUR96r6w1uuGPQBL2XcJgQHO5VS7P/Q7R+OCDBedO6r+YYeHyay6yqncp1C2U1qPFfnAyjc5oHn1CnafJJuaW6pPTCZ/kwCVMXEKTEQ10S0/H/iz164FsBkd/+Fh+uWn4y8wwXJoW83PSzeU+9XQ5zctTRuFKihbMQxc7KChdusdQ0PNqPpeH0HNlN2dKx71Dn7ovTZ6s5tUltI8RDQJ3zEozs626T66GWTiOmU9JsvZV46tSQWBXqVtD+ErJJDbK3vI3lSR8NVINyj7epB74hbBOqHd1fVu3Lss5UaFlBqdJPUnnIV2bW0SzDId2ROGjvf3AWiklv/iEl/ZLy/ZCKoL730uBdWtDC0nYSSv/VLhMoyz46dWbwPTDXrxNJveer8r9papWw8QlVJf2LJD6nm/1ZWXy0eg6GktCqWS4rytrnru95g5TMwmrnLb3hGZed0sak+usl+gpps3R1ieZLxt/ckNTWSh8f62vEQ2bndAuqF2PUj0lWl3LspRPl/AQPRlZ9Vf1EFYTWRmy8znzCQs/G/01+u3HBid8CytlL7dOYx6ioZWpJuv/LeFR29VtmMouNRrZIFDxVqrHP2pod1GTR+nOrXxmkrpuwjwjP7ekl3ZcwlW01hw8JDTSbpPe6bticpm4hCVF83qBaY27B/V3Y3zBrkO5O45n21RWBEk4l/Vf2yy6J5Tc5Xi7kRdh89rx002XqauePSYP9dAu3qvZRPbYvsjz17J8r5lNPz3mgS5eadN1Cavo2e1lRpTsApYxO2Ml7bSfuBnomuzCSon1Oplxc9dD+0J+hCl52a2Uy0Kzrnzd1gnD3W1/Fg5d90zW2UXazYvvMfqtS4fRdbFOm1xCaSbVwt+eXQ1lRqlil3Zeele7HvuEnWffQmyPLnJ4rvfd+dIn5LjeplO4aG6fEer+uqcDN9K0KU/aMCt3xHFZ76k5LlwIle/n+9zIO5P//xSrolouX7OyuRuan/o4pfh+wO9vwG5rwPcdkFbGmKC5cxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfrn/ADCaOc2HgoxfAAAAAElFTkSuQmCC"
                />
                <strong class="tit_content">연구 및 자원활용 활성화</strong>
                <p class="desc_item">아시아 문화 연구 및 자원 아카이빙</p>
              </a>
            </li>
            <li>
              <a class="link_content" href="#none">
                <img
                  class="img_item"
                  alt="콘텐츠 이미지"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX/3AAAAB//4gD/4AD/5AD/3gD/4QAABh8ACB//5gAABx8AAB792gARFB8ACx99bRhcUhnKrwxzZRfewAkeHh0HDh+kjxLuzgXStgtZTxrDqQ4oJh331QOqlBGBcRa9pA9pXRiMehU8NxwbHB4TFh5QRxpJQhu4nxCOfBU1MRzy0QavmBGXgxR4aRgxLRxAOhskIx3jxAhsXxhNRRpm5ptnAAAD50lEQVR4nO3Y2XajOhAFUJekAmSDZwbbGI/xnMHJ///bLQk7nYdOnnqgc89+sTFZLA4llURaLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4f2Ctvzz9p+7jt+HT9Px5RG3y+A/ezG+herQ2n53UxYxO/3oVVRXtPk+4ICq/QcK3756w/fBVws4/n9D07gl/JHn/pvcUfoOE4cQnDE7KfXBgLGurfC5J2K0Tqrrfsg6UUR96r6w1uuGPQBL2XcJgQHO5VS7P/Q7R+OCDBedO6r+YYeHyay6yqncp1C2U1qPFfnAyjc5oHn1CnafJJuaW6pPTCZ/kwCVMXEKTEQ10S0/H/iz164FsBkd/+Fh+uWn4y8wwXJoW83PSzeU+9XQ5zctTRuFKihbMQxc7KChdusdQ0PNqPpeH0HNlN2dKx71Dn7ovTZ6s5tUltI8RDQJ3zEozs626T66GWTiOmU9JsvZV46tSQWBXqVtD+ErJJDbK3vI3lSR8NVINyj7epB74hbBOqHd1fVu3Lss5UaFlBqdJPUnnIV2bW0SzDId2ROGjvf3AWiklv/iEl/ZLy/ZCKoL730uBdWtDC0nYSSv/VLhMoyz46dWbwPTDXrxNJveer8r9papWw8QlVJf2LJD6nm/1ZWXy0eg6GktCqWS4rytrnru95g5TMwmrnLb3hGZed0sak+usl+gpps3R1ieZLxt/ckNTWSh8f62vEQ2bndAuqF2PUj0lWl3LspRPl/AQPRlZ9Vf1EFYTWRmy8znzCQs/G/01+u3HBid8CytlL7dOYx6ioZWpJuv/LeFR29VtmMouNRrZIFDxVqrHP2pod1GTR+nOrXxmkrpuwjwjP7ekl3ZcwlW01hw8JDTSbpPe6bticpm4hCVF83qBaY27B/V3Y3zBrkO5O45n21RWBEk4l/Vf2yy6J5Tc5Xi7kRdh89rx002XqauePSYP9dAu3qvZRPbYvsjz17J8r5lNPz3mgS5eadN1Cavo2e1lRpTsApYxO2Ml7bSfuBnomuzCSon1Oplxc9dD+0J+hCl52a2Uy0Kzrnzd1gnD3W1/Fg5d90zW2UXazYvvMfqtS4fRdbFOm1xCaSbVwt+eXQ1lRqlil3Zeele7HvuEnWffQmyPLnJ4rvfd+dIn5LjeplO4aG6fEer+uqcDN9K0KU/aMCt3xHFZ76k5LlwIle/n+9zIO5P//xSrolouX7OyuRuan/o4pfh+wO9vwG5rwPcdkFbGmKC5cxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfrn/ADCaOc2HgoxfAAAAAElFTkSuQmCC"
                />
                <strong class="tit_content">콘텐츠 제작 운영</strong>
                <p class="desc_item">진취적인 공연예술 작품의 기획제작</p>
              </a>
            </li>
            <li>
              <a class="link_content" href="#none">
                <img
                  class="img_item"
                  alt="콘텐츠 이미지"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX/3AAAAB//4gD/4AD/5AD/3gD/4QAABh8ACB//5gAABx8AAB792gARFB8ACx99bRhcUhnKrwxzZRfewAkeHh0HDh+kjxLuzgXStgtZTxrDqQ4oJh331QOqlBGBcRa9pA9pXRiMehU8NxwbHB4TFh5QRxpJQhu4nxCOfBU1MRzy0QavmBGXgxR4aRgxLRxAOhskIx3jxAhsXxhNRRpm5ptnAAAD50lEQVR4nO3Y2XajOhAFUJekAmSDZwbbGI/xnMHJ///bLQk7nYdOnnqgc89+sTFZLA4llURaLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4f2Ctvzz9p+7jt+HT9Px5RG3y+A/ezG+herQ2n53UxYxO/3oVVRXtPk+4ICq/QcK3756w/fBVws4/n9D07gl/JHn/pvcUfoOE4cQnDE7KfXBgLGurfC5J2K0Tqrrfsg6UUR96r6w1uuGPQBL2XcJgQHO5VS7P/Q7R+OCDBedO6r+YYeHyay6yqncp1C2U1qPFfnAyjc5oHn1CnafJJuaW6pPTCZ/kwCVMXEKTEQ10S0/H/iz164FsBkd/+Fh+uWn4y8wwXJoW83PSzeU+9XQ5zctTRuFKihbMQxc7KChdusdQ0PNqPpeH0HNlN2dKx71Dn7ovTZ6s5tUltI8RDQJ3zEozs626T66GWTiOmU9JsvZV46tSQWBXqVtD+ErJJDbK3vI3lSR8NVINyj7epB74hbBOqHd1fVu3Lss5UaFlBqdJPUnnIV2bW0SzDId2ROGjvf3AWiklv/iEl/ZLy/ZCKoL730uBdWtDC0nYSSv/VLhMoyz46dWbwPTDXrxNJveer8r9papWw8QlVJf2LJD6nm/1ZWXy0eg6GktCqWS4rytrnru95g5TMwmrnLb3hGZed0sak+usl+gpps3R1ieZLxt/ckNTWSh8f62vEQ2bndAuqF2PUj0lWl3LspRPl/AQPRlZ9Vf1EFYTWRmy8znzCQs/G/01+u3HBid8CytlL7dOYx6ioZWpJuv/LeFR29VtmMouNRrZIFDxVqrHP2pod1GTR+nOrXxmkrpuwjwjP7ekl3ZcwlW01hw8JDTSbpPe6bticpm4hCVF83qBaY27B/V3Y3zBrkO5O45n21RWBEk4l/Vf2yy6J5Tc5Xi7kRdh89rx002XqauePSYP9dAu3qvZRPbYvsjz17J8r5lNPz3mgS5eadN1Cavo2e1lRpTsApYxO2Ml7bSfuBnomuzCSon1Oplxc9dD+0J+hCl52a2Uy0Kzrnzd1gnD3W1/Fg5d90zW2UXazYvvMfqtS4fRdbFOm1xCaSbVwt+eXQ1lRqlil3Zeele7HvuEnWffQmyPLnJ4rvfd+dIn5LjeplO4aG6fEer+uqcDN9K0KU/aMCt3xHFZ76k5LlwIle/n+9zIO5P//xSrolouX7OyuRuan/o4pfh+wO9vwG5rwPcdkFbGmKC5cxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfrn/ADCaOc2HgoxfAAAAAElFTkSuQmCC"
                />
                <strong class="tit_content">국내외 교류 유통</strong>
                <p class="desc_item">
                  국제 문화외교에 기여 및 설립 목적 달성
                </p>
              </a>
            </li>
            <li>
              <a class="link_content" href="#none">
                <img
                  class="img_item"
                  alt="콘텐츠 이미지"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX/3AAAAB//4gD/4AD/5AD/3gD/4QAABh8ACB//5gAABx8AAB792gARFB8ACx99bRhcUhnKrwxzZRfewAkeHh0HDh+kjxLuzgXStgtZTxrDqQ4oJh331QOqlBGBcRa9pA9pXRiMehU8NxwbHB4TFh5QRxpJQhu4nxCOfBU1MRzy0QavmBGXgxR4aRgxLRxAOhskIx3jxAhsXxhNRRpm5ptnAAAD50lEQVR4nO3Y2XajOhAFUJekAmSDZwbbGI/xnMHJ///bLQk7nYdOnnqgc89+sTFZLA4llURaLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4f2Ctvzz9p+7jt+HT9Px5RG3y+A/ezG+herQ2n53UxYxO/3oVVRXtPk+4ICq/QcK3756w/fBVws4/n9D07gl/JHn/pvcUfoOE4cQnDE7KfXBgLGurfC5J2K0Tqrrfsg6UUR96r6w1uuGPQBL2XcJgQHO5VS7P/Q7R+OCDBedO6r+YYeHyay6yqncp1C2U1qPFfnAyjc5oHn1CnafJJuaW6pPTCZ/kwCVMXEKTEQ10S0/H/iz164FsBkd/+Fh+uWn4y8wwXJoW83PSzeU+9XQ5zctTRuFKihbMQxc7KChdusdQ0PNqPpeH0HNlN2dKx71Dn7ovTZ6s5tUltI8RDQJ3zEozs626T66GWTiOmU9JsvZV46tSQWBXqVtD+ErJJDbK3vI3lSR8NVINyj7epB74hbBOqHd1fVu3Lss5UaFlBqdJPUnnIV2bW0SzDId2ROGjvf3AWiklv/iEl/ZLy/ZCKoL730uBdWtDC0nYSSv/VLhMoyz46dWbwPTDXrxNJveer8r9papWw8QlVJf2LJD6nm/1ZWXy0eg6GktCqWS4rytrnru95g5TMwmrnLb3hGZed0sak+usl+gpps3R1ieZLxt/ckNTWSh8f62vEQ2bndAuqF2PUj0lWl3LspRPl/AQPRlZ9Vf1EFYTWRmy8znzCQs/G/01+u3HBid8CytlL7dOYx6ioZWpJuv/LeFR29VtmMouNRrZIFDxVqrHP2pod1GTR+nOrXxmkrpuwjwjP7ekl3ZcwlW01hw8JDTSbpPe6bticpm4hCVF83qBaY27B/V3Y3zBrkO5O45n21RWBEk4l/Vf2yy6J5Tc5Xi7kRdh89rx002XqauePSYP9dAu3qvZRPbYvsjz17J8r5lNPz3mgS5eadN1Cavo2e1lRpTsApYxO2Ml7bSfuBnomuzCSon1Oplxc9dD+0J+hCl52a2Uy0Kzrnzd1gnD3W1/Fg5d90zW2UXazYvvMfqtS4fRdbFOm1xCaSbVwt+eXQ1lRqlil3Zeele7HvuEnWffQmyPLnJ4rvfd+dIn5LjeplO4aG6fEer+uqcDN9K0KU/aMCt3xHFZ76k5LlwIle/n+9zIO5P//xSrolouX7OyuRuan/o4pfh+wO9vwG5rwPcdkFbGmKC5cxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfrn/ADCaOc2HgoxfAAAAAElFTkSuQmCC"
                />
                <strong class="tit_content">대관</strong>
                <p class="desc_item">시민들의 문화향유 기회 확대</p>
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
export default {
  components: {
    MainImg,
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
