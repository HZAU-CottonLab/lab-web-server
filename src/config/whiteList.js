/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-12 17:44:58
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 11:44:03
 * @@param:
 */
/** 免登录白名单
 * 具体参考 @/routers/whiteRouter.js
 */
/**
 * 获取router中定义好的路由白名单
 */
import { whiteRouter } from "@/routers/whiteRouter.js";
//* 获取其中定义的所有路径
import path from "path";
const whiteList = [];
const basePath = "";
const router_Path_list = (routers, basePath) => {
  routers.forEach((router) => {
    if (router.path) {
      whiteList.push(path.resolve(basePath, router.path));
    }
    if (router.children) {
      // 补全父路由的路径
      router_Path_list(router.children, router.path);
    }
  });
};
router_Path_list(whiteRouter, basePath);

export { whiteList };
