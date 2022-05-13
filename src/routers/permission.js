/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-12 10:13:52
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 09:36:28
 * @@param:
 */
// 前端路由权限验证
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import router from "@/routers"; //定义的路由对象
import store from "@/store"; //获取用户身份和token信息
import { getToken } from "@/utils/cookies";
import { whiteList } from "@/config/whiteList";
import { ElMessage } from "element-plus";
// 获取用户以及权限信息
// const userStore = store.state.user;

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.meta && to.meta.isLogin) {
    if (getToken()) {
      if (to.path === "/login") {
        // 如果登录，并准备进入 login 页面，则重定向到主页
        next({ path: "/dashboard" });
        NProgress.done();
      } else {
        if (store.state.user.roles.length === 0) {
          // 如果cookie中存在token，验证用户身份，动态的添加路由
          try {
            //获取用户的roles,在token存在的情况下;
            // 调用store中定义好的API,使用token进行认证
            /**
             * state.*
             * commit('user/logout','')
             * dispatch('user/getInfo') 获取用户信息
             */
            store.dispatch("user/getInfo").then((res) => {
              const roles = res.roles;
              //根据用户身份，设置当前可以访问的路由
              store.commit("permission/setRouter", roles);
              //动态添加可访问路由
              store.state.permission.dynamicRouter.forEach((route) => {
                router.addRoute(route);
              });
              // console.log("路由添加完成，开始next",store.state.permission.routes)
              // 确保添加路由已完成
              // 设置 replace: true, 因此导航将不会留下历史记录
              next({ ...to, replace: true });
            });
          } catch (error) {
            //使用当前token请求用户信息失败,重置token
            store.commit("user/logout");
            // ElMessage.error(err.message || 'Has Error')
            next("/login");
            NProgress.done();
          }
        } else {
          // 存在token和role数据，直接进行路由跳转；
          // console.log("sdasdasd",router.getRoutes())
          //! 初始登录时，不能设置roles，否则无法获取动态路由
          next();
        }
      }
    } else {
      //没有token的情况下,需要判断当前进入的路由是否需要登录；
      //查看to路由是否在白名单内，如果在则不需要登录就能访问；
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        //没有权限需要进行登录验证
        ElMessage({
          type: "error",
          message: "没有权限，请登录后查看",
        });
        next("/login");
        NProgress.done();
      }
    }
  } else {
    //不需要登录的路由
    next()
  }
});

router.afterEach(() => {
  NProgress.done();
});
