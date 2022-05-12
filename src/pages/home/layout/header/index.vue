<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-11 21:04:50
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 20:12:04
 * @@param: 
-->
<template>
  <div class="header-wrap">
    <div v-if="!classObj.isMobile">
      <headerMenu :mobile="classObj.isMobile" key="desktop"></headerMenu>
      <BreadCrumb
        v-show="breadCrumbShow.show"
        :breadCrumObject="breadCrumbShow"
      ></BreadCrumb>
    </div>
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
import { Expand } from "@element-plus/icons-vue";
import BreadCrumb from "../breadCrumb/index.vue";
import { useRoute } from "vue-router";
import { useState } from "@/utils/storehook.js";
import { reactive, computed } from "vue";


const { device } = useState("app", ["device"]);
const state = reactive({
  drawer: false,
});
const classObj = computed(() => {
  //device属于计算属性，需要使用value获取其值
  if (device.value === DeviceType.Desktop) {
    return { isMobile: false };
  }
  return { isMobile: true };
});
const handleDrawer = () => {
  //点击按钮，将抽屉打开
  state.drawer = true;
};
//* 控制面包屑显示
const route = useRoute();
const breadCrumbShow = computed(() => {
  if (route.meta && route.meta.ShowBreadCrumn) {
    return {
      show: true,
      breadcrumbURL: route.meta.breadcrumbURL,
      title: route.meta.title,
    };
  }
  return {
    show: false,
    breadcrumbURL: false,
    title: "",
  };
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