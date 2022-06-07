/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-01-12 12:43:22
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-07 16:36:12
 * @@param:
 */
import { getNewsList, getLatestNewsList } from "@/API/news.js";
export default {
  namespaced: true,
  state: {
    newsList: [],
  },
  actions: {
    get_all_newsData(context) {
      return new Promise((resolve) => {
        getNewsList().then((res) => {
          //console.log(res);
          if (res.data.code == 0) {
            context.state.newsList = res.data.info.content;
            resolve(true); //显示数据，并修改state中内容
          } else {
            resolve(false);
          }
        });
      });
    },
    get_news_by_id(context, id) {},
    get_lastest_news() {
      return new Promise((resolve) => {
        getLatestNewsList().then((res) => {
          resolve(res.data);
        });
      });
    },
  },
};
