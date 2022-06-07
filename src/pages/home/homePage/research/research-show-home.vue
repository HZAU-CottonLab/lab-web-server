<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-12 20:58:22
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-07 10:20:47
 * @@param: 
-->
<template>
  <el-row class="research-wrapper" justify="center">
    <!-- //当布局不能够撑满整行时，gutter起作用 -->
    <el-col :span="24" style="text-align: start">
      <cardTitle :title="state.title" :to="state.url"></cardTitle>
    </el-col>
    <el-col :span="24">
      <ShowResearch :showResearch="state.ResearchList"></ShowResearch>
    </el-col>
  </el-row>
</template>


<script setup>
import { onBeforeMount, shallowReactive } from "vue";
import { getResearchList } from "@/API/research.js";
import cardTitle from "../cardTitle.vue";
import ShowResearch from "./research-show.vue";
const state = shallowReactive({
  title: "RESEARCH AREAS",
  url: "/research/index",
  ResearchList: [],
});
onBeforeMount(() => {
  getResearchList().then((res) => {
    if (res.data.code == 0) {
      state.ResearchList = res.data.info.content;
    }
  });
});
</script>
<style lang='scss' scoped>
.research-wrapper {
  // background-image: url("https://btiscience.org/wp-content/uploads/polygonal2-2.jpg");
  width: 100%;
  margin-top: 10px;
  .content {
    margin-bottom: 20px;
  }
}
</style>