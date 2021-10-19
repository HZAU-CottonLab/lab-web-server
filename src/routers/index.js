/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-19 19:34:35
 * @LastEditors: zpliu
 * @LastEditTime: 2021-09-22 14:28:38
 * @@param: 
 */
import { createRouter, createWebHashHistory } from "vue-router"
const page404 = () => import("@/components/404.vue")
const HomePage = () => import("@/pages/home/home.vue")
const LoginPage = () => import("@/pages/home/login.vue")
const DemoPage = () => import("@/components/demo.vue")
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
  }
]
const router = createRouter({
  // mode: "hash",
  history: createWebHashHistory(),
  routes
})
export default router