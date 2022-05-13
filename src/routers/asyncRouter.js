/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-11 22:29:49
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 09:34:02
 * @@param:
 */

const asyncRouter = [
  /**
   * 不同权限的动态路由
   */
  {
    path: "/dashboard/article/",
    redirect: "/dashboard/article/index/",
    component: () => import("@/pages/dashboard/layout/index.vue"),
    name: "article",
    meta: {
      title: "文章",
      icon: "article",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      alwaysShow: true, // 将始终显示根菜单
      isLogin: true,
    },
    children: [
      {
        path: "index",
        component: () => import("@/components/test"),
        name: "article-show",
        meta: {
          title: "文章条目显示",
          roles: ["admin", "editor"], // 或者在子导航中设置角色
        },
      },
      {
        path: "editor",
        component: () => import("@/components/test"),
        name: "article-editro",
        meta: {
          title: "管理员权限",
          roles: ["admin"], // 或者在子导航中设置角色
        },
      },
      {
        path: "add",
        component: () => import("@/components/test"),
        name: "article-add",
        meta: {
          title: "添加",
          roles: ["admin"], // 或者在子导航中设置角色
        },
      },
    ],
  },
];
export { asyncRouter };
