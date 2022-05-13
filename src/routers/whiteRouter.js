/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-22 16:29:56
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 10:48:47
 * @@param: 不需要进行登录的路由
 */
/**
 * todo meta 参数说明:
 * *isLogin: 该路由是否需要进行登录验证@Boolean
 * *title: 页面中显示的标题 @string
 * *roles: 路由所属权限@Array
 * *icon: 图标@String
 * *alwaysShow: 是否显示根路由 @Boolean
 * *hidden 导航栏中是否显示该路由，即使有权限 @Boolean
 * *header 是否在home页面的menu中放置该路由 @Boolean
 * *ShowBreadCrumn home页面中，跳转到该路由时是否展示面包屑组件@Boolean
 * *breadcrumbURL 面包屑组件中，背景图片地址@String
 */

import { publicationRoute } from "./home/publication.js";
import { peopleRoute } from "./home/people.js";
import { testRoute } from "./home/test.js";
let whiteRouter = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/layout/index.vue"),
    redirect: "/index",
    meta: {
      // title: "Expand",
      hidden: false, //控制导航栏是否显示该link
      header: true, //是否是导航链接
    },
    children: [
      {
        path: "index",
        component: () => import("@/pages/home/homePage/index.vue"),
        meta: {
          title: "Expand",
          hidden: false, //控制导航栏是否显示该link
          header: true, //是否是导航链接
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    redirect: "/login/index",
    component: () => import("@/pages/home/layout/index.vue"),
    meta: {
      title: "Login",
      hidden: false, //控制是否显示该link
      header: true, //是否是导航链接
    },
    children: [
      {
        path: "index",
        component: () => import("@/pages/home/login/index.vue"),
        meta: {
          title: "Login",
          hidden: false, //控制导航栏是否显示该link
          header: true, //是否是导航链接
        },
      },
    ],
  },
];

whiteRouter = whiteRouter.concat(peopleRoute);
whiteRouter = whiteRouter.concat(publicationRoute);
whiteRouter = whiteRouter.concat(testRoute);
/**
 *! 404守卫路由
 */
whiteRouter = whiteRouter.concat([
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/components/404.vue"),
    meta: {
      title: "404",
      header: false, //是否是导航链接
    },
  },
]);

export { whiteRouter };
