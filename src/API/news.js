/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-01-02 15:01:51
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-25 16:30:19
 * @@param:
 */
import request from "@/utils/axios";
// 请求新闻列表
export function getNewsList(param) {
  //获取数据库中所有的news信息
  return request({
    url: "/news/all/",
    method: "get",
    data: param,
  });
}
export function getNews_byId(param) {
  //获取单片new列表信息
  return request({
    url: "/news/info/",
    method: "post",
    data: param,
  });
}

export function getLatestNewsList(param) {
  //获取数据库中所有的news信息
  return request({
    url: "/news/latest/",
    method: "get",
    data: param,
  });
}
export function searchNews(param) {
  //获取数据库中所有的news信息
  return request({
    url: "/news/search/",
    method: "post",
    data: param,
  });
}

//TODO 改变新闻的状态
export function checkNews(param) {
  //改变新闻的审核状态
  return request({
    url: "/news/check/",
    method: "post",
    data: param,
  });
}
export function deleteNews(param) {
  //删除新闻
  return request({
    url: "/news/delete/",
    method: "post",
    data: param,
  });
}
export function updateNews(param) {
  //新闻内容更新
  return request({
    url: "/news/update/",
    method: "post",
    data: param,
  });
}

export function addNews(param) {
  //根据新闻ID，添加新闻
  return request({
    url: "/news/add/",
    method: "POST",
    data: param,
  });
}
