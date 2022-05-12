<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-11 21:04:50
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 09:17:31
 * @@param: 
-->
<template>
  <div class="header-wrap">
    <headerMenu
      v-if="!classObj.isMobile"
      :mobile="classObj.isMobile"
      key="desktop"
    ></headerMenu>
    <div v-else class="toggle-menu">
      <el-icon :size="30" @click="handleDrawer"><expand /></el-icon>
    </div>
    <el-drawer
      v-model="state.drawer"
      :direction="'rtl'"
      :show-close="false"
      :size="'45%'"
    >
      <headerMenu
        :mobile="classObj.isMobile"
        key="mobile"
        class="mobile-header"
      ></headerMenu>
    </el-drawer>
  </div>
</template>

<script setup>
import headerMenu from "./header-menu.vue";
import { DeviceType } from "@/store/modules/app.js";
import { useState, useActions } from "@/utils/storehook.js";
import useResize from "@/pages/dashboard/layout/useResize.js";
import { Expand } from "@element-plus/icons-vue";
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
const state = reactive({
  drawer: false,
});
const classObj = computed(() => {
  return {
    hideSidebar: !sidebar.value.opened,
    openSidebar: sidebar.value.opened,
    withoutAnimation: sidebar.value.withoutAnimation,
    isMobile: device.value === DeviceType.Mobile,
  };
});
const handleDrawer = () => {
  //点击按钮，将抽屉打开
  state.drawer = true;
};

/**
 * 监听页面变化
 */
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
.mobile-header {
  border-right: none;
}
.toggle-menu {
  text-align: right;
  margin-right: 10px;
}
</style>