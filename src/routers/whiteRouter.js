/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-22 16:29:56
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 20:10:34
 * @@param: 不需要进行登录的路由
 */
const page404 = () => import("@/components/404.vue");
// const HomePage = () => import("@/pages/home/home.vue");
const LoginPage = () => import("@/pages/login.vue");
const DemoPage = () => import("@/components/demo.vue");
const peopleBrief = () => import("@/pages/people_brief");
const publication = () => import("@/pages/publication");
const test = () => import("@/components/test");
const editor = () => import("@/components/wangEditor");
const whiteRouter = [
  /**
   * 不需要登录验证的路由
   */
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/layout/index.vue"),
    redirect: "/index",
    meta: {
      // title: "Expand",
      hidden: false, //控制导航栏是否显示该link
      header: true, //是否是导航链接
    },
    children: [
      {
        path: "index",
        name: "home",
        component: ()=> import('@/pages/home/homePage/index.vue'),
        meta: {
          title: "Expand",
          hidden: false, //控制导航栏是否显示该link
          header: true, //是否是导航链接
        },
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: page404,
    meta: {
      title: "404",
      header: false, //是否是导航链接
    },
  },
  {
    path: "/demo",
    name: "demo",
    component: DemoPage,
    meta: {
      title: "demo",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: {
      title: "Login",
      hidden: false, //控制是否显示该link
      header: true, //是否是导航链接
    },
  },
  {
    path: "/people",
    name: "peopleBrief",
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
        component: peopleBrief,
        meta: {
          title: "People",
          hidden: false, //控制是否显示该link
          header: true, //是否是导航链接
        },
      },
      {
        path: "index2",
        name: "people2",
        component: page404,
        meta: {
          title: "people404",
          hidden: false, //控制是否显示该link
          header: true, //是否是导航链接
        },
      },
    ],
  },
  {
    path: "/publication",
    name: "publication",
    redirect: "/publication/index",
    component: () => import("@/pages/home/layout/index.vue"),
    meta: {
      title: "Publication",
      hidden: false, //控制是否显示该link
      header: true, //是否是导航链接, 导航栏遍历路由时会使用到该属性
      ShowBreadCrumn: true,
      breadcrumbURL:
        "https://btiscience.org/wp-content/uploads/IsmailCassavaAction.jpg", //当访问该页面时，及其子页面时，是否显示面包屑
    },
    children: [
      {
        path: "index",
        component: publication,
        meta: {
          title: "Publication",
          hidden: false,
          header: true,
        },
      },
      {
        path: "index2",
        component: page404,
        meta: {
          title: "Publication4",
          hidden: false,
          header: true,
        },
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
  {
    path: "/editor",
    name: "editor",
    component: editor,
  },
];
export { whiteRouter };
