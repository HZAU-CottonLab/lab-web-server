<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-09 10:56:18
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-09 22:32:43
 * @@param: 
-->
<template>
  <el-row justify="center">
    <el-col :md="6" :lg="3" :xl="4" class="avatar-wrapper">
      <h2>封面图片</h2>
      <UploadAvatar
        v-model:imagURL="state.researchItemData.imageURL"
        class="avatar"
      ></UploadAvatar>
    </el-col>
    <el-col :md="16" :lg="10" :xl="12" class="infoForm">
      <el-form
        :mode="state.researchItemData"
        label-width="80px"
        :style="{ width: isMobile != true ? '600px' : '90%' }"
      >
        <el-form-item label="标题" prop="title">
          <el-input
            v-model="state.researchItemData.title"
            placeholder=""
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
          />
        </el-form-item>
        <el-form-item label="摘要" prop="description">
          <el-input
            v-model="state.researchItemData.description"
            placeholder=""
            type="textarea"
            :autosize="{ minRows: 15, maxRows: 30 }"
          />
        </el-form-item>
        <el-form-item label="发布时间" prop="date">
          <el-date-picker
            v-model="state.researchItemData.date"
            type="date"
            placeholder="选择日期"
            size="large"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="success">保存</el-button>
          <el-button type="info" @click="handlePreView">预览</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-drawer
      v-model="state.drawer"
      title="搜索结果"
      direction="ltr"
      size="60%"
    >
      <div style="display: flex; justify-content: center">
        <ResearchCard
          :newsItem="state.researchItemData"
          :demoCom="true"
        ></ResearchCard>
      </div>
    </el-drawer>
  </el-row>
</template>

<script setup>
import { DeviceType } from "@/store/modules/app.js";
import UploadAvatar from "../team/info-editor/upload-avatar.vue";
import { onBeforeMount, reactive, computed } from "vue";
import useResize from "@/pages/dashboard/layout/useResize.js";
import { useRoute } from "vue-router";
import ResearchCard from "./researchCard.vue";
const { device } = useResize();
const isMobile = computed(() => {
  //device属于计算属性，需要使用value获取其值
  if (device.value === DeviceType.Desktop) {
    return false;
  }
  //移动端
  return true;
});
const state = reactive({
  researchItemData: {
    imageURL: null,
    date: "",
    title: "",
    description: "",
    id: null,
  },
  drawer: false,
});

const handlePreView = () => {
  state.drawer = !state.drawer;
};

const route = useRoute();
onBeforeMount(() => {
  //如果是带参数的路由则发起后端请求后，对数据进行修改
  const researchId = route.query.id;
  //请求后端数据
  console.log("开始请求后端数据");
});
</script>
<style lang='scss' scoped>
.avatar-wrapper {
  display: flex;
  justify-content: center;
  // margin: 20px 0;
  align-content: center;
  flex-direction: column;
  .avatar {
    display: flex;
    justify-content: center;
    margin: 10px 0px;
  }
}
.infoForm {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>