<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-02-26 22:57:02
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-19 17:30:20
 * @@param: 
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  // margin: 0, 0, 0, 0;
  // overflow: hidden hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background: url("../../assets/images/ewr-min.jpg");
  // background-repeat: no-repeat;
  // background-size: cover;
  //主页覆盖到整个浏览器高度
  height: 100%;
  width: 100%;
}
</style>
