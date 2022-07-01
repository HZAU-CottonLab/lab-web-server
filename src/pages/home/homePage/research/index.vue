<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-06 17:06:28
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-28 19:17:54
 * @@param: 
-->
<template>
  <el-row class="research-contain" justify="center">
    <el-col :sm="22" :xs="22" :md="20" :xl="18">
      <ShowResearch :showResearch="state.ResearchList"></ShowResearch>
    </el-col>
    <backup></backup>
  </el-row>
</template>

<script setup>
import backup from "@/components/backup";
import ShowResearch from "./research-show.vue";
import { onBeforeMount, shallowReactive } from "vue";
import { getResearchList } from "@/API/research.js";
const state = shallowReactive({
  ResearchList: [],
});
onBeforeMount(() => {
  getResearchList().then((res) => {
    state.ResearchList = res.data.content;
  });
});
</script>
<style lang='scss' scoped>
</style>