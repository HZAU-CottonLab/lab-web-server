<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-09 10:33:33
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-14 21:27:24
 * @@param: 
-->
<template>
  <h5>测试,跨设备性</h5>
</template>

<script setup>
import { onBeforeMount } from "vue-demi";
import { useRouter } from "vue-router";
const router = useRouter();
onBeforeMount(() => {
  // console.log(router.options);
});
</script>
<style lang='scss' scoped>
</style>