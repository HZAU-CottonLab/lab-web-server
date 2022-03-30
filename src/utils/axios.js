/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-20 11:15:02
 * @LastEditors: zpliu
 * @LastEditTime: 2022-03-29 20:22:57
 * @@param: 
 */
import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import { ElMessage } from 'element-plus'
Nprogress.configure({ showSpinner: false })
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 12000,
  headers: {
    'content-Type': 'application/json',
    Accept: 'application/json'
  }
})
//请求拦截器
request.interceptors.request.use(
  config => {
    Nprogress.start()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//响应拦截器
request.interceptors.response.use(
  response => {
    Nprogress.done()
    // console.log(response)
    return response
  },
  error => {
    Nprogress.done()
    ElMessage.error({
      message: error.message
    })
    return Promise.reject(error)
  }
)
export default request