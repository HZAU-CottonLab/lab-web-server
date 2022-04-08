<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-10-12 15:35:09
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-08 23:34:24
 * @@param: 
-->
<template>
  <el-header class="el-header">
    <el-row justify="start" align="middle">
      <el-col :span="8" >
           <el-image class="el-header-log" src="http://www.hzau.edu.cn/dfiles/14527/public/doc/images/logo2018.png"
           fit="cover" ></el-image>  
      </el-col>
      <el-col :span="10" :offset="6">
      <el-menu
        background-color="#7fb899"
        active-text-color="#ffd04b"
        text-color="#fff"
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        class="el-menu-header"
      >
        <el-menu-item index="1" ><router-link to="/">Explore</router-link></el-menu-item>
        <el-sub-menu index="2">
          <template #title>Our Research</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3"><router-link to="/publication">Publications</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/people">Our lab</router-link></el-menu-item>
        <el-menu-item index="5"><router-link to="/login">login</router-link></el-menu-item>
      </el-menu>
      </el-col>
    </el-row>
  </el-header> 
</template>

<script>
export default {
  name: "header-web",
  data() {
    return {
      activeIndex: "0",
      activeIndex2: "0",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang='scss' scoped>
.el-header{
    height: 100px;
    background: #7fb899;
    padding-bottom: 3px;

.el-menu-header{
    :deep(.el-menu-item){
        font-size: 20px;
    }
    :deep(.el-sub-menu__title){
        font-size: 20px;
    }
}

}
</style>