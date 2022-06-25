<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-13 10:07:54
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-25 20:57:40
 * @@param: 
-->
<template>
  <el-row class="publication" justify="center">
    <!-- //文章导航   -->
    <el-col :sm="23" :xs="23" :md="20" :xl="20" :lg="20">
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
        :publicationList="state.publicationList"
      ></PublicationShow>
    </el-col>
    <backup></backup>
    <el-drawer
      v-model="state.drawer"
      title="搜索结果"
      direction="ltr"
      size="60%"
    >
      <PublicationShow :publicationList="state.searchList"></PublicationShow>
    </el-drawer>
  </el-row>
</template>

<script setup>
import backup from "@/components/backup";
import { get_publication_all, search_publication } from "@/API/publication.js";
import PublicationShow from "./publication-show.vue";
import { onBeforeMount, reactive } from "vue-demi";
import { Search } from "@element-plus/icons-vue";
const state = reactive({
  publicationList: [],
  input: "",
  drawer: false,
  searchList: [],
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
  get_publication_all().then((res) => {
    state.publicationList = res.data.data;
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