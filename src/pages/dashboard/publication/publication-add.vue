<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-09 15:48:33
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-25 20:41:04
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
          v-model="state.FormData.title"
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
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="success"
          @click="handleSaveClick"
          v-if="state.FormData.id == null"
          >保存</el-button
        >
        <el-button type="success" @click="handleUpdateClick" v-else
          >更新</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { DeviceType } from "@/store/modules/app.js";
import useResize from "@/pages/dashboard/layout/useResize.js";
import { reactive, computed, onBeforeMount, defineProps } from "vue";
import { useRoute } from "vue-router";
import {
  add_publication,
  get_publication_byId,
  update_publication,
} from "@/API/publication.js";
import { ElMessage } from "element-plus";
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
const route = useRoute();
const state = reactive({
  FormData: {
    id: null, //用于更新已经存在的内容
    title: "",
    author: "",
    periodical: "",
    date: "",
    doi: "",
  },
});
const publicationId = route.query.id;
onBeforeMount(() => {
  if (publicationId != null) {
    //todo 如果携带ID参数,则是更新
    get_publication_byId({ id: publicationId }).then((res) => {
      state.FormData = res.data.data;
    });
  } else {
    if (props.publicationItem !== undefined) {
      //修改state中form中的初始数据
      //浅拷贝，同步变化；将会消耗很大的性能
      state.FormData = props.publicationItem;
    }
  }
});
const handleSaveClick = () => {
  add_publication(state.FormData).then((res) => {
    if (res.data.errno == 0) {
      ElMessage.success(res.data.message);
    }
  });
};
const handleUpdateClick = () => {
  update_publication(state.FormData).then((res) => {
    if (res.data.errno == 0) {
      ElMessage.success(res.data.message);
    }
  });
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