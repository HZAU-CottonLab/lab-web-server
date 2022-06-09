/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-03-29 16:20:12
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-09 11:41:45
 * @@param:
 */
import {
  login,
  register,
  userInfoRequest,
  get_personInfo,
} from "@/API/User.js";
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
    personInfo: {},
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
    del_infoTag(state, index) {
      //删除对应的标签
      state.personInfo.infoDetail.splice(index, 1);
    },
    add_infoTag(state, TagName) {
      state.personInfo.infoDetail.push({
        tagName: TagName,
        vHtml: "",
      });
    },
    set_vhtml(state, vData) {
      const { vhtml, index } = vData;
      state.personInfo.infoDetail[index]["vHtml"] = vhtml;
    },
    set_basicInfo(state, info) {
      state.personInfo.basic = info;
      console.log(state.personInfo);
    },
    clearPersonInfo(state) {
      state.personInfo = {
        basic: {
          name: "",
          imgURL: "", //头像
          // https://faculty.hzau.edu.cn/_resources/group1/M00/00/0A/00WOfWJf3QKAc56fAAFaf40m_Wk746.png?randomid=1651545348966
          sex: "",
          peopleType: "",
          jobTitle: "", //职位
          recruit: "", //招生类型
          contact: "", //联系方式
          officeSite: "", //教师办公地点
          teacher: "", //导师编号
        },
        infoDetail: [
          {
            tagName: "个人简介",
            vHtml: "", //回显内容的标签一定要是正确的
          },
        ],
      }; //设置空的内容
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
       * 使用当前token获取用户的身份信息
       */
      const parament = {
        token: context.state.token,
      };
      return new Promise((resolve) => {
        userInfoRequest(parament).then((res) => {
          context.state.roles = res.data.roles;
          resolve(res.data);
        });
      });
    },
    set_personInfo(context) {
      //向后端请求个人信息的数据
      return new Promise((resolve) => {
        get_personInfo().then((res) => {
          context.state.personInfo = res.data.info;
          resolve(0);
        });
      });
    },
  },
};
