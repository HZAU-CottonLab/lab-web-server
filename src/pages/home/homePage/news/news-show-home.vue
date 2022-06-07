<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-07 09:26:22
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-07 09:58:45
 * @@param: 
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-12 20:58:22
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-06 17:08:23
 * @@param: 
-->
<template>
  <el-row class="news-wrapper" justify="center">
    <!-- //当布局不能够撑满整行时，gutter起作用 -->
    <el-col :span="24" style="text-align: start">
      <cardTitle :title="state.title" :to="state.url"></cardTitle>
    </el-col>
    <el-col :span="24">
      <!-- //显示最新的news -->
      <ShowNews :showNews="state.newsList"></ShowNews>
    </el-col>
  </el-row>
</template>


<script setup>
import { onBeforeMount, reactive } from "vue-demi";
import cardTitle from "../cardTitle.vue";
import ShowNews from "./news-show.vue";
import { useActions } from "@/utils/storehook.js";
const state = reactive({
  title: "New&Event",
  url: "/news/index",
  newsList: [],
});
const { get_lastest_news } = useActions("news", ["get_lastest_news"]);
onBeforeMount(() => {
  get_lastest_news().then((res) => {
    state.newsList = res.info.content;
  });
});
</script>
<style lang='scss' scoped>
.news-wrapper {
  width: 100%;
  margin-top: 10px;
  .content {
    margin-bottom: 20px;
  }
}
</style>