<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-07 17:30:19
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-07 21:26:03
 * @@param: 
-->
<template>
  <div>
    <el-carousel
      :initial-index="0"
      :arrow="'always'"
      v-if="state.carousels_list.length != 0"
    >
      <el-carousel-item v-for="item in state.carousels_list" :key="item.id">
        <img :src="item.imageURL" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { getCarouselsList } from "@/API/research.js";
import { reactive, onBeforeMount, ref } from "vue";

const state = reactive({
  carousels_list: [],
  showTitle: false, //延迟出现点击按钮
  loadingCount: 0,
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
    // carousel.value.setActiveItem(0); //手动进行切换
  });
});
</script>



<style scoped>
.el-carousel__item h3 {
  display: flex;
  justify-content: center;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
