/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-13 09:41:50
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 14:48:56
 * @@param:
 */
const peopleRoute = [
  {
    path: "/people",
    redirect: "index",
    component: () => import("@/pages/home/layout/index.vue"),
    meta: {
      title: "People",
      hidden: false, //控制是否显示该link
      header: true, //是否是导航链接
      // breadcrumbURL: false, //当访问该页面时，如果没有配置使用默认图片
      ShowBreadCrumn: true,
    },
    children: [
      {
        path: "index",
        name: "people",
        component: () => import("@/pages/home/people/index.vue"),
        meta: {
          title: "People",
          hidden: false, //控制是否显示该link
          header: true, //是否是导航链接
        },
      },
    ],
  },
];
export { peopleRoute };
