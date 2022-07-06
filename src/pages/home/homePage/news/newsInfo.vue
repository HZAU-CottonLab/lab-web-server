<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-07-06 19:36:52
 * @LastEditors: zpliu
 * @LastEditTime: 2022-07-06 22:15:20
 * @@param: 
-->
<template>
  <div>
    <el-row justify="center">
      <el-col :md="14" :sm="20" :xs="20" :lg="14" :xl="14" class="news-content">
        <div class="news-title">
          <h2>{{ state.newsData.title }}</h2>
        </div>
        <div>
          <p class="news-abstract">
            {{ state.newsData.description }}
          </p>
          <div v-html="state.newsData.vhtml"></div>
        </div>
        <div class="update-time">
          <span> 更新时间： {{ state.newsData.date }} </span>
        </div>
      </el-col>
      <el-col :md="4" :sm="0" :xs="0" :lg="4" :xl="4" class="carousel-news">
        <span class="carousel-news-title">最新动态</span>
        <newsTimeline></newsTimeline>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { getNews_byId } from "@/API/news.js";
import { onBeforeMount, shallowReactive } from "vue";
import { useRoute } from "vue-router";
import newsTimeline from "./newsTimeline.vue";
const state = shallowReactive({
  newsData: {},
});

const route = useRoute();
const newsId = route.query.id;
onBeforeMount(() => {
  getNews_byId({
    id: newsId,
  }).then((res) => {
    if (res.data.errno == 0) {
      state.newsData = res.data.data;
    }
  });
});
</script>
<style lang='scss' scoped>
.news-title {
  margin: 20px 10px;
}
.news-abstract {
  text-indent: 2em;
  text-align: justify;
  line-height: 1.75em;
  font-size: 19px;
}
.update-time {
  border-top-style: solid;
  border-top-color: #d2d2d2;
  height: 20px;
  max-width: 300px;
  align-self: center;
  margin: 20px 0px;
  span {
    font-size: 20px;
    margin-top: 10px;
    color: #520074;
  }
  // background: red;
}
.news-content {
  display: flex;
  flex-direction: column;
}
.carousel-news {
  text-align: start;
  margin-left: 30px;
  margin-top: 50px;
  .carousel-news-title {
    font-size: 25px;
    color: #520074;
  }
}
</style>