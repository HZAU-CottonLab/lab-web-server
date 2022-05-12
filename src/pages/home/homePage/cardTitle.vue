<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-12 21:31:02
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 22:37:58
 * @@param: 
-->
<template>
  <div class="cfx">
    <div class="text">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
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
</script>
<style lang='scss' scoped>
.cfx {
  width: 200px;
  height: 0;
  position: relative;
  border: 30px solid rgb(112, 118, 123, 0.7);
  border-left: 25px solid transparent;
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