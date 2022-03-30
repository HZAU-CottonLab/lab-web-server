/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-03-29 16:22:49
 * @LastEditors: zpliu
 * @LastEditTime: 2022-03-30 19:30:58
 * @@param:
 */
module.exports = [
  {
    url: "/login",
    type: "post",
    response: (config) => {
      // 判断传进的post数据是否验证成功
      const { account, password, loginStatus } = config.body;
      if (account === "zpliu" && password === "111") {
        return {
          code: 0,
          status: 200,
          info: {
            username: "zpliu",
            loginStatus: true,
            message: "authenticated",
            // config
          },
        };
      } else {
        return {
          code: 1,
          status: 200,
          info: {
            username: "",
            loginStatus: false,
            message: "authenticated failed",
            // config
          },
        };
      }
    },
  },
  {
    url: "/register",
    type: "post",
    response: (config) => {
      const { account, password, loginStatus } = config.body;
      return {
        code: 0,
        status: 2002,
        info: {
          message: "注册成功",
        },
      };
    },
  },
];
