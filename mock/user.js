/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-03-29 16:22:49
 * @LastEditors: zpliu
 * @LastEditTime: 2022-03-29 22:21:42
 * @@param:
 */
module.exports = [
  {
    url: "/login",
    type: "post",
    response: (config) => {
      // 判断传进的post数据是否验证成功
      const {account, password,loginStatus} = config.body;
      if (account === "zpliu" && password === "111") {
        return {
          code: 0,
          status: 200,
          info: {
            username:'zpliu',
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
            username:'',
            loginStatus: false,
            message: "authenticated failed",
            // config
          },
        };
      }
    },
  },
];
