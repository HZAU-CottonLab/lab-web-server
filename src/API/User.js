/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-03-29 14:37:52
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-23 21:58:50
 * @@param:
 */
import request from "@/utils/axios";
// 请求新闻列表
export function login(param) {
  //用户登录并设置token
  return request({
    url: "/user/login/",
    method: "POST",
    data: param,
  });
}

export function logoutBackend(param) {
  return request({
    url: "user/logout/",
    method: "get",
    data: param,
  });
}

export function userInfoRequest(param) {
  /**
   * 使用当前自带的token信息请求后端
   */
  return request({
    url: "/user/info",
    method: "post",
    data: param,
  });
}
export function userRoles(param) {
  /**
   * 使用当前自带的token信息请求后端
   */
  return request({
    url: "/user/roles/",
    method: "post",
    data: param,
  });
}
export function PeopleItem() {
  //返回所有用户的信息
  return request({
    url: "/people-show",
    method: "get",
  });
}
export function TeamItem() {
  //获得团队中所有老师信息
  return request({
    url: "/user/teachers/",
    method: "get",
  });
}

export function get_personInfo(param) {
  //根据用户ID，获得用户信息,
  return request({
    url: "/user/info/",
    method: "post",
    data: param,
  });
}

//TODO
export function register(param) {
  // console.log(param);
  //注册并添加新的用户信息
  return request({
    url: "/register",
    method: "post",
    data: param,
  });
}

export function person_delete(param) {
  //删除用户信息
  return request({
    url: "/person/delete",
    method: "post",
    data: param,
  });
}

export function personInfo_update(param) {
  //更新用户信息
  return request({
    url: "/user/update/",
    method: "post",
    data: param,
  });
}
