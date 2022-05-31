<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-31 20:18:06
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-31 20:48:58
 * @@param: 
-->
<template>
  <div class="avatar-contain">
    <div class="avatar-img">
      <img
        :src="imgURL"
        fit="cover"
        @mouseover="() => (state.imageOperation = true)"
        @mouseout="() => (state.imageOperation = false)"
      />
      <div
        v-show="state.imageOperation"
        class="img-operation"
        @mouseover="() => (state.imageOperation = true)"
      >
        <el-icon :size="20"
          ><ZoomIn @click="handleZoomIn" @click.stop="() => {}"
        /></el-icon>
      </div>
    </div>
    <el-dialog v-model="state.dialogVisible">
      <img :src="imgURL" alt="Preview Image" style="width: 100%" />
    </el-dialog>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import { ZoomIn } from "@element-plus/icons-vue";
const props = defineProps({
  imgURL: {
    type: String,
    default: "",
  },
});
const state = reactive({
  imageOperation: false,
  dialogVisible: false,
});
const handleZoomIn = () => {
  state.dialogVisible = true;
};
</script>
<style lang='scss' scoped>
.avatar-contain {
  box-shadow: 0 0 5px 1px #999;
  max-width: 300px;
  min-width: 250px;
  max-height: 300px;
  min-height: 250px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 40px 40px 40px 40px;
}
.avatar-img {
  display: inherit;
  justify-content: center;
  align-items: center;
  img {
    //   width: 100%;

    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 40px 40px 40px 40px;
    z-index: 99;
  }
}
.img-operation {
  z-index: 999;
  position: absolute;
  .el-icon {
    color: white;
    margin: 0px 15px;
  }
}
</style>