<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-12 20:58:22
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 21:26:09
 * @@param: 
-->
<template>
  <el-row class="research-wrapper" justify="center" :gutter="40">
    <!-- //当布局不能够撑满整行时，gutter起作用 -->
    <el-col :span="24" style="text-align: start">
      <cardTitle :title="state.title" :to="state.url"></cardTitle>
    </el-col>
    <el-col
      :xs="23"
      :sm="10"
      :md="5"
      v-for="(item, index) in state.newsList"
      :key="index"
      class="content"
    >
      <!-- //新闻遍历 -->
      <el-card :body-style="{ padding: '0px' }">
        <img :src="item.imgurl" class="image" />
        <div style="padding: 14px">
          <h4>{{ item.title }}</h4>
          <div>
            <p>a{{ item.abstract }}</p>
          </div>
          <div class="bottom">
            <!-- <time class="time">{{ currentDate }}</time> -->
            <el-button text class="button">Read More</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>


<script setup>
import { onBeforeMount, reactive } from "vue-demi";
import cardTitle from "./cardTitle.vue";
const state = reactive({
  title: "RESEARCH AREAS",
  url: "/research/index",
  newsList: [],
});
onBeforeMount(() => {
  state.newsList = [
    {
      title: "dsadasgfa",
      imgurl:
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      contentURL: "",
      abstract: "",
    },
    {
      title: "dsadasgfa",
      imgurl:
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
      contentURL: "",
      abstract: "",
    },
    {
      title: "dsadasgfa",
      imgurl:
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
      contentURL: "",
      abstract: "",
    },
    {
      title: "dsadasgfa",
      imgurl:
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
      contentURL: "",
      abstract: "",
    },
  ];
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