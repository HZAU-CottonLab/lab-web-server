<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-12 14:32:22
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 22:21:47
 * @@param: 
-->
<template>
  <div class="app-wrapper">
    <div class="navigation-bar">
      <NavigationBar></NavigationBar>
    </div>
    <div class="app-main" :style="APPStyle">
      <BreadCrumb
        v-show="breadCrumbShow.show"
        :breadCrumObject="breadCrumbShow"
      ></BreadCrumb>
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" :key="key" />
        </transition>
      </router-view>
    </div>
  </div>
  <el-footer :style="{ height: footerHeight }" class="footer-wrapper">
    <footerCom></footerCom>
  </el-footer>
</template>

<script setup>
import { useRoute } from "vue-router";
import BreadCrumb from "./breadCrumb/index.vue";
import NavigationBar from "./header/index.vue";
import footerCom from "@/components/footer.vue";
import { DeviceType } from "@/store/modules/app.js";
import { onBeforeMount, onMounted, onBeforeUnmount, computed } from "vue";
import useResize from "@/pages/dashboard/layout/useResize.js";
const {
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

const footerHeight = computed(() => {
  //device属于计算属性，需要使用value获取其值
  if (device.value === DeviceType.Desktop) {
    return "250px";
  }
  //移动端
  return "350px";
});
const APPStyle = computed(() => {
  if (device.value === DeviceType.Desktop) {
    return {
      "margin-top": "56px",
    };
  } else {
    return {
      "margin-top": "0px",
    };
  }
});
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
.footer-wrapper {
  padding: 0px;
}
</style>