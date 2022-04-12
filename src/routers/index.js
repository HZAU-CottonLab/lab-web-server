/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2021-09-19 19:34:35
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-11 22:18:55
 * @@param:
 */
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRouter } from "./constantRouter";
const router = createRouter({
  // mode: "hash",
  history: createWebHashHistory(),
  routes: [...constantRouter],
});
export default router;
