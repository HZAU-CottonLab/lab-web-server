/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-06-07 10:02:30
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-07 16:34:12
 * @@param:
 */
import request from "@/utils/axios";
// 请求新闻列表
export function getResearchList(param) {
  //获取数据库中所有的news信息
  return request({
    url: "/research/",
    method: "get",
    param,
  });
}
export function getCarouselsList(param) {
  return request({
    url: "/carousel/",
    method: "get",
    param,
  });
}
