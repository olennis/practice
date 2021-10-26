import Vue from "vue";
import App from "./App.vue";
import VueKakaoSdk from "vue-kakao-sdk";

const apiKey = process.env.VUE_APP_JAVASCRIPT_KEY;
Vue.use(VueKakaoSdk, { apiKey });
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
