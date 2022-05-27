<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-23 09:29:11
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-27 17:28:41
 * @@param: 
-->
<template>
  <div class="person-info">
    <div class="basic-info"><basicInfo></basicInfo></div>
    <infoItem
      class="detail-info"
      v-model:infoData="state.personData.infoDetail"
    ></infoItem>
    <div>
      <el-button type="success">保存</el-button>
      <el-button type="info">预览</el-button>
    </div>
  </div>
</template>

<script setup>
import infoItem from "./infoItem-editor.vue";
import basicInfo from "./basicInfo.vue";
import { reactive } from "vue";
const state = reactive({
  personData: {
    basic: {},
    infoDetail: [
      {
        tagName: "个人简介",
        vHtml: "<p>11</p>", //回显内容的标签一定要是正确的
      },
      {
        tagName: "科研项目",
        vHtml: "<p>22</p>",
      },
      {
        tagName: "工作经历",
        vHtml: "<p>33</p>",
      },
      {
        tagName: "发明及获奖情况",
        vHtml: "<p>44</p>",
      },
      {
        tagName: "发表的论文及著作",
        vHtml: "<p>55</p>",
      },
    ],
  },
});
</script>
<style lang='scss' scoped>
.person-info {
  margin-bottom: 20px;
}
.basic-info {
  width: 100%;
  height: 600px;
}
</style>