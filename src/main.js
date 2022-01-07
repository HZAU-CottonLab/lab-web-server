/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-19 18:56:05
 * @LastEditors: zpliu
 * @LastEditTime: 2022-01-02 14:10:49
 * @@param: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routers/'
import store from './store/'

if (process.env.NODE_ENV === 'production') {
    //启用前端mock
    const { mockXHR } = require('../mock')
    mockXHR()
  }

const app = createApp(App)
app.use(App)
    .use(store)
    .use(ElementPlus)
    .use(router)
    .mount('#app')
