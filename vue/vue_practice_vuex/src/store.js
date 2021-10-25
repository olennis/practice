import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countNum: 0,
  },

  mutations: {
    addNum: (state) => {
      state.countNum += 1;
    },
    minusNum: (state) => {
      state.countNum -= 1;
    },
    add5Num: (state) => {
      state.countNum += 5;
    },
  },
  actions: {},
});
