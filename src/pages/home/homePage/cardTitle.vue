<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-12 21:31:02
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-14 16:09:45
 * @@param: 
-->
<template>
  <div class="cfx">
    <div class="text" @click="handleClick(to)">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
defineProps({
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    require: true,
  },
});
const router = useRouter();
const handleClick = (to) => {
  router.push({
    // path: "/people/index",
    path: to,
  });
};
</script>
<style lang='scss' scoped>
.cfx {
  width: 200px;
  height: 0;
  position: relative;
  border: 25px solid rgb(112, 118, 123, 0.7);
  border-left: 20px solid transparent;
  margin-bottom: 10px;
  .text {
    position: absolute;
    left: 15px;
    top: -14px;
    font-size: 20px;
    color: #fff;
  }
}
.cfx:hover {
  width: 200px;
  height: 0;
  position: relative;
  border: 25px solid rgba(66, 132, 187, 0.7);
  border-left: 20px solid transparent;
  margin-bottom: 10px;
  .text {
    position: absolute;
    left: 15px;
    top: -14px;
    font-size: 20px;
    color: #fff;
  }
}
</style>