/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-13 09:41:50
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-31 22:20:53
 * @@param:
 */
const peopleRoute = [
  {
    path: "/people",
    redirect: "index",
    name: "people-show",
    component: () => import("@/pages/home/layout/index.vue"),
    meta: {
      title: "People",
      hidden: false, //控制在header是否显示该link
      header: true, //是否是导航链接
      // breadcrumbURL: false, //当访问该页面时，如果没有配置使用默认图片
      ShowBreadCrumn: true,
    },
    children: [
      {
        path: "index",
        name: "team-show",
        component: () => import("@/pages/home/people/index.vue"),
        meta: {
          title: "Our Team",
          hidden: false, //控制是否显示该link
          header: true, //是否是导航链接
        },
      },
      //不同类型的数据
      {
        path: "teacher",
        name: "teacher",
        component: () => import("@/pages/home/people/index.vue"),
        meta: {
          title: "Teacher",
          hidden: false, //控制是否显示该link
          header: true, //是否是导航链接
          anchro: 1, //路由跳转携带的锚点
        },
      },
      {
        path: "postdoctor",
        name: "postdoctor",
        component: () => import("@/pages/home/people/index.vue"),
        meta: {
          title: "Postdoctoral",
          hidden: false, //控制是否显示该link
          header: true, //是否是导航链接
          anchro: 2, //路由跳转携带的锚点
        },
      },
      {
        path: "PhD",
        name: "PhD",
        component: () => import("@/pages/home/people/index.vue"),
        meta: {
          title: "PhD Student",
          hidden: false, //控制是否显示该link
          header: true, //是否是导航链接
          anchro: 3, //路由跳转携带的锚点
        },
      },
      {
        path: "master",
        name: "master",
        component: () => import("@/pages/home/people/index.vue"),
        meta: {
          title: "Graduate Student",
          hidden: false, //控制是否显示该link
          header: true, //是否是导航链接
          anchro: 3, //路由跳转携带的锚点
        },
      },
      {
        path: "person",
        name: "person",
        component: () => import("@/pages/home/people/personInfo.vue"),
        meta: {
          title: "Person",
          hidden: true, //控制是否显示该link
          header: false, //是否是导航链接
        },
      },
    ],
  },
];
export { peopleRoute };
