<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-06 17:06:44
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-07 21:33:50
 * @@param: 
-->
/* <!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-06 17:06:44
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-06 20:03:11
 * @@param: 
-->
<template>
  <div class="newCard-wrapper">
    <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
      <img :src="newsItem.imageURL" class="image-card" />
      <div style="padding: 14px" class="card-content">
        <div class="card-title">
          <h3>{{ newsItem.title }}</h3>
        </div>
        <div class="news-date">
          <span>
            <el-icon :size="21"><Timer /></el-icon>
            {{ newsItem.date }}
          </span>
        </div>
        <div class="card-abstract">
          <!-- //描述性文字的收缩 -->
          <TextCollapse
            :id="'news' + id"
            :width="'98%'"
            :content="newsItem.description"
          ></TextCollapse>
        </div>
        <div class="bottom">
          <!-- <time class="time">{{ currentDate }}</time> -->
          <el-button text class="button" @click="handleClick(id)"
            >Read More</el-button
          >
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import TextCollapse from "@/components/text-collapse.vue";
import { Timer } from "@element-plus/icons-vue";
import { defineProps } from "vue";
import { useRouter } from "vue-router";
defineProps({
  id: {
    type: Number,
    required: true,
  },
  newsItem: {
    type: Object,
    required: true,
  },
});
const router = useRouter();
const handleClick = (newsId) => {
  //进行_klack跳转
  const routeUrl = router.resolve({
    name: "news",
    query: {
      id: newsId,
    },
  });
  window.open(routeUrl.href, "_blank");
};
</script>
<style lang='scss' scoped>
.newCard-wrapper {
  margin: 20px 0px;
}
.card {
  max-width: 400px;
}
.image-card {
  object-fit: contain;
  max-height: 300px;
}
.news-date {
  text-align: start;
  padding-left: 20px;
  font-size: 20px;
}
</style> 