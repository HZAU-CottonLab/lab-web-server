/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-14 16:55:20
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-20 11:30:03
 * @@param:
 */
const publicationRoute = [
  {
    path: "/dashboard/article/",
    redirect: "/dashboard/article/index/",
    component: () => import("@/pages/dashboard/layout/index.vue"),
    name: "dashboard-article",
    meta: {
      title: "文章",
      icon: "article",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      alwaysShow: true, // 将始终显示根菜单
      isLogin: true,
    },
    children: [
      //子路由依赖于父路由布局
      {
        path: "index",
        component: () => import("@/pages/dashboard/publication/index.vue"),
        name: "dashboard-article-show",
        meta: {
          title: "文章管理",
          roles: ["admin", "editor"], // 或者在子导航中设置角色
        },
      },
      {
        path: "editor",
        component: () =>
          import("@/pages/dashboard/publication/publication-editor.vue"),
        name: "article-editro",
        meta: {
          title: "文章修改",
          roles: ["admin"], // 或者在子导航中设置角色
          hidden: true,
        },
      },
      {
        path: "add",
        component: () =>
        import("@/pages/dashboard/publication/publication-editor.vue"),
        name: "dashboard-article-add",
        meta: {
          title: "文章添加",
          roles: ["admin"], // 或者在子导航中设置角色
          hidden: true,
        },
      },
    ],
  },
];

export { publicationRoute };
