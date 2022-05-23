<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-20 14:38:06
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-23 08:56:47
 * @@param: 
-->
<template>
  <div>
    <el-collapse :model-value="'1'" :accordion="true">
      <el-collapse-item name="1">
        <template #title> 个人简介 </template>
        <Editor />
      </el-collapse-item>
      <el-collapse-item name="2">
        <template #title> 研究项目 </template>
        <Editor />
      </el-collapse-item>
      <el-collapse-item name="3">
        <template #title> 教育经历 </template>
        <Editor />
      </el-collapse-item>
      <el-collapse-item name="4">
        <template #title> 工作经历 </template>
        <Editor />
      </el-collapse-item>
      <el-collapse-item name="5">
        <template #title> 发明专利及获奖情况 </template>
        <Editor />
      </el-collapse-item>
      <el-collapse-item name="6">
        <template #title> 发表论文及著作 </template>
        <Editor />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default { name: "dashboard-news-add" };
</script>
<script setup>
import Editor from "../layout/components/wangEditor.vue";
</script>
<style lang='scss' scoped>
</style>