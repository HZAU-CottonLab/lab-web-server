/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-01-02 15:01:51
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-07 22:54:31
 * @@param:
 */
import request from "@/utils/axios";
// 请求新闻列表
export function getNewsList(param) {
  //获取数据库中所有的news信息
  return request({
    url: "/news/all",
    method: "get",
    data: param,
  });
}
export function getLatestNewsList(param) {
  //获取数据库中所有的news信息
  return request({
    url: "/news/latest",
    method: "get",
    data: param,
  });
}
export function searchNews(param) {
  //获取数据库中所有的news信息
  return request({
    url: "/news/search",
    method: "post",
    data: param,
  });
}
