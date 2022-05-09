/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2021-09-19 20:14:36
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-08 19:15:22
 * @@param:
 */
//-------------------------------
//? 整合多个模块成一个store对象
//-------------------------------

import Vuex from "vuex";

import main from "./modules/main";
import news from "./modules/news";
import user from "./modules/user";
import permission from "./modules/permission";
import setting from "./modules/setting";
import { app } from "./modules/app";
import { tagsView } from "./modules/tags-view";

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    //模块化的store 对象
    main,
    news,
    user,
    permission,
    setting,
    app,
    tagsView
  },
  state: {
    web: "lab-web-server",
  },
  mutations: {
    chagen_web(state) {
      state.web = "dddd";
    },
  },
});

export default store;
