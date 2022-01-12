/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2021-09-19 20:14:36
 * @LastEditors: zpliu
 * @LastEditTime: 2022-01-12 12:51:44
 * @@param:
 */
//-------------------------------
//? 整合多个模块成一个store对象
//-------------------------------

import Vuex from "vuex";

// const context=require.context('./modules',false,/\.js$/)
// const moduleStores={}
// context.keys().forEach(key => {
//     // 获取读取到的文件名字并且截取
//     const fileName = key.slice(2, -3);

//     //通过 context(key)导出文件内容
//     const fileModule = context(key).default

//     moduleStores[fileName] = {
//         ...fileModule
//     }
// })
import main from "./modules/main";
import news from "./modules/news"

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    //模块化的store 对象
    main,
    news
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
