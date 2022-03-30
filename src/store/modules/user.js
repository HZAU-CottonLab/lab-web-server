/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-03-29 16:20:12
 * @LastEditors: zpliu
 * @LastEditTime: 2022-03-30 19:34:23
 * @@param:
 */
/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-01-12 12:43:22
 * @LastEditors: zpliu
 * @LastEditTime: 2022-01-12 13:04:49
 * @@param:
 */
import { login, register } from "@/API/User.js";
export default {
  namespaced: true,
  state: {
    username: "",
    account: "",
    password: "",
    loginStatus: false, //用于判断用户是否处于登录状态
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
  },
  actions: {
    authenticate(context, payload) {
      //payload 为form表单参数
      return new Promise((resolve) => {
        login(payload).then(
          // context为state拷贝
          (res) => {
            //修改state中的内容
            context.state.username = res.data.info.username;
            context.state.loginStatus = res.data.info.loginStatus;
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
  },
};
