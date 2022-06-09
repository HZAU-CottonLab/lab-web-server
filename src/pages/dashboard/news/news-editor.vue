<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-08 22:52:17
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-09 10:58:54
 * @@param: 
-->
<template>
  <div><h1>新闻添加</h1></div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
onBeforeMount(() => {
  //向后端发起数据请求
  /**
   * todo 根据新闻ID，向后端请求对应的数据
   */
  const newsId = route.query.id;
  console.log(newsId);
  if (newsId == null) {
    console.log("填充空白数据");
  } else {
    console.log("请求后端数据");
  }
});
</script>
<style lang='scss' scoped>
</style>