<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-31 17:17:31
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-31 21:35:00
 * @@param: 
-->
<template>
  <div class="info-show">
    <BasicShow
      :basicInfo="basicInfo"
      :style="{ height: isMobile ? '650px' : '400px' }"
    ></BasicShow>
    <DetailShow
      v-for="(tagObject, index) in infoDetial"
      :key="index"
      :tagName="tagObject.tagName"
      :vhtml="tagObject.vHtml"
    ></DetailShow>
    <backup></backup>
  </div>
</template>

<script setup>
import backup from "@/components/backup";
import { DeviceType } from "@/store/modules/app.js";
import BasicShow from "./basicInfoShow.vue";
import DetailShow from "./infoDetailShow.vue";
import { defineProps, computed } from "vue";
import { useState } from "@/utils/storehook.js";
const { device } = useState("app", ["device"]);
const props = defineProps({
  basicInfo: {
    type: Object,
  },
  infoDetial: {
    type: Array,
  },
});
//用于是否显示infor Detail信息
const isMobile = computed(() => {
  //device属于计算属性，需要使用value获取其值
  if (device.value === DeviceType.Desktop) {
    return false;
  }
  return true;
});
</script>
<style lang='scss' scoped>
</style>