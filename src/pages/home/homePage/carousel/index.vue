<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-07 17:05:29
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-07 17:25:23
 * @@param: 
-->
<template>
  <el-carousel
    :interval="5000"
    arrow="always"
    :height="carouselHeigh"
    @change="handleCarouselChange"
    ref="carousel"
  >
    <el-carousel-item v-for="item in state.carousels_list" :key="item.url">
      <div
        :style="{
          'background-image': 'url(' + item.imageURL + ')',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
        }"
        class="carousel-item-bg"
      >
        <transition enter-active-class="animate__animated animate__slideInUp">
          <div class="carousel-wraper" v-show="state.showTitle">
            <div class="carousel-title">
              <div class="carousel-content">
                <span>{{ item.title }}</span>
              </div>
              <div class="carousel-click">
                <el-button type="info">Learn More</el-button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import { getCarouselsList } from "@/API/research.js";
import { reactive, onBeforeMount, ref } from "vue";
defineProps({
  carouselHeigh: {
    type: String,
    required: true,
  },
});
const carousel = ref("");
const state = reactive({
  carousels_list: [],
  showTitle: false, //延迟出现点击按钮
});
const handleCarouselChange = () => {
  state.showTitle = false;
  setTimeout(() => {
    state.showTitle = true;
  }, 1000);
};
onBeforeMount(() => {
  getCarouselsList().then((res) => {
    //图片加载时间太长了
    state.carousels_list = res.data.info;
    carousel.value.setActiveItem(0); //手动进行切换
  });
});
</script>
<style lang='scss' scoped>
.carousel-item-bg {
  width: 100%;
  height: 100%;
}
.carousel-wraper {
  height: 100%;
  position: relative;
  .carousel-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    .carousel-content {
      border-radius: 8px;
      padding: 10px;
      max-width: 60%;
      // box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
      background-color: rgba(45, 45, 45, 0.5);
      span {
        line-height: 1.5;
        color: white;
        font-size: 24px;
        height: 100%;
        word-wrap: break-word;
      }
    }
  }
  .carousel-click {
    position: relative;
    float: right;
    margin-top: 20px;
    .el-button {
      cursor: pointer;
      font-size: 24px;
    }
  }
}
</style>