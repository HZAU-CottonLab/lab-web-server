/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-03-29 14:37:52
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-02 09:30:34
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
export function register(param) {
  // console.log(param);
  // #* axios传参时候，对应的参数放在data项中
  return request({
    url: "/register",
    method: "post",
    data: param,
  });
}
export function PeopleItem(){
  //返回所有用户的信息
  return request({
    url: "/people-show",
    method: "get",
  });
}

