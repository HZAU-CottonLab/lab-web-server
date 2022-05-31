<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-31 21:42:31
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-31 22:24:07
 * @@param: 
-->
<template>
  <el-row justify="center" v-if="loading">
    <el-col :md="16" :sm="18" :xs="24">
      <Infoshow
        :basicInfo="personInfo.basic"
        :infoDetial="personInfo.infoDetail"
        class="personInfo"
      >
      </Infoshow>
    </el-col>
  </el-row>
</template>
<script setup>
import Infoshow from "@/pages/dashboard/team/info-show/index.vue";
import { ref, onBeforeMount } from "vue";
import { useState, useActions } from "@/utils/storehook.js";
const { personInfo } = useState("user", ["personInfo"]);
const { set_personInfo } = useActions("user", ["set_personInfo"]);
import { useRoute } from "vue-router";
const loading = ref(false);
const route = useRoute();
onBeforeMount(() => {
  //向后端发起数据请求
  /**
   * todo 根据用户ID，向后端请求对应的数据,不同的ID还没有整理好
   */
  const persionId = route.query.id;
  console.log(persionId);
  set_personInfo().then((res) => {
    if (res == 0) {
      loading.value = true;
    }
  });
});
</script>
<style lang='scss' scoped>
.personInfo {
  margin-top: 25px;
}
</style>