/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-14 16:55:20
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-09 22:54:12
 * @@param:
 */
const newsRoute = [
  {
    path: "/dashboard/news/",
    redirect: "/dashboard/news/index/",
    component: () => import("@/pages/dashboard/layout/index.vue"),
    name: "dashboard-news",
    meta: {
      title: "News&Event",
      icon: "news",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      alwaysShow: true, // 将始终显示根菜单
      isLogin: true,
    },
    children: [
      //子路由依赖于父路由布局
      {
        path: "index",
        component: () => import("@/pages/dashboard/news/index.vue"),
        name: "dashboard-news-show",
        meta: {
          title: "新闻管理",
          roles: ["admin", "editor"], // 或者在子导航中设置角色
        },
      },
      {
        path: "add",
        component: () => import("@/pages/dashboard/news/news-editor.vue"),
        name: "dashboard-news-add",
        meta: {
          title: "新闻添加",
          roles: ["admin"], // 或者在子导航中设置角色
        },
      },
      {
        path: "editor",
        component: () => import("@/pages/dashboard/news/news-editor.vue"),
        name: "dashboard-news-editor",
        meta: {
          title: "新闻编辑",
          roles: ["admin"], // 或者在子导航中设置角色
          hidden: true,
        },
      },
      {
        path: "latest",
        component: () => import("@/pages/dashboard/news/latest/index.vue"),
        name: "dashboard-news-latest",
        meta: {
          title: "置顶新闻",
          roles: ["admin"], // 或者在子导航中设置角色
        },
      },
    ],
  },
];

export { newsRoute };
