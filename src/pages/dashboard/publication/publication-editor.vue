<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-19 22:15:05
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-20 11:25:59
 * @@param: 
-->
<template>
  <el-dialog
    v-model="isDialogVisible"
    title="文章编辑"
    width="50%"
    destroy-on-close
    center
    @close="handleClick"
  >
    <h2>Editor</h2>
    <div>
      <strong>Extra content (Not rendered)</strong>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClick">Cancel</el-button>
        <el-button type="primary" @click="handleClick">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, watch, ref } from "vue";
const props = defineProps({
  editorDialogVisible: {
    type: Boolean,
    required: true,
  },
  id: {
    type: Number, //进行数据库删除操作
  },
});
const isDialogVisible = ref(props.editorDialogVisible);
const emits = defineEmits(["update:editorDialogVisible"]);
watch(
  () => props.editorDialogVisible,
  () => (isDialogVisible.value = props.editorDialogVisible)
);
const handleClick = () => {
  emits("update:editorDialogVisible", false);
};
</script>
<style lang='scss' scoped>
</style>