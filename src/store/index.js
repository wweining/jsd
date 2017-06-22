import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex);

Vue.config.productionTip = false //关闭生产模式给出的提示

export default new Vuex.Store({
  state: {
    count: 15,
    age: 18,
    sex: '男'
  }
});
