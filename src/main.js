// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";

import Vue from 'vue'
import Vuex from "vuex";
import store from "./store";


Vue.use(Vuex);
import App from './App'
import router from './router'

Vue.config.productionTip = false //关闭生产模式给出的提示



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
