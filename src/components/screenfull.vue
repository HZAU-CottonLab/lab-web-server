<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-05 19:48:52
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-05 20:08:29
 * @@param: 
-->
<template>
  <div @click="click">
    <el-tooltip effect="dark" content="全屏" placement="bottom">
      <el-icon :size="20">
        <full-screen />
      </el-icon>
    </el-tooltip>
  </div>
</template>

<script setup>
import { FullScreen } from "@element-plus/icons-vue";
import { ElMessage  } from "element-plus";
import screenfull from 'screenfull';

const click = () => {
    console.log(screenfull)
  if (!screenfull.isEnabled) {
    ElMessage.warning("您的浏览器无法工作");
    return;
  }
  screenfull.toggle();
};
</script>
<style lang='scss' scoped>
</style>