/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-03-29 14:37:52
 * @LastEditors: zpliu
 * @LastEditTime: 2022-03-29 20:15:14
 * @@param:
 */
import request from "@/utils/axios";
// 请求新闻列表
export function login(param) {
  // console.log(param);
  // #* axios传参时候，对应的参数放在data项中
  return request({
    url: "/login",
    method: "post",
    data: param,
  });
}
