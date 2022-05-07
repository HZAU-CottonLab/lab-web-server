<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-30 11:02:02
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-07 17:12:33
 * @@param: 
-->
<!-- 折叠边栏按钮 -->
<template>
  <div @click="toggleClick">
    <el-icon :size="20" class="icon">
      <fold v-if="isActive" />
      <expand v-else />
    </el-icon>
  </div>
</template>

<script setup>
import { Expand, Fold } from "@element-plus/icons-vue";
import { defineProps, defineEmits } from "vue";
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});
//定义父组件传来的方法
const emit = defineEmits(["toggle-click"]);
const toggleClick = () => {
  //执行父组件方法 
  emit("toggle-click");
};
</script>

<style lang="scss" scoped>
.icon {
  vertical-align: middle;
}
</style>