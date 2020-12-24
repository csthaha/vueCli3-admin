import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: "small" });

import i18n from "./assets/i18n/i18n"

import {message} from './utils/utils'
// 全局挂在提示框
Vue.prototype.$message = message

// 全局样式
import '@/assets/scss/index.scss'

/**
 * 接口挂载 $api
 */
import './api'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
