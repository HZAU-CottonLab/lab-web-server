/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-11 22:17:02
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 09:35:16
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
    children: [
      {
        path: "index",
        name: "Dashboard",
        meta: {
          title: "首页",
          roles: ["admin", "editor"],
          //CMS: true, //是否是后台管理页面
          icon:"promotion",
        },
        component: () => import("@/pages/dashboard/dashboard.vue"),
      },
    ],
  },
];

export { constantRouter };
