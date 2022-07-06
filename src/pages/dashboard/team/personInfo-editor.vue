<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-23 09:29:11
 * @LastEditors: zpliu
 * @LastEditTime: 2022-07-06 10:33:25
 * @@param: 
-->
<template>
  <div class="person-info" v-if="loading">
    <div class="basic-info" :style="{ height: isMobile ? '800px' : '600px' }">
      <basicInfo ref="sonRef"></basicInfo>
    </div>
    <infoItem class="detail-info" v-if="!isMobile"></infoItem>
    <div>
      <el-button type="success" @click="submit(sonRef)">保存</el-button>
      <el-button type="info" @click="handleInfoShow">预览</el-button>
    </div>
    <el-dialog v-model="dialogTableVisible" title="信息预览" :width="'80%'">
      <Infoshow
        :basicInfo="sonRef.formInline"
        :infoDetial="personInfo.infoDetail"
      >
      </Infoshow>
    </el-dialog>
  </div>
</template>

<script setup>
import { DeviceType } from "@/store/modules/app.js";
import infoItem from "./info-editor/index.vue";
import basicInfo from "./info-editor/basicInfo.vue";
import { ElMessage } from "element-plus";
import { useMutations, useState, useActions } from "@/utils/storehook.js";
import { ref, computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import Infoshow from "./info-show/index.vue";
const { personInfo } = useState("user", ["personInfo"]);
const { set_basicInfo, clearPersonInfo } = useMutations("user", [
  "set_basicInfo",
  "clearPersonInfo",
]);
const { set_personInfo, userInfoUpdate } = useActions("user", [
  "set_personInfo",
  "userInfoUpdate",
]);
const { device } = useState("app", ["device"]);
const sonRef = ref("");
const dialogTableVisible = ref(false);
const loading = ref(false);
//用于是否显示infor Detail信息
const isMobile = computed(() => {
  //device属于计算属性，需要使用value获取其值
  if (device.value === DeviceType.Desktop) {
    return false;
  }
  return true;
});
// 保存数据
const submit = (sonInstance) => {
  sonInstance.ruleFormRef.validate((valid) => {
    if (valid) {
      //验证通过后，将修改Store内数据；并向后端发起请求
      set_basicInfo(sonInstance.formInline);
      userInfoUpdate().then((res) => {
        if (res.errno == 0) {
          ElMessage.success("数据保存成功!");
        }
      });
    }
  });
};
//预览数据
const handleInfoShow = () => {
  dialogTableVisible.value = !dialogTableVisible.value;
};
const route = useRoute();
onBeforeMount(() => {
  //向后端发起数据请求
  /**
   * todo 根据用户ID，向后端请求对应的数据
   */
  const userId = route.query.id;
  if (userId == null) {
    // 添加新的人员数据
    clearPersonInfo(); //清空store中已有的数据
    loading.value = true;
  } else {
    //向后端发起数据请求
    set_personInfo({ id: userId }).then((res) => {
      if (res == 0) {
        //请求完成，返回Promise
        loading.value = true;
      }
    });
  }
});
</script>
<style lang='scss' scoped>
.person-info {
  margin-bottom: 20px;
}
.basic-info {
  width: 100%;
}
</style>