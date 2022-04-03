/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-02 22:54:31
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-03 08:37:53
 * @@param:
 */
import request from "@/utils/axios";

// 请求已经发表文章列表
export function get_publication(param) {
  return request({
    url: "/publication",
    method: "get",
    data: param,
  });
}
