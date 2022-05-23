/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-11 22:17:02
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-22 15:34:16
 * @@param:
 */

const constantRouter = [
  /**
   * 需要登录验证的路由,但是没有权限要求
   */
  {
    path: "/dashboard", //需要放进常驻路由内
    redirect: "/dashboard/index/",
    component: () => import("@/pages/dashboard/layout/index.vue"),
    meta: {
      isLogin: true, //判断该路由是否需要登录
    },
    children: [
      {
        path: "index",
        name: "Dashboard",
        meta: {
          title: "首页",
          roles: ["admin", "editor"],
          //CMS: true, //是否是后台管理页面
          icon: "promotion",
        },
        component: () => import("@/pages/dashboard/dashboard.vue"),
      },
    ],
  },
  //重定向路由
  {
    path: "/redirect",
    component: () => import("@/pages/dashboard/layout/index.vue"),
    name: "redirct",
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/pages/dashboard/redirect/index.vue"),
      },
    ],
  },
];

export { constantRouter };
