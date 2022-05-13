<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-11 21:04:50
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 22:28:59
 * @@param: 
-->
<template>
  <div class="header-wrap">
    <div v-if="!classObj.isMobile" class="desktop-show">
      <el-row justify="center" align="middle">
        <el-col :md="8" :lg="8" :xl="8">
          <svg-icon :name="'bug'" class="desktop-log" />
        </el-col>
        <el-col :md="12" :lg="12" :xl="12" :offset="4">
          <headerMenu
            :mobile="classObj.isMobile"
            key="desktop"
            class="desktop-menu"
          ></headerMenu>
        </el-col>
      </el-row>
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
</script>
<style lang='scss' scoped>
.mobile-header {
  border-right: none;
}
.toggle-menu {
  text-align: right;
  margin-right: 10px;
}
.desktop-show {
  position: fixed;
  width: 100%;
  z-index: 9999;
  height: 60px;
  top: 0px;
  background-color: white;
  border-bottom: solid 1px #dcdfe6;
  text-align: center;
  .desktop-log {
    height: 40px;
    width: 40px;
  }
  .desktop-menu {
    position: relative;
  }
  ::v-deep .el-menu {
    height: 60px;
  }
}
</style>