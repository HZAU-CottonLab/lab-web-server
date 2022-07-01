/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-06-07 10:02:30
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-28 19:26:43
 * @@param:
 */
import request from "@/utils/axios";

export function research_add(param) {
  return request({
    url: "/research/add/",
    method: "post",
    data: param,
  });
}
export function queryResearchById(param){
  return request({
    url:'research/info/',
    method:'post',
    data:param
  })
}

// 请求新闻列表
export function getResearchList(param) {
  //获取数据库中所有的research 信息
  return request({
    url: "/research/all/",
    method: "get",
    data:param,
  });
}

//TODO
export function updateResearchItem(param) {
  //根据关键字更新用户信息
  return request({
    url: "/research/update/",
    method: "post",
    data: param,
  });
}
export function deleteResearchItem(param) {
  //根据关键字删除用户信息
  return request({
    url: "/research/delete/",
    method: "post",
    data: param,
  });
}

export function checkResearchItem(param) {
  //修改单篇research的check状态
  return request({
    url: "/research/check/",
    method: "post",
    data: param,
  });
}

//TODO
// export function getCarouselsList(param) {
//   //获取置顶的所有新闻信息
//   return request({
//     url: "/latest/all",
//     method: "get",
//     param,
//   });
// }
// export function cancleCheckNews(param) {
//   //取消对应新闻的置顶
//   return request({
//     url: "/latest/delete",
//     method: "post",
//     param,
//   });
// }
// export function addLatestNews(param) {
//   //将新闻置顶
//   return request({
//     url: "/news/check",
//     method: "post",
//     data: param,
//   });
// }
