<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-09 10:33:33
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-27 15:40:24
 * @@param: 
-->
<template>
  <div>
    <h5>测试</h5>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue-demi";
import { useRouter } from "vue-router";

const router = useRouter();
onBeforeMount(() => {
  // console.log(router.options);
});
</script>
