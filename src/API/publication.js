/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-02 22:54:31
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-25 17:10:06
 * @@param:
 */
import request from "@/utils/axios";

export function get_publication_all(param) {
  // 请求已经发表文章列表
  return request({
    url: "/publication/all/",
    method: "get",
    data: param,
  });
}
export function get_publication_byId(param) {
  return request({
    url: "/publication/info/",
    method: "post",
    data: param,
  });
}

export function search_publication(param) {
  //进行文章搜索
  return request({
    url: "/publication/search/",
    method: "post",
    data: param,
  });
}

//TODO
export function delete_publication(param) {
  //进行文章删除
  return request({
    url: "/publication/delete/",
    method: "post",
    data: param,
  });
}
export function update_publication(param) {
  //进行文章信息更新
  return request({
    url: "/publication/update/",
    method: "post",
    data: param,
  });
}
export function add_publication(param) {
  //进行文章信息添加
  return request({
    url: "/publication/add/",
    method: "post",
    data: param,
  });
}
