<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-13 10:40:04
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 20:53:28
 * @@param: 
-->
<template>
  <div class="people-show">
    <el-row justify="center">
      <el-col :span="4" class="people-nvgation" v-show="!isMobile">
        <peopleNavigation
          :scroolActivities="scroolActivities"
          style="position: fixed"
        ></peopleNavigation>
      </el-col>
      <el-col class="people-item" :md="16" :sm="18" :xs="24">
        <peopleLead
          v-show="leader_info.showLead"
          :leader_info="leader_info"
        ></peopleLead>
        <!-- //遍历多种类型 -->
        <peopleItem
          v-for="(item, index) in state.people_Cat_infs.slice(1)"
          :key="index"
          :id="item.id"
          :CategoryTitle="item.title"
          :imageList="item.peopleInfos"
        ></peopleItem>
      </el-col>
      <backup></backup>
    </el-row>
  </div>
</template>

<script setup>
import peopleNavigation from "./PeopleNavigation.vue";
import peopleLead from "./lead.vue";
import peopleItem from "./peopleItem.vue";
import backup from "@/components/backup";
import { DeviceType } from "@/store/modules/app.js";
import { onBeforeMount, reactive, computed, onMounted } from "vue-demi";
import { useState } from "@/utils/storehook.js";
//后端请求API
import { PeopleItem } from "@/API/User";
import { useRoute } from "vue-router";

const state = reactive({
  people_Cat_infs: [],
});
//判断当前路由是否携带锚点参数
const route = useRoute();

const { device } = useState("app", ["device"]);
const { activatePeopleType } = useState("main", ["activatePeopleType"]);

//用于展示导航栏
const isMobile = computed(() => {
  //device属于计算属性，需要使用value获取其值
  if (device.value === DeviceType.Desktop) {
    return false;
  }
  return true;
});
const leader_info = computed(() => {
  //lead 信息特别展示
  if (state.people_Cat_infs.length > 1) {
    const tmpData = state.people_Cat_infs[0];
    return {
      id: 0,
      title: tmpData.title,
      email: tmpData.peopleInfos[0].email,
      imageURL: tmpData.peopleInfos[0].imageURL,
      name: tmpData.peopleInfos[0].name,
      description: tmpData.peopleInfos[0].description,
      showLead: true,
    };
  } else {
    return {
      showLead: false,
    };
  }
});
//*监听scroll事件，改变state中people_Cat_infs的值
const scroolActivities = computed(() => {
  //计算距离top最近的组件，改变属性
  const abs_Distance = activatePeopleType.value.map(Math.abs);
  const activeIndex = abs_Distance.indexOf(Math.min(...abs_Distance));
  let tableActiveItem = [];
  state.people_Cat_infs.forEach((element, index) => {
    if (index === activeIndex) {
      element.color = "#66befc";
      tableActiveItem.push(element);
    } else {
      element.color = "grey";
      tableActiveItem.push(element);
    }
  });
  return tableActiveItem;
});
onBeforeMount(() => {
  PeopleItem().then((res) => {
    //获取到数据后，判断当前路由是否携带anrcho
    state.people_Cat_infs = res.data.info;
  });
});
onMounted(() => {
  if (route.meta && route.meta.anchro) {
    //子组件比父组件，晚渲染；设置时间响应
    setTimeout(() => {
      const scrollDom = document.getElementById("people" + route.meta.anchro);
      scrollDom.scrollIntoView();
    }, 500);
  }
});
</script>
<style lang='scss' scoped>
.people-show {
  padding: 0px 15px;
}
.people-nvgation {
  width: 240px;
  margin-top: 20px;
  margin-left: 100px;
}
</style>