/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-03-29 16:22:49
 * @LastEditors: zpliu
 * @LastEditTime: 2022-07-06 09:13:41
 * @@param:
 */

/**
 * 设置用户的简短信息
 */

const peopleInfo = require("./peopleInfo");
module.exports = [
  {
    url: "/user/login/",
    type: "post",
    response: (config) => {
      // 判断传进的post数据是否验证成功
      const { email, password } = config.body;
      console.log(config.body);
      if (email === "zpliu" && password === "111") {
        return {
          code: 0,
          status: 200,
          accessToken: "1111321321321",
          roles: ["admin"],
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
          accessToken: "2223333331",
          roles: ["editor"],
          info: {
            username: "",
            loginStatus: true,
            message: "authenticated failed",
            // config
          },
        };
      }
    },
  },
  {
    url: "/user/register/",
    type: "post",
    response: (config) => {
      const { account, password, loginStatus } = config.body;
      return {
        code: 0,
        status: 200,
        info: {
          message: "注册成功",
        },
      };
    },
  },
  {
    url: "/user/info",
    type: "post",
    response: (config) => {
      // 判断传进的post数据是否验证成功
      const { token } = config.body;
      // console.log(account, password)
      if (token == "1111321321321") {
        return {
          code: 0,
          status: 200,
          accessToken: "1111321321321",
          roles: ["admin"],
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
          accessToken: "2223333331",
          roles: ["editor"],
          info: {
            username: "",
            loginStatus: true,
            message: "authenticated failed",
            // config
          },
        };
      }
    },
  },
  {
    url: "/user/roles/",
    type: "post",
    response: (config) => {
      // 判断传进的post数据是否验证成功
      const { token } = config.body;
      // console.log(account, password)
      if (token == "1111321321321") {
        return {
          code: 0,
          roles: ["admin"],
        };
      } else {
        return {
          code: 0,
          roles: ["editor"],
        };
      }
    },
  },

  


  {
    url: "/user/team/",
    type: "get",
    response: (config) => {
      return {
        code: 0,
        status: 200,
        info: peopleInfo.people_brif_info,
      };
    },
  },
  {
    url: "/user/teachers/",
    type: "get",
    response: (config) => {
      return {
        code: 0,
        status: 200,
        info: peopleInfo.team_teacher_info,
      };
    },
  },
  {
    url: "/user/info",
    type: "post",
    response: (config) => {
      return {
        code: 0,
        status: 200,
        info: peopleInfo.testInfo, //个人信息展示
      };
    },
  },
  {
    url: "/user/logout/",
    type: "get",
    response: (config) => {
      return {
        code: 0,
        status: 200,
      };
    },
  },
];
