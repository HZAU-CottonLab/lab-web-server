<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-12 19:35:30
 * @LastEditors: zpliu
 * @LastEditTime: 2022-07-06 21:41:23
 * @@param: 
-->
<template>
  <div class="home-wrapper">
    <el-main style="padding: 0px 2px" class="main">
      <!--//todo: 点击按钮还需要完善 -->
      <Carousel :carouselHeigh="carouselHeigh"></Carousel>
      <el-row justify="center" class="container-region">
        <el-col :md="20" :lg="20" :xl="20" :xs="22" :sm="22">
          <News></News>
        </el-col>
        <el-col :md="20" :lg="20" :xl="20" :xs="22" :sm="22">
          <Research></Research>
        </el-col>
        <el-col :md="20" :lg="20" :xl="20" :xs="22" :sm="22">
          <!-- //标签项目 -->
          <el-row>
            <el-col>
              <cardTitle :title="'Our Team'" :to="'/people/index'"></cardTitle>
            </el-col>
            <el-col :offset="1">
              <facultList
                :carouselList="state.teamList"
                style="margin: 20px 40px"
              ></facultList>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
    <backup></backup>
  </div>
</template>

<script setup>
import { useState } from "@/utils/storehook.js";
import { TeamItem } from "@/API/User";
import { reactive, onBeforeMount, computed } from "vue";
import { DeviceType } from "@/store/modules/app.js";
import facultList from "@/components/team_carousel.vue";
import backup from "@/components/backup";
import News from "./news/news-show-home.vue";
import Research from "./research/research-show-home.vue";
import cardTitle from "./cardTitle.vue";
import Carousel from "./carousel/index.vue";
const { device } = useState("app", ["device"]);
const state = reactive({
  teamList: [], //响应式存储数据
});
//用于设置跑马灯的高度信息
const isMobile = computed(() => {
  //device属于计算属性，需要使用value获取其值
  if (device.value === DeviceType.Desktop) {
    return false;
  }
  return true;
});
const carouselHeigh = computed(() => {
  if (isMobile.value) {
    return "200px";
  }
  return "500px";
});
onBeforeMount(() => {
  TeamItem().then((res) => {
    //获取列表信息
    state.teamList = res.data.data;
  });
});
</script>
<style lang='scss' scoped>
.container-region {
  // background-image: url("https://btiscience.org/wp-content/uploads/polygonal2-2.jpg");
  .el-col {
    margin-top: 20px;
  }
}
</style>
