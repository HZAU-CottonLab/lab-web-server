<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-19 22:15:05
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-20 11:23:03
 * @@param: 
-->
<template>
  <el-dialog
    v-model="isDialogVisible"
    title=""
    width="30%"
    destroy-on-close
    center
    @close="handleClick"
  >
    <div class="content">
      <el-icon><WarningFilled /></el-icon>是否删除当前内容？
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
import { WarningFilled } from "@element-plus/icons-vue";
const props = defineProps({
  deleteDialogVisible: {
    type: Boolean,
    required: true,
  },
  id: {
    type: Number, //进行数据库删除操作
  },
});
const isDialogVisible = ref(props.deleteDialogVisible);
const emits = defineEmits(["update:deleteDialogVisible"]);
watch(
  () => props.deleteDialogVisible,
  () => (isDialogVisible.value = props.deleteDialogVisible)
);
const handleClick = () => {
  emits("update:deleteDialogVisible", false);
};
</script>
<style lang='scss' scoped>
.content {
  width: 100%;
  text-align: center;
  font-size: 18px;
}
</style>