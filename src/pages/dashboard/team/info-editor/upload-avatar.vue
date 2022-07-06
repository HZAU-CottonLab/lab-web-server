<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-31 09:20:25
 * @LastEditors: zpliu
 * @LastEditTime: 2022-07-06 10:36:10
 * @@param: 
-->
<template>
  <div>
    <!-- action="/dev-api/login" -->
    <!--//todo 跨域请求需要解决 -->
    <el-upload
      class="avatar-uploader"
      list-type="picture"
      :action="baseURL + '/img/upload/'"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      name="image"
      :data="{ alt: 'avatar' }"
    >
      <img
        class="avatar-img"
        v-if="imagURL"
        :src="imagURL"
        fit="cover"
        @mouseover="() => (state.imageOperation = true)"
        @mouseout="() => (state.imageOperation = false)"
        @click.stop="() => {}"
      />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      <div
        v-show="state.imageOperation"
        class="img-operation"
        @mouseover="() => (state.imageOperation = true)"
      >
        <el-icon :size="20"
          ><ZoomIn @click="handleZoomIn" @click.stop="() => {}"
        /></el-icon>
        <el-icon :size="20"
          ><Delete @click="handleDelteImg" @click.stop="() => {}"
        /></el-icon>
      </div>
    </el-upload>
    <el-dialog v-model="state.dialogVisible">
      <img :src="imagURL" alt="Preview Image" style="width: 100%" />
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref, defineProps, defineEmits, watch } from "vue";
import { ElMessage } from "element-plus";
import { Plus, ZoomIn, Delete } from "@element-plus/icons-vue";
const baseURL = process.env.VUE_APP_BASE_API;
const props = defineProps({
  imagURL: {
    type: String,
  },
});

const state = reactive({
  imageOperation: false,
  dialogVisible: false,
});
/**
 * 双向绑定
 */
const imageUrl = ref(props.imagURL);
const emits = defineEmits(["update:imagURL"]);
watch(imageUrl, (newValue) => {
  emits("update:imagURL", newValue);
});
/**
 * 头像上传
 */
const handleAvatarSuccess = (response) => {
  // imageUrl.value = URL.createObjectURL(uploadFile.raw);
  imageUrl.value = response.data.url;
  //阻止原有的点击事件
};
const beforeAvatarUpload = (rawFile) => {
  // if (rawFile.type !== "image/jpeg") {
  //   ElMessage.error("Avatar picture must be JPG format!");
  //   return false;
  // } else 
  if (rawFile.size / 1024 / 1024 > 4) {
    ElMessage.error("Avatar picture size can not exceed 4MB!");
    return false;
  }
  return true;
};
const handleZoomIn = () => {
  state.dialogVisible = true;
};
const handleDelteImg = () => {
  imageUrl.value = "";
};
</script>
<style lang='scss' scoped>
.avatar-uploader {
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

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  text-align: center;
}
.avatar-img {
  //   width: 100%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 40px 40px 40px 40px;
  z-index: 99;
}
.img-operation {
  position: absolute;
  z-index: 999;
  .el-icon {
    color: white;
    margin: 0px 15px;
  }
}
</style>