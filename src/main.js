/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-19 18:56:05
 * @LastEditors: zpliu
 * @LastEditTime: 2021-09-19 21:38:35
 * @@param: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routers/'
import store from './store/'



const app = createApp(App)
app.use(App)
    .use(store)
    .use(ElementPlus)
    .use(router)
    .mount('#app')
