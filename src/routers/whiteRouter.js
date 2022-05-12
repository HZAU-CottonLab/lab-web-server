/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-22 16:29:56
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 11:38:16
 * @@param: 不需要进行登录的路由
 */
const page404 = () => import("@/components/404.vue");
const HomePage = () => import("@/pages/home/home.vue");
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
    component: HomePage,
    meta: {
      title: "Expand",
      hidden: false, //控制导航栏是否显示该link
      header: true, //是否是导航链接
    },
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
    component: peopleBrief,
    meta: {
      title: "People",
      hidden: false, //控制是否显示该link
      header: true, //是否是导航链接
    },
  },
  {
    path: "/publication",
    name: "publication",
    redirect: "/publication/index",
    component: publication,
    meta: {
      title: "成果展示",
      hidden: false, //控制是否显示该link
      header: true, //是否是导航链接
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
        component: publication,
        meta: {
          title: "Publication2",
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
