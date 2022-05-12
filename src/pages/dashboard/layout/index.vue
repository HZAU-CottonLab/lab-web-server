<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-03-29 15:45:42
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 22:39:04
 * @@param: 
-->
<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 在移动端情况下充当背景作用 -->
    <div
      v-if="classObj.mobile && sidebar.opened"
      class="drawer-bg"
      @click="state.handleClickOutSide"
    ></div>
    <Siderbar class="sidebar-container"></Siderbar>
    <div :class="{ hasTagsView: showTagsView }" class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <NavigationBar />
        <TagsView v-if="showTagsView" />
        <router-view v-slot="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <component :is="Component" :key="key" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
// import AdminDashboard from "../admin/admin.vue";
// import EditorDashboard from "../editor/editor.vue";
import Siderbar from "./components/side-bar/";
import NavigationBar from "./components/navgation-bar";
import TagsView from "./components/tag-view";
import {
  computed,
  onBeforeMount,
  reactive,
  onBeforeUnmount,
  onMounted,
} from "vue";
import { DeviceType } from "@/store/modules/app.js";
import { useState, useActions } from "@/utils/storehook.js";
import useResize from "./useResize.js";
const {
  sidebar,
  device,
  addEventListenerOnResize,
  resizeMounted,
  removeEventListenerResize,
  watchRouter,
} = useResize();

const route = useRoute();
const key = computed(() => {
  return route.path;
});
//使用store中数据自动注册为computed属性
const { fixedHeader, showTagsView } = useState("setting", [
  "fixedHeader",
  "showTagsView",
]);
//获取app 中定义的actions
const { closeSidebar } = useActions("app", ["closeSidebar"]);
const state = reactive({
  handleClickOutSide: () => {
    // console.log("关闭sidedbar");
    closeSidebar(false);
  },
});
const classObj = computed(() => {
  return {
    hideSidebar: !sidebar.value.opened,
    openSidebar: sidebar.value.opened,
    withoutAnimation: sidebar.value.withoutAnimation,
    mobile: device.value === DeviceType.Mobile,
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
@import "@/styles/mixins.scss";
$sideBarWidth: 220px;
.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: $sideBarWidth;
  position: relative;
}
.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  text-align: start;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
.hideSidebar {
  .main-container {
    margin-left: 54px;
  }
  .sidebar-container {
    width: 54px !important;
  }
  .fixed-header {
    width: calc(100% - 54px);
  }
}
// for mobile response 适配移动端
.mobile {
  .main-container {
    margin-left: 0;
  }
  .sidebar-container {
    transition: transform 0.28s;
    width: $sideBarWidth !important;
  }
  &.openSidebar {
    position: fixed;
    top: 0;
  }
  &.hideSidebar {
    .sidebar-container {
      pointer-events: none;
      transition-duration: 0.3s;
      transform: translate3d(-$sideBarWidth, 0, 0);
    }
  }
  .fixed-header {
    width: 100%;
  }
}
.withoutAnimation {
  .main-container,
  .sidebar-container {
    transition: none;
  }
}
</style>