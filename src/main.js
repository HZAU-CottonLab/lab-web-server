/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-19 18:56:05
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-04 21:36:19
 * @@param: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import router from './routers/'
import store from './store/'

//loading状态
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css'

import 'vue3-carousel/dist/carousel.css';

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
    .use(VueLoading)
    .mount('#app')
