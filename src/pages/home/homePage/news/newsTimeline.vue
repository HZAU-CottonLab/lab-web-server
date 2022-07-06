<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-07-06 20:00:06
 * @LastEditors: zpliu
 * @LastEditTime: 2022-07-06 22:08:48
 * @@param: 
-->
<template>
  <div class="news-carousel-list">
    <el-timeline>
      <el-timeline-item
        v-for="(newsItem, index) in state.newsList"
        :key="index"
        :timestamp="newsItem.date"
        placement="top"
      >
        <el-card>
          <router-link  class="news-link" :to="{ path: '/news/id', query: { id: newsItem.id } }" target="_blank">
            <h4>{{ newsItem.title }}</h4>
          </router-link>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
import { getCarouselsList } from "@/API/news.js";
import { onBeforeMount, shallowReactive } from "vue";
const state = shallowReactive({
  newsList: [],
});
onBeforeMount(() => {
  getCarouselsList().then((res) => {
    if (res.data.errno == 0) {
      state.newsList = res.data.data;
    }
  });
});
</script>
<style lang='scss' scoped>
.news-carousel-list {
  margin-top: 20px;
}
.news-link{
    text-decoration: none;
}
</style>
