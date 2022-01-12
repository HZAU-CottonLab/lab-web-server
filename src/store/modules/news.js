/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-01-12 12:43:22
 * @LastEditors: zpliu
 * @LastEditTime: 2022-01-12 13:04:49
 * @@param:
 */
import { getNewsList } from "@/API/news.js";
export default {
  namespaced: true,
  state: {
    newsData: {
      code: "",
      newsList: [],
    },
  },
  getters: {
    newsData: (state) => state.newsData,
  },
  mutations: {
    changeNew_Data(state, res) {
      state.newsData = res;
    },
  },
  actions: {
    get_newsData(context) {
      getNewsList().then((res) => {
        //console.log(res);
        context.commit("changeNew_Data", res);
      });
    },
  },
};
