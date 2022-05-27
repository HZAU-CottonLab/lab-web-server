<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-20 11:47:46
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-27 16:06:24
 * @@param: 
-->
<template>
  <div>
    <el-row justify="center">
      <el-col :md="6" :lg="3" :xl="4" :sm="6">
        <NavbarMenu
          v-model:dynamicTags="dynamicTags"
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
        v-if="dynamicTags.length != 0"
      >
        <Editor
          :tagName="tagObject.tagName"
          :index="index"
          v-for="(tagObject, index) in dynamicTags"
          :key="index"
          v-show="index == activedItem"
          :htmlValue="tagObject.vHtml"
          @update:htmlValue="handleUpdata"
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
import { reactive, ref, watch, defineProps, defineEmits } from "vue";
const props = defineProps({
  infoData: {
    type: Array,
    required: true,
  },
});

const dynamicTags = reactive(props.infoData);

const activedItem = ref(0);

const handleTagClick = (tagName) => {
  //根据子组件的点击事件，修改当前处于活跃状态的索引
  const tagIndex = dynamicTags.findIndex((tag) => tag.tagName == tagName);
  if (tagIndex != -1) {
    activedItem.value = tagIndex;
    return;
  }
  activedItem.value = 0;
};
watch(dynamicTags, (newValue) => {
  //防止删除最后一项，导致栏目不可见
  activedItem.value = 0;
  emits("update:infoData", newValue); //更新父组件内容
});
const handleUpdata = (newValue, index) => {
  dynamicTags[index]["vHtml"] = newValue;
};
const emits = defineEmits(["update:infoData"]);
</script>
<style lang='scss' scoped>
// .editor-item {
//   border-width: 1px;
//   border-color: black;
//   border-style: solid;
//   padding: 0 20px 0px 10px;
// }
</style>