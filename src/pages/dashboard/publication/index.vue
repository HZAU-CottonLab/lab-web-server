<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-14 21:47:08
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-09 18:55:20
 * @@param: 
-->
<template>
  <div>
    <el-row justify="center">
      <el-col :md="22" :lg="22" :xl="22" :sm="23" :xs="23">
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
        <PublicationShow
          :PublicationData="state.PublicationData"
        ></PublicationShow>
      </el-col>
      <el-drawer
        v-model="state.drawer"
        title="搜索结果"
        direction="ltr"
        size="60%"
      >
        <PublicationShow
          :PublicationData="state.searchList"
          :searchCom="true"
        ></PublicationShow>
      </el-drawer>
    </el-row>
  </div>
</template>
<script>
export default { name: "dashboard-article-show" };
</script>
<script setup>
import { get_publication, search_publication } from "@/API/publication";
import { computed, onBeforeMount, reactive, ref } from "vue";
import PublicationShow from "./publication-show.vue";
import { Search } from "@element-plus/icons-vue";
const state = reactive({
  PublicationData: [],
  input: [],
  searchList: [],
  drawer: false,
});
const handleSearch = () => {
  //向后端发生搜索
  if (state.input != "") {
    search_publication({ keyword: state.input }).then((res) => {
      state.searchList = res.data.info;
      state.drawer = true;
      state.input = "";
    });
  }
  //否则啥也不干
};
onBeforeMount(() => {
  get_publication().then((res) => {
    state.PublicationData = res.data.info;
  });
});
</script>
<style lang='scss' scoped>
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
</style>