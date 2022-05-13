/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-13 17:33:05
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 17:34:25
 * @@param:
 */
const researchRoute = [
  {
    path: "/research",
    redirect: "index",
    component: () => import("@/pages/home/layout/index.vue"),
    meta: {
      title: "Research",
      hidden: false, //控制是否显示该link
      header: true, //是否是导航链接
      // breadcrumbURL: false, //当访问该页面时，如果没有配置使用默认图片
      ShowBreadCrumn: true,
    },
    children: [
      {
        path: "index",
        name: "research",
        component: () => import("@/components/404.vue"),
        meta: {
          title: "Research Area",
          hidden: false, //控制是否显示该link
          header: true, //是否是导航链接
        },
      },
    ],
  },
];

export { researchRoute };
