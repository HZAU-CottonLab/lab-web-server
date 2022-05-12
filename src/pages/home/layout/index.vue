<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-12 14:32:22
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 20:41:50
 * @@param: 
-->
<template>
  <div class="app-wrapper">
    <NavigationBar></NavigationBar>
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="key" />
      </transition>
    </router-view>
  </div>
  <el-footer :style="{ height: footerHeight }" class="footer-wrapper">
    <footerCom></footerCom>
  </el-footer>
</template>

<script setup>
import { useRoute } from "vue-router";
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
  return "350px";
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