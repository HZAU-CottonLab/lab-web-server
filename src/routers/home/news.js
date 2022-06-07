/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-13 17:33:05
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-06 17:10:58
 * @@param:
 */
const newsRoute = [
  {
    path: "/news",
    redirect: "index",
    component: () => import("@/pages/home/layout/index.vue"),
    meta: {
      title: "News",
      hidden: false, //控制是否显示该link
      header: true, //是否是导航链接
      // breadcrumbURL: false, //当访问该页面时，如果没有配置使用默认图片
      ShowBreadCrumn: true,
    },
    children: [
      {
        path: "index",
        name: "news",
        component: () => import("@/pages/home/homePage/news/index.vue"),
        meta: {
          title: "News&event",
          hidden: false, //控制是否显示该link
          header: true, //是否是导航链接
        },
      },
    ],
  },
];

export { newsRoute };
