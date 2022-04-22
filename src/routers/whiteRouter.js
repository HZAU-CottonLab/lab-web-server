/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-22 16:29:56
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-22 16:30:58
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
    },
    {
      path: "/404",
      name: "404",
      component: page404,
    },
    {
      path: "/demo",
      name: "demo",
      component: DemoPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/people",
      name: "peopleBrief",
      component: peopleBrief,
    },
    {
      path: "/publication",
      name: "publication",
      component: publication,
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
    }
]
export {whiteRouter}