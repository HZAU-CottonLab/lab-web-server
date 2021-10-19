<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-10-12 15:35:09
 * @LastEditors: zpliu
 * @LastEditTime: 2021-10-12 20:28:31
 * @@param: 
-->
<template>
  <el-header class="el-header">
    <el-row justify="start" align="middle">
      <el-col :span="8" >
           <el-image class="el-header-log" src="https://www.hainanu.edu.cn/home2018/imgs/logo.png"
           fit="cover" ></el-image>  
      </el-col>
      <el-col :span="10" :offset="6">
      <el-menu
        background-color="#004098"
        active-text-color="#ffd04b"
        text-color="#fff"
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        class="el-menu-header"
      >
        <el-menu-item index="1" >Explore</el-menu-item>
        <el-sub-menu index="2">
          <template #title>Our Research</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">Publications</el-menu-item>
        <el-menu-item index="4">Our lab</el-menu-item>
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
    background: #004098;
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