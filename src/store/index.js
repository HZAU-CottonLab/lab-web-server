/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2021-09-19 20:14:36
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-12 17:05:52
 * @@param:
 */
//-------------------------------
//? 整合多个模块成一个store对象
//-------------------------------

import Vuex from "vuex";

import main from "./modules/main";
import news from "./modules/news"
import user from "./modules/user"
import permission from "./modules/permission";

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    //模块化的store 对象
    main,
    news,
    user,
    permission
  },
  state:{
      web:'lab-web-server'
  },
  mutations:{
      chagen_web(state){
          state.web='dddd'
      }
  }
});

export default store;
