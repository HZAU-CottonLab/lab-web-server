/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-11 22:17:02
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-11 22:20:44
 * @@param: 
 */
const page404 = () => import("@/components/404.vue")
const HomePage = () => import("@/pages/home/home.vue")
const LoginPage = () => import("@/pages/login.vue")
const DemoPage = () => import("@/components/demo.vue")
const DashboardPage = () => import("@/pages/dashboard.vue")
const peopleBrief =()=> import("@/pages/people_brief")
const publication =()=> import("@/pages/publication")
const test= ()=> import("@/components/test")
const editor= ()=> import("@/components/wangEditor")
const constantRouter = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/404",
    name: "404",
    component: page404
  },
  {
    path: "/demo",
    name: "demo",
    component: DemoPage
  },
  {
    path:"/login",
    name:'login',
    component:LoginPage
  },{
    path:'/dashboard',
    name:'dashboard',
    component:DashboardPage
  },{
    path:"/people",
    name:'peopleBrief',
    component:peopleBrief
  },{
    path:"/publication",
    name:'publication',
    component:publication
  },{
    path:"/test",
    name:'test',
    component:test
  },{
    path:"/editor",
    name:'editor',
    component:editor
  }
]

export {constantRouter}