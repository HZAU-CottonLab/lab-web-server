<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-07 10:04:49
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-09 10:55:00
 * @@param: 
-->
<template>
  <el-row
    :gutter="40"
    justify="start"
    class="news-card"
    v-show="showResearch.length != 0"
  >
    <el-col
      v-for="(newsItem, index) in showResearch"
      :key="index"
      :xs="24"
      :sm="12"
      :md="12"
      :lg="8"
      :xl="8"
    >
      <ResearchCard :newsItem="newsItem"></ResearchCard>
    </el-col>
  </el-row>
</template>

<script setup>
import ResearchCard from "./researchCard.vue";
import { defineProps } from "vue";
defineProps({
  showResearch: {
    type: Array,
    require: true,
  },
});
</script>
<style lang='scss' scoped>
</style>