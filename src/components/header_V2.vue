<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-11 20:32:25
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-11 21:02:32
 * @@param: 
-->
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    :mode="classObj.isMobile ? 'vertical' : 'horizontal'"
    @select="handleSelect"
    :collapse="true"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</template>

<script setup>
// 根据device类型改变菜单栏模式
import { DeviceType } from "@/store/modules/app.js";
import { useState, useActions } from "@/utils/storehook.js";
import useResize from "@/pages/dashboard/layout/useResize.js";
import {
  reactive,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  computed,
} from "vue";

const {
  sidebar, //侧边栏是否需要打开
  device, //获取当前的device
  addEventListenerOnResize,
  resizeMounted,
  removeEventListenerResize,
  watchRouter,
} = useResize();

const classObj = computed(() => {
  return {
    hideSidebar: !sidebar.value.opened,
    openSidebar: sidebar.value.opened,
    withoutAnimation: sidebar.value.withoutAnimation,
    isMobile: device.value === DeviceType.Mobile,
  };
});

watchRouter();
onBeforeMount(() => {
  addEventListenerOnResize();
  // console.log(fixedHeader);
});
onMounted(() => {
  resizeMounted();
});
onBeforeUnmount(() => {
  removeEventListenerResize();
});
</script>
<style lang='scss' scoped>
</style>