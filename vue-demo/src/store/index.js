import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./action";

Vue.use(Vuex);

let state = {
  level: "第一周",
  itemNum: 1,
  allTime: 0,
  timer: "",
  answerId: [],
  itemDetail: [],
  score: 0,
  choosedNum: null,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
