<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-31 20:13:31
 * @LastEditors: zpliu
 * @LastEditTime: 2022-07-06 16:44:25
 * @@param: 
-->
<template>
  <div>
    <el-row justify="center" align="top">
      <el-col :md="6" :lg="3" :xl="4" :sm="6" class="avatar">
        <Avatar :imgURL="basicInfo.imgURL" />
        <div class="info-name">
          <el-button round>{{ basicInfo.name }}</el-button>
        </div>
      </el-col>
      <el-col :md="16" :lg="20" :xl="18" :sm="16" class="infoDetail">
        <ul>
          <li>
            <span class="infoDetail-title">姓名</span
            ><span class="infoDetail-text">{{ basicInfo.name }}</span>
          </li>
          <li>
            <span class="infoDetail-title">性别</span
            ><span class="infoDetail-text">{{
              basicInfo.sex == 0 ? "男" : "女"
            }}</span>
          </li>
          <li v-if="basicInfo.peopleType != 0">
            <span class="infoDetail-title">导师</span
            ><span class="infoDetail-text">
              <router-link
                target="_blank"
                :to="{
                  path: '/people/person',
                  query: { id: basicInfo.teacher },
                }"
                >{{ basicInfo.teacher_nickname }}</router-link
              ></span
            >
          </li>
          <li v-if="basicInfo.peopleType == 0">
            <span class="infoDetail-title">职称</span
            ><span class="infoDetail-text">{{ basicInfo.jobTitle }}</span>
          </li>
          <li>
            <span class="infoDetail-title">联系方式</span
            ><span class="infoDetail-text">{{ basicInfo.contact }}</span>
          </li>
          <li v-if="basicInfo.peopleType == 0">
            <span class="infoDetail-title">办公地点</span
            ><span class="infoDetail-text">{{ basicInfo.officeSite }}</span>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Avatar from "./avatar.vue";
import {defineProps} from 'vue'
defineProps({
  basicInfo: {
    type: Object,
    require: true,
  },
});
// const listInfo = computed(() => {
//   //过滤以下几类
//   Object.keys(props.basicInfo).forEach((key) => {

//   });
// });
</script>
<style lang='scss' scoped>
.avatar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.info-name {
  margin-top: 10px;
  .el-button {
    font-family: "Lato-Black";
    border: 2px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    font-size: 24px;
    color: #5b5657;
    letter-spacing: 0em;
    line-height: 1em;
  }
}
.infoDetail {
  display: inherit;
  justify-content: center;
  ul {
    list-style: none;
    text-align: start;
    li {
      margin: 15px 0px;
    }
  }
  .infoDetail-title {
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
  }
  .infoDetail-text {
    font-size: 20px;
  }
}
</style>