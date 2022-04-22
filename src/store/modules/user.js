/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-03-29 16:20:12
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-22 16:11:31
 * @@param:
 */
import { login, register, userInfoRequest } from "@/API/User.js";
import { getToken, removeToken, setToken } from "@/utils/cookies";

export default {
  namespaced: true,
  state: {
    username: "",
    account: "",
    password: "",
    loginStatus: false, //用于判断用户是否处于登录状态
    token: getToken() || "", //用于判断用户是否登录的token
    roles: [],
  },
  getters: {
    username: (state) => state.username,
    loginStatus: (state) => state.loginStatus,
  },
  mutations: {
    set_account(state, account) {
      state.account = account;
    },
    set_password(state, password) {
      state.password = password;
    },
    /** 登出 */
    logout(state) {
      removeToken();
      state.token = "";
      state.roles = [];
    },
  },
  actions: {
    authenticate(context, payload) {
      //payload 为form表单参数
      // console.log(getToken(),'111')
      // console.log(payload)
      return new Promise((resolve) => {
        login(payload).then(
          // context为state拷贝
          (res) => {
            //修改state中的内容
            context.state.username = res.data.info.username;
            context.state.loginStatus = res.data.info.loginStatus;
            /* 登录请求完成后设置token*/
            context.state.token = res.data.accessToken;
            // context.state.roles = res.data.roles;
            setToken(res.data.accessToken);
            //异步完成请求后，返回登录状态
            resolve(res.data.info.loginStatus);
          }
        );
      });
    },
    siginup(context, payload) {
      /**
       * 进行注册请求
       */
      return new Promise((resolve) => {
        register(payload).then((res) => {
          resolve(res.data);
        });
      });
    },
    getInfo(context) {
      /**
       * 使用当前token获取用户信息
       */
      const parament={
        token:context.state.token
      }
      return new Promise((resolve) => {
        userInfoRequest(parament).then((res) => {
          context.state.roles = res.data.roles;
          resolve(res.data);
        });
      });
    },
  },
};
