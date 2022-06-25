<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-06 17:06:35
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-23 21:33:24
 * @@param: 
-->
<template>
  <el-row class="news-contain" justify="center">
    <el-col :sm="22" :xs="22" :md="20" :xl="18">
      <div class="search">
        <div class="search-input">
          <el-input
            v-model="state.input"
            class="w-50 m-2"
            placeholder="Type something"
            :suffix-icon="Search"
            @blur="handleSearch"
            @keyup.enter="handleSearch"
          />
        </div>
      </div>
      <div v-for="pageIndex in showNews" :key="pageIndex">
        <transition
          leave-active-class="animate__animated animate__backOutLeft"
          name="news-animal"
        >
          <ShowPeople
            :showNews="
              state.teacherList.slice(
                (pageIndex - 1) * state.pageSize,
                pageIndex * state.pageSize
              )
            "
            v-show="pageIndex == state.page"
          ></ShowPeople>
        </transition>
      </div>
      <!-- 分页页面 -->
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="state.teacherList.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="state.page"
          :page-size="state.pageSize"
          class="publication-pagination"
        />
      </div>
    </el-col>
    <backup></backup>
    <el-drawer
      v-model="state.drawer"
      title="搜索结果"
      direction="ltr"
      size="60%"
    >
      <ShowPeople :showNews="state.searchResult"></ShowPeople>
    </el-drawer>
  </el-row>
</template>
<script setup>
import { Search } from "@element-plus/icons-vue";
import backup from "@/components/backup";
import ShowPeople from "../show-person.vue";
import {onBeforeMount, reactive, computed } from "vue";
// import { useActions, useState } from "@/utils/storehook.js";
import {TeamItem} from '@/API/User.js'
import { searchNews } from "@/API/news.js";
const state = reactive({
  showloading: true,
  page: 1, //默认第一页
  pageSize: 6,
  drawer: false,
  searchResult: [],
  input: "",
  teacherList:[]
});
// const { newsList } = useState("news", ["newsList"]);
// const { get_all_newsData } = useActions("news", ["get_all_newsData"]);
const showNews = computed(() => {
  //分页器筛选出的数据,生成一系列的数据
  if (state.teacherList.length > 0) {
    //批量生成组件
    return Array.from(
      new Array(Math.ceil(state.teacherList.length / state.pageSize) + 1).keys()
    ).slice(1);
  }
  return [];
});
const handleSizeChange = (val) => {
  state.pageSize = val;
  state.page = 1;
};
const handleCurrentChange = (val) => {
  //修改当前所属页数
  state.page = val;
};
const handleSearch = () => {
  //TODO
  //页面进行搜索，打开抽屉显示
  if (state.input != "") {
    searchNews({ keyword: state.input }).then((res) => {
      state.searchResult = res.data.info["content"];
      state.drawer = true;
      state.input = "";
    });
  }
};

onBeforeMount(() => {
  TeamItem().then((res) => {
    state.teacherList=res.data.data
    state.showloading = !res; //请求完成并且获得对应的数据
  });
});
</script>
<style lang='scss' scoped>
.news-contain {
  position: inherit;
}
.search {
  position: relative;
  min-height: 50px;
  display: flex;
  align-items: center;
  .search-input {
    position: absolute;
    right: 0px;
  }
}
.pagination {
  display: flex;
  justify-content: center;
}
</style>