<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-20 14:38:06
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-26 15:17:17
 * @@param: 
-->
<template>
  <div>
    <!-- //导航栏的动态增加与删除 -->
    <h2>导航栏的动态添加与删除</h2>
    <NavbarMenu
      v-model:dynamicTags="state.dynamicTags"
      @click="handleTagClick"
      :closable="true"
    />
    <!-- https://github.com/element-plus/element-plus/blob/dev/packages/components/tag/src/tag.vue -->
    <!-- https://element-plus.gitee.io/zh-CN/component/tag.html#%E5%8A%A8%E6%80%81%E7%BC%96%E8%BE%91%E6%A0%87%E7%AD%BE -->
  </div>
</template>
<script>
export default { name: "dashboard-news-add" };
</script>
<script setup>
// import Editor from "../layout/components/wangEditor.vue";
import NavbarMenu from "./navbar-menu_dynamic.vue";
import { reactive } from "vue";
const state = reactive({
  dynamicTags: ["Tag 1", "Tag 2", "Tag 3", "Tag4"],
});

const handleTagClick = (tag) => {
  console.log("Tag 标签被点击:", tag);
};
</script>
<style lang='scss' scoped>
</style>