/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2021-09-19 18:56:05
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-22 21:40:21
 * @@param:
 */
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
import router from "./routers/";
import store from "./store/";
import * as directives from "@/directives";
import loadSvg from "@/icons";

//loading状态
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import "vue3-carousel/dist/carousel.css";

if (process.env.NODE_ENV === "production") {
  //启用前端mock
  const { mockXHR } = require("../mock");
  mockXHR();
}

const app = createApp(App);

// 加载全局svg
loadSvg(app);
//自定义全局指令
Object.keys(directives).forEach((key) => {
  // console.log(typeof(directives[key]))
  app.directive(key, directives[key]);
});

//权限认证的动态路由配置信息
import "@/routers/permission";

app
  .use(App)
  .use(store)
  .use(ElementPlus)
  .use(router)
  .use(VueLoading)
  .mount("#app");
