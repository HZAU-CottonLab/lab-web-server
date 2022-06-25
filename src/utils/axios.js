/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2021-09-20 11:15:02
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-25 11:37:06
 * @@param:
 */
import axios from "axios";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import Qs from "qs";
import { ElMessage } from "element-plus";
Nprogress.configure({ showSpinner: false });
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: 'http://127.0.0.1:8000/',
  // baseURL: "/api",
  timeout: 4000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    // "Content-Type": "application/json;charset=utf-8",
    // "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
  transformRequest: [
    function(data) {
      return Qs.stringify(data);
    },
  ],
});
//请求拦截器
request.interceptors.request.use(
  (config) => {
    Nprogress.start();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//响应拦截器
request.interceptors.response.use(
  (response) => {
    Nprogress.done();
    // console.log(response)
    if (response.data.errno != 0) {
      ElMessage.error({
        message: response.data.message,
      });
      return Promise.reject(1);
    }
    return response;
  },
  (error) => {
    Nprogress.done();
    ElMessage.error({
      message: error.message,
    });
    return Promise.reject(error);
  }
);
export default request;
