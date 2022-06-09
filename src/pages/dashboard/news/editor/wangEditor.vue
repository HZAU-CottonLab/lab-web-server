<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-20 15:06:57
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-09 22:42:34
 * @@param: 
-->
<template>
  <div class="editor">
    <div class="tag-info" :style="{ background: theam_color }">
      <div class="tag-title" :style="{ color: theam_color }">
        <span>新闻稿</span>
      </div>
    </div>
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 600px"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onBlur="upDateHtmlValue"
    />
  </div>
</template>


<script setup>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { onBeforeUnmount, ref, shallowRef, defineEmits } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { defineProps } from "vue";
const props = defineProps({
  theam_color: {
    type: String,
    default: "#007e43",
  },
  htmlValue: {
    type: String,
    required: true,
  },
});

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
// 内容 HTML
const valueHtml = ref(props.htmlValue);
const mode = "default";
//双向绑定更新内容
const emits = defineEmits(["update:htmlValue"]);
const upDateHtmlValue = () => {
  // 失去焦点，更新内容
  emits("update:htmlValue", valueHtml.value, props.index);
};
// 模拟 ajax 异步获取内容
// onMounted(() => {
//   setTimeout(() => {
//     valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>';
//   }, 1500);
// });

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>
<style lang="scss" scoped>
.tag-info {
  width: 100%;
  display: flex;
  padding: 5px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 0px 10px 10px 20px;
}
.tag-title {
  border-radius: 0px 10px 10px 20px;
  background: white;
  width: 150px;
  display: inherit;
  span {
    margin-left: 20px;
  }
}
.tag-name {
  display: inherit;
  margin-left: 10px;
  color: white;
}
</style>
