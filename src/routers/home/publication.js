/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-13 09:40:35
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 19:49:01
 * @@param:
 */
const publicationRoute = [
  {
    path: "/achievement",
    name: "achievement",
    redirect: "/achievement/index",
    component: () => import("@/pages/home/layout/index.vue"),
    meta: {
      title: "Achievement",
      hidden: false, //控制是否显示该link
      header: true, //是否是导航链接, 导航栏遍历路由时会使用到该属性
      ShowBreadCrumn: true,
      breadcrumbURL:
        "https://btiscience.org/wp-content/uploads/IsmailCassavaAction.jpg", //当访问该页面时，及其子页面时，是否显示面包屑
    },
    children: [
      {
        path: "index",
        name: "publication",
        component: () => import("@/pages/home/publication/index.vue"),
        meta: {
          title: "Publication",
          hidden: false,
          header: true,
        },
      },
      {
        path: "patent",
        name: "patent",
        component: () => import("@/components/404.vue"),
        meta: {
          title: "Patent",
          hidden: false,
          header: true,
        },
      },
    ],
  },
];
export { publicationRoute };
