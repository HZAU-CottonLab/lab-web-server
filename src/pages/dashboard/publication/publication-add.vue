<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-09 15:48:33
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-09 21:14:18
 * @@param: 
-->
<template>
  <div class="publictionAdd_wrapper">
    <el-form
      label-width="80px"
      :model="state.FormData"
      :style="{ width: isMobile != true ? '600px' : '90%' }"
    >
      <el-form-item label="文章标题">
        <el-input
          v-model="state.FormData.Title"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="作者信息">
        <el-input
          v-model="state.FormData.author"
          :autosize="{ minRows: 2, maxRows: 10 }"
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="发表期刊">
        <el-input v-model="state.FormData.periodical" type="textarea" />
      </el-form-item>
      <el-form-item label="原文链接">
        <el-input v-model="state.FormData.doi" type="textarea" />
      </el-form-item>
      <el-form-item label="发表时间">
        <el-date-picker
          v-model="state.FormData.date"
          type="date"
          placeholder="选择日期"
          size="large"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="handleSaveClick">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { DeviceType } from "@/store/modules/app.js";
import useResize from "@/pages/dashboard/layout/useResize.js";
import { reactive, computed, onBeforeMount, defineProps } from "vue";
import { useRouter } from "vue-router";
const { device } = useResize();
const isMobile = computed(() => {
  //device属于计算属性，需要使用value获取其值
  if (device.value === DeviceType.Desktop) {
    return false;
  }
  //移动端
  return true;
});
const props = defineProps({
  publicationItem: {
    type: Object,
  },
});
const router = useRouter();
const state = reactive({
  FormData: {
    id: "", //用于更新已经存在的内容
    Title: "",
    author: "",
    periodical: "",
    date: "",
    doi: "",
  },
});

onBeforeMount(() => {
  if (props.publicationItem !== undefined) {
    //修改state中form中的初始数据
    state.FormData = props.publicationItem;
  }
  //todo 如果携带ID参数的修改，则需要向后台发起一次请求
});
const handleSaveClick = () => {
  //首次保存的内容
  //更新的内容
};
</script>
<style lang='scss' scoped>
.publictionAdd_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
</style>