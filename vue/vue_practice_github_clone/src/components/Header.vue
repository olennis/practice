<template>
  <header>
    <h1 class="doc-title">
      <a href="/"
        ><img class="img_logo" alt="logo" src="../assets/logo.png"
      /></a>
    </h1>
    <transition name="input-click">
      <div class="wrap_search" :class="{ wrap_search_active: isFocus }">
        <input
          class="input_header"
          placeholder="search"
          type="text"
          @click="focusHandler"
          @blur="focusHandler"
        />
        <button type="button" class="btn_search">/</button>
      </div>
    </transition>
    <nav>
      <ul class="list_gnb">
        <li><a class="link_gnb">pull request</a></li>
        <li><a class="link_gnb">issue</a></li>
        <li><a class="link_gnb">market place</a></li>
        <li><a class="link_gnb">explore</a></li>
      </ul>
    </nav>
    <div class="wrap_icons">
      <button type="button" class="ico_comm">알림</button>
      <button type="button" class="ico_comm">메뉴</button>
      <button type="button" class="ico_comm">프로필</button>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isFocus: false,
    };
  },
  methods: {
    focusHandler() {
      this.isFocus = !this.isFocus;
      console.log(this.isFocus);
    },
  },
};
</script>
<style>
header {
  height: 62px;
  line-height: 30px;
  color: #fff;
  background-color: rgb(37, 41, 46);
  padding: 16px 32px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
h1 {
  float: left;
}
nav {
  overflow: hidden;
}

.img_logo {
  width: 30px;
  height: 30px;
}
.input_header {
  vertical-align: middle;
  margin-left: 12px;
  background: none;
  border: 0;
  box-shadow: none;
  padding-bottom: 0;
  padding-top: 0;
  width: 210px;
  box-sizing: border-box;
}
.wrap_search {
  float: left;
  padding: 5px;
  width: 260px;
  border: 1px solid rgb(70, 77, 85);
  margin-left: 20px;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  border-radius: 8px;
}
.btn_search {
  min-width: 20px;
  height: 20px;
  vertical-align: middle;
  float: right;
  background: none;
  border: 1px solid rgb(70, 77, 85);
  color: #707070;
  border-radius: 5px;
}
.list_gnb {
  overflow: hidden;
  float: left;
}
.list_gnb li {
  float: left;
  margin-left: 20px;
}
.link_gnb {
  font-weight: bold;
}
.wrap_icons {
  position: absolute;
  right: 30px;
  top: 16px;
}
.ico_comm + .ico_comm {
  margin-left: 10px;
}
.wrap_search_active {
  width: 300px;
}

.input-click-enter-active {
  animation: all 0.3s;
}

.input-click-leave-active {
  animation: all 0.8s;
}
@keyframes input-click {
  0% {
    transition: all 0.3s;
  }
  50% {
    transition: all 0.3s;
  }
  100% {
    transition: all 0.3s;
  }
}
</style>
