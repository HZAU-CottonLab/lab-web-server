<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-22 15:11:46
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-23 08:36:53
 * @@param: 
-->

<!-- 重定向 -->
<template>
  <div />
</template>

<script  setup>
import { useRoute, useRouter } from "vue-router";
const { params, query } = useRoute();
const { path } = params;
useRouter()
  .replace({ path: "/" + path, query })
  .catch((err) => {
    console.warn(err);
  });
</script>