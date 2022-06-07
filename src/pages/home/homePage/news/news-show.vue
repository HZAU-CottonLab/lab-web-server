<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-07 09:20:52
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-07 22:19:20
 * @@param: 
-->
<template>
  <el-row
    :gutter="120"
    justify="start"
    class="news-card"
    v-show="showNews.length != 0"
  >
    <el-col
      v-for="(newsItem, index) in showNews"
      :key="index"
      :xs="24"
      :sm="12"
      :md="12"
      :lg="8"
      :xl="8"
    >
      <NewsCard :newsItem="newsItem" :id="newsItem.id"></NewsCard>
    </el-col>
  </el-row>
</template>

<script setup>
import NewsCard from "./news-card.vue";
import { defineProps } from "vue";
defineProps({
  showNews: {
    type: Array,
    require: true,
  },
});
</script>
<style lang='scss' scoped>
</style>