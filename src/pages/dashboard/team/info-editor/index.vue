<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-20 11:47:46
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-31 14:25:09
 * @@param: 
-->
<template>
  <div>
    <el-row justify="center">
      <el-col :md="6" :lg="3" :xl="4" :sm="6">
        <NavbarMenu
          @click="handleTagClick"
          :closable="true"
          :activedItem="activedItem"
        />
      </el-col>
      <el-col
        :md="16"
        :lg="20"
        :xl="18"
        :sm="16"
        class="editor-item"
        v-if="personInfo.infoDetail.length != 0"
      >
        <Editor
          :tagName="tagObject.tagName"
          :index="index"
          v-for="(tagObject, index) in personInfo.infoDetail"
          :key="index"
          v-show="index == activedItem"
          :htmlValue="tagObject.vHtml"
          @update:htmlValue="handleUpdatavHtml"
        />
      </el-col>
      <el-col v-else :md="16" :lg="20" :xl="18" :sm="16">
        <!-- //标签内容为空时，进行提示 -->
        <h1>请添加内容</h1>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import NavbarMenu from "./navbar-dynamic.vue";
import Editor from "./item-editor.vue";
import { ref, watch } from "vue";
import { useState, useMutations } from "@/utils/storehook.js";
const { personInfo } = useState("user", ["personInfo"]);
const { set_vhtml } = useMutations("user", ["set_vhtml"]);
const activedItem = ref(0);

const handleTagClick = (tagName) => {
  //根据子组件的点击事件，修改当前处于活跃状态的索引
  const tagIndex = personInfo.value.infoDetail.findIndex(
    (tag) => tag.tagName == tagName
  );
  if (tagIndex != -1) {
    activedItem.value = tagIndex;
    return;
  }
  activedItem.value = 0;
};
const handleUpdatavHtml = (vhtml, index) => {
  set_vhtml({
    index,
    vhtml,
  });
};
watch(personInfo.value.infoDetail, () => {
  //防止删除最后一项，导致栏目不可见
  activedItem.value = 0;
});
</script>
<style lang='scss' scoped>
// .editor-item {
//   border-width: 1px;
//   border-color: black;
//   border-style: solid;
//   padding: 0 20px 0px 10px;
// }
</style>