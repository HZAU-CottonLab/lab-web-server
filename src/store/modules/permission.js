/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-12 16:26:39
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-08 19:17:51
 * @@param:
 */
/**
 * 根据用户权限动态的添加路由
 * ? 第一类时不分权限的路由
 * ? 第二类是需要区分权限的路由
 */
import { constantRouter } from "@/routers/constantRouter";
import { asyncRouter } from "@/routers/asyncRouter";
// import router from "../../routers";

//判断当前roles在指定router上是否有权限

const hasPermission = (roles, router) => {
  if (router.meta && router.meta.roles) {
    //使用router的meta项进行判断
    return roles.some((role) => {
      if (router.meta?.roles != undefined) {
        return router.meta.roles.includes(role);
      } else {
        return false;
      }
    });
  } else {
    // meta没有配置时，默认所有人都可以访问
    return true;
  }
};

const filterAsyncRouter = (routers, roles) => {
  /**
   * 根据用户身份过滤路由
   */
  const resRouter = []; //过滤后剩下的路由
  routers.forEach((router) => {
    const r = { ...router };
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRouter(r.children, roles);
      }
      resRouter.push(r);
    }
  });
  return resRouter;
};


export default {
  namespaced: true,
  state: {
    routes: [],
    dynamicRouter: [],
  },
  mutations: {
    setRouter(state, roles) {
      //检查身份，设置动态路由
      let accessdRouter;
      if (roles.includes(["admin"])) {
        accessdRouter = asyncRouter;
      } else {
        accessdRouter = filterAsyncRouter(asyncRouter, roles);
      }
      state.routes = constantRouter.concat(accessdRouter);
      state.dynamicRouter = accessdRouter;
    },
  },
};
