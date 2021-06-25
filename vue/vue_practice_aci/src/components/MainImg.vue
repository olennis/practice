<template>
  <div
    class="wrap_feature"
    v-on:mouseover="stopSlide"
    v-on:mouseleave="startSlide"
  >
    <div class="inner_feature" v-for="(list, idx) in notis" :key="idx">
      <img
        class="img_main"
        alt="메인 이미지"
        :src="list.img"
        v-show="idx === current"
      />

      <button type="button" class="btn_prev" v-on:click="toPrev">
        <span class="screen_out">메인 이미지 슬라이드 이전</span>{{ prev }}
      </button>
      <button type="button" class="btn_next" v-on:click="toNext">
        <span class="screen_out">메인 이미지 슬라이드 다음</span>{{ next }}
      </button>
      <transition name="fade">
        <div class="wrap_noti" v-show="current === idx">
          <strong class="tit_noti">문화원 소식</strong>
          <strong class="tit_item">{{ list.tit_item }}</strong>
          <p class="desc_noti">
            {{ list.desc_noti }}
          </p>
          <p class="desc_noti">
            {{ list.desc_noti2 }}
          </p>

          <ul class="list_paging">
            <li v-for="(paging, index) in notis" :key="index">
              <button
                type="button"
                class="btn_paging"
                v-on:click="changeActive(index)"
              >
                <span class="screen_out">{{ idx + 1 }}번 페이지</span>
                <span
                  class="paging_main"
                  v-bind:class="{ paging_main_active: current === index }"
                ></span>
              </button>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      interval: null,
      prev: "<",
      next: ">",
      current: 0,
      isStop: false,
      notis: [
        {
          tit_item: "1",
          desc_noti: "first desc1",
          desc_noti2: "second desc1",
          img: "https://picsum.photos/id/235/1200/520",
        },
        {
          tit_item: "2",
          desc_noti: "first desc2",
          desc_noti2: "second desc2",
          img: "https://picsum.photos/id/234/1200/520",
        },
        {
          tit_item: "3",
          desc_noti: "first desc3",
          desc_noti2: "second desc3",
          img: "https://picsum.photos/id/233/1200/520",
        },
        {
          tit_item: "4",
          desc_noti: "first desc4",
          desc_noti2: "second desc4",
          img: "https://picsum.photos/id/232/1200/520",
        },
        {
          tit_item: "5",
          desc_noti: "first desc5",
          desc_noti2: "second desc5",
          img: "https://picsum.photos/id/231/1200/520",
        },
      ],
    };
  },

  methods: {
    changeActive(idx) {
      this.current = idx;
    },
    toNext() {
      if (this.notis.length - 1 === this.current) {
        this.current = 0;
      } else {
        this.current++;
      }
    },
    toPrev() {
      if (0 === this.current) {
        this.current = this.notis.length - 1;
      } else {
        this.current--;
      }
    },
    startSlide() {
      this.interval = setInterval(this.toNext, 3000);
    },
    stopSlide() {
      clearInterval(this.interval);
    },
  },

  mounted() {
    this.startSlide();
  },
};
</script>

<style>
.content-feature {
  margin: 30px 0;
  overflow: hidden;
  border-top: 3px solid #5c6570;
  border-bottom: 1px solid #808080;
  max-width: 1200px;
}
.wrap_feature {
  position: relative;
  overflow: hidden;
}

.img_main {
  height: 520px;
  margin-bottom: 10px;
}
.btn_next,
.btn_prev {
  position: absolute;
  top: 240px;
  width: 45px;
  height: 45px;
  font-size: 20px;
  color: #fff;
  background-color: rgba(53, 69, 110, 0.3);
  border-radius: 25px;
  text-align: center;
}
.btn_next {
  right: 200px;
}
.btn_prev {
  left: 200px;
}
.wrap_noti {
  position: absolute;
  background-color: rgba(53, 69, 110, 0.9);
  width: 350px;
  height: 400px;
  top: 50px;
  left: 430px;
  color: #fff;
  padding: 20px;
  text-align: center;
}
.tit_noti {
  display: block;
  font-size: 20px;
  text-decoration: underline;
  text-align: left;
}
.tit_item {
  display: block;
  font-size: 30px;
  margin: 30px;
}
.desc_noti {
  font-size: 15px;
  padding: 20px 0;
}
.desc_noti + .desc_noti {
  border-top: 1px solid #fff;
}
.list_paging {
  overflow: hidden;
  margin-top: 70px;
  text-align: center;
}

.list_paging li {
  display: inline-block;
  margin: 0 15px;
}
.btn_paging {
  display: block;
  width: 18px;
  height: 18px;
}
.paging_main {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background-color: #808080;
}
.paging_main_active {
  background-color: #0bb2ff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
