<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-13 11:36:49
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 15:29:58
 * @@param: 
-->
<template>
  <div class="people-lead" :id="'people' + leader_info.id">
    <el-row justify="start" style="align-items: center">
      <el-col :md="16" :sm="24" class="people-lead">
        <!-- //团队lead 类别 -->
        <span class="people-lead-title">{{ leader_info.title }}</span>
        <div class="people-lead-description">
          <span></span>
          <p style="text-indent: 2em">
            {{ leader_info.description }}
          </p>
        </div>
      </el-col>
      <el-col :md="8" :sm="24" style="text-align: center">
        <!-- //移动设备端，居中对齐 -->
        <el-image
          :src="leader_info.imageURL"
          fit="cover"
          :lazy="true"
          class="avatar-img"
        >
        </el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { defineProps, getCurrentInstance, onMounted } from "vue";
import { useMutations } from "@/utils/storehook.js";
const props = defineProps({
  leader_info: {
    type: Object,
    require: true,
  },
});
const instance = getCurrentInstance();
const { proxy } = instance;
const { setActivatePeopleType } = useMutations("main", [
  "setActivatePeopleType",
]);
const handleScrollx = () => {
  const disant_to_top = proxy.$el.getBoundingClientRect().top;
  //将当前的高度，存储到store中
  setActivatePeopleType({
    id: props.leader_info.id,
    distance: disant_to_top,
  });
};
onMounted(() => {
  //鉴定滚动事件
  window.addEventListener("scroll", handleScrollx, true);
});
</script>
<style lang='scss' scoped>
.people-lead {
  text-align: start;
  .people-lead-title {
    //图片分类的Header类型所在的标题栏
    min-width: 360px;
    width: 200px;
    background-color: #e9f5fe;
    border: 2px;
    border-radius: 10px;
    position: absolute;
    font-size: 30px;
    text-align: start;
    padding: 5px;
    margin-bottom: 45px;
  }
  .people-lead-description {
    margin-top: 50px;
    font-size: 20px;
    line-height: 1.5;
  }
}
.avatar-img {
  //圆角矩阵加阴影
  border: 2px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  margin: 0, 0;
  max-width: 400px;
  max-height: 400px;
}
</style>