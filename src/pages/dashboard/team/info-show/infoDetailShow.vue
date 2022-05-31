<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-31 17:38:21
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-31 21:33:57
 * @@param: 
-->
<template>
  <div>
    <div class="tag-info">
      <div class="tag-title">
        <span>{{ tagName }}</span>
      </div>
    </div>
    <div v-html="vhtml" class="content"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  tagName: {
    type: String,
    required: true,
  },
  vhtml: {
    type: String,
    required: true,
  },
});
</script>
<style lang='scss' scoped>
.tag-info {
  width: 100%;
  display: flex;
  padding: 5px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 0px 10px 10px 20px;
  background: #007e43;
}
.tag-title {
  border-radius: 0px 10px 10px 20px;
  background: white;
  width: 250px;
  display: inherit;
  span {
    margin-left: 20px;
    color: #007e43;
  }
}
.content {
  min-height: 200px;
}
</style>