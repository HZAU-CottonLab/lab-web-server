<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-19 18:53:05
 * @LastEditors: zpliu
 * @LastEditTime: 2021-09-21 20:04:14
 * @@param: 
-->

# lab-web-server 

# 1.创建项目
> 使用默认的present设置vue项目
```bash
npm creat lab-web-server
#! 全局变量配置文件
touch .env.production
touch .env.development
#! 安装sass插件
 npm i sass-loader@7.3.1 node-sass@4.14.1 -D -s 
```


## 1.1 vuex使用
> 参考 https://vuex.vuejs.org/guide/
>参考  https://juejin.cn/post/6981329984811958280
> 数据获取 https://www.cnblogs.com/aidixie/p/14977850.html
> 参考 https://juejin.cn/post/6972334587875688455#heading-2
> 子module不再需要重新创建 https://stackoverflow.com/questions/47433780/vuex-modules-issue-with-mapgetters-getters-should-be-function

```javascript
 #! 主要版本问题
  vue@3.0.0
  vuex@4.0.0
 #! 模块化后引用数据
 this.$store.state.main.count
 #! 在计算属性中批量获取vuex数据
     ...mapState({
      count:state=>state.main.count,
      size:state=>state.main.size
      })
 #! 修改数据
     ...mapMutations({
      increment: (commit) => commit("main/increment"),
    }),
```
## 1.2 axiso配置前端请求

```javascrpt
    #! 使用进度条
    import Nprogress from 'nprogress'
    import 'nprogress/nprogress.css'
    //请求拦截器时使用
    Nprogress.start()
    //响应拦截器
    Nprogress.end()
```

## 1.3 使用加载罩

> 参考  https://github.com/moyoujun/vue3-loading-overlay

```javascript
npm install vue3-loading-overlay
#作为方法进行使用
// Import the method.
import { useLoading } from 'vue3-loading-overlay';
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
// Init plugin
export default {
    let loader = useLoading();
    loader.show({
            // Optional parameters
            container: this.fullPage ? null : formContainer.value,
            canCancel: true, //是否能够终止
            onCancel: onCancel, //终止的回调
            loader:'bars', //样式
            backgroundColor: "#ffffff", //罩子的背景色
    },
    setTimeout(() => {
            loader.hide()
          },5000)   //5秒没有调用回调函数则自动隐藏
    );
}


```