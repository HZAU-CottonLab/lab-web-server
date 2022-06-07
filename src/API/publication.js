/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-02 22:54:31
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-07 22:35:12
 * @@param:
 */
import request from "@/utils/axios";

// 请求已经发表文章列表
export function get_publication(param) {
  return request({
    url: "/publication/",
    method: "get",
    data: param,
  });
}

//进行文章搜索
export function search_publication(param) {
  return request({
    url: "/publication/search",
    method: "post",
    data: param,
  });
}
