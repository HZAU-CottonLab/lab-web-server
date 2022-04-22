/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2021-09-19 19:34:35
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-22 16:32:17
 * @@param:
 */
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRouter } from "./constantRouter";
import { whiteRouter } from "./whiteRouter";
const router = createRouter({
  // mode: "hash",
  history: createWebHashHistory(),
  routes: [...whiteRouter, ...constantRouter],
});
export default router;
