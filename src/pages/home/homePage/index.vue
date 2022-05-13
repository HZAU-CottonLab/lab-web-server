<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-12 19:35:30
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 21:23:36
 * @@param: 
-->
<template>
  <div class="home-wrapper">
    <el-main style="padding: 0px" class="main">
      <!--//todo: 点击按钮还需要完善 -->
      <el-carousel :interval="5000" arrow="always" :height="carouselHeigh">
        <el-carousel-item v-for="item in carousels_list" :key="item.url">
          <div
            :style="{
              'background-image': 'url(' + item.url + ')',
              'background-repeat': 'no-repeat',
              'background-size': 'cover',
            }"
            class="carousel-item-bg"
          ></div>
        </el-carousel-item>
      </el-carousel>
      <el-row justify="center" class="container-region">
        <el-col :span="20">
          <News></News>
        </el-col>
        <el-col :span="20">
          <Research></Research>
        </el-col>
        <el-col :span="20">
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
import News from "./news.vue";
import Research from "./research.vue";
import cardTitle from "./cardTitle.vue";
const { device } = useState("app", ["device"]);
const { carousels_list } = useState("main", ["carousels_list"]);
// const { get_newsData } = useActions("news", ["get_newsData"]);
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
  return "400px";
});

onBeforeMount(() => {
  TeamItem().then((res) => {
    //获取列表信息
    state.teamList = res.data["info"];
  });
});
</script>
<style lang='scss' scoped>
.carousel-item-bg {
  width: 100%;
  height: 100%;
}
.container-region {
  // background-image: url("https://btiscience.org/wp-content/uploads/polygonal2-2.jpg");
  .el-col {
    margin-top: 20px;
  }
}
</style>
