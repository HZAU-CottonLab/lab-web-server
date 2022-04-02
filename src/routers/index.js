/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-19 19:34:35
 * @LastEditors: zpliu
 * @LastEditTime: 2022-03-31 13:24:50
 * @@param: 
 */
import { createRouter, createWebHashHistory } from "vue-router"
const page404 = () => import("@/components/404.vue")
const HomePage = () => import("@/pages/home/home.vue")
const LoginPage = () => import("@/pages/home/login.vue")
const DemoPage = () => import("@/components/demo.vue")
const DashboardPage = () => import("@/pages/home/dashboard.vue")
const peopleBrief =()=> import("@/pages/people_brief")
const routes = [
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
  }
]
const router = createRouter({
  // mode: "hash",
  history: createWebHashHistory(),
  routes
})
export default router