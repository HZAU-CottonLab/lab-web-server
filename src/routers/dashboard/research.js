/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-14 16:55:20
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-09 10:58:18
 * @@param:
 */
const researchRoute = [
  {
    path: "/dashboard/research/",
    redirect: "/dashboard/research/index/",
    component: () => import("@/pages/dashboard/layout/index.vue"),
    name: "dashboard-research",
    meta: {
      title: "Research",
      icon: "research",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      alwaysShow: true, // 将始终显示根菜单
      isLogin: true,
    },
    children: [
      //子路由依赖于父路由布局
      {
        path: "index",
        component: () => import("@/pages/dashboard/research/index.vue"),
        name: "dashboard-research-show",
        meta: {
          title: "研究管理",
          roles: ["admin", "editor"], // 或者在子导航中设置角色
        },
      },
      {
        path: "add",
        component: () =>
          import("@/pages/dashboard/research/research-editor.vue"),
        name: "dashboard-research-add",
        meta: {
          title: "研究添加",
          roles: ["admin"], // 或者在子导航中设置角色
        },
      },
    ],
  },
];

export { researchRoute };
