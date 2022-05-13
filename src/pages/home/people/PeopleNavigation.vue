<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-13 11:31:03
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 16:36:24
 * @@param: 
-->
<template>
  <div class="people-navigation">
    <el-timeline>
      <el-timeline-item
        v-for="(peopleType, index) in scroolActivities"
        :key="index"
        size="large"
        :hollow="true"
        :hide-timestamp="true"
        @click="handleNavClick(index)"
      >
        <!-- 颜色属性绑定到label -->
        <span :style="{ color: '' + peopleType.color + '' }">{{
          peopleType.title
        }}</span>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  scroolActivities: {
    type: Array,
    require: true,
  },
});
const handleNavClick = (peopleIndex) => {
  console.log(peopleIndex);
  const scrollDom = document.getElementById("people" + peopleIndex);
  //点击后进行页面内锚点跳转
  scrollDom.scrollIntoView();
};
</script>
<style lang='scss' scoped>
.people-navigation {
  span {
    font-size: 20px;
  }
}
</style>