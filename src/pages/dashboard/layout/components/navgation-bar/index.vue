<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-30 10:55:52
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-09 08:40:41
 * @@param: 
-->
<template>
  <div class="navbar">
    <Hamburger
      :is-active="sidebar.opened"
      class="hamburger"
      @toggle-click="state.app_toggleSidebar"
    ></Hamburger>
    <BreadCrumb class="breadcrumb" />
    <div class="right-menu">
      <Screenfull v-if="showScreenfull" class="right-menu-item" />
      <el-dropdown class="right-menu-item">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          :size="34"
        />
        <template #dropdown>
          <el-dropdown-menu>
            <a
              target="_blank"
              href="https://juejin.cn/post/6963876125428678693"
            >
              <el-dropdown-item>中文文档</el-dropdown-item>
            </a>
            <a
              target="_blank"
              href="https://github.com/un-pany/v3-admin/blob/master/README.en.md"
            >
              <el-dropdown-item>English Docs</el-dropdown-item>
            </a>
            <a target="_blank" href="https://github.com/un-pany/v3-admin">
              <el-dropdown-item>GitHub</el-dropdown-item>
            </a>
            <a target="_blank" href="https://gitee.com/un-pany/v3-admin">
              <el-dropdown-item>Gitee</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="state.user_logout">
              <span style="display: block">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, reactive, ref } from "vue";
import Hamburger from "../humbanger.vue";
import Screenfull from "@/components/screenfull.vue";
import BreadCrumb from "../bread-crumb/index.vue";
import { useState, useActions, useMutations } from "@/utils/storehook.js";
import {useRouter} from 'vue-router'
const sidebar = useState("app", ["sidebar"]);
const { toggleSidebar } = useActions("app", ["toggleSidebar"]);
const { logout } = useMutations("user", ["logout"]);
const showScreenfull = ref(true);
const router = useRouter()
const state = reactive({
  user_logout: () => {
    // console.log("登出")
    logout();
     router.push('/login').catch((err) => {
      console.warn(err)
    })
  },
  app_toggleSidebar: () => {
    toggleSidebar(false);
  },
});
onBeforeMount(() => {});
</script>
<style lang='scss' scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  background: #fff;
  .hamburger {
    display: flex;
    align-items: center;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
  }
  .breadcrumb {
    float: left;
  }
  .right-menu {
    float: right;
    margin-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    color: #5a5e66;
    .right-menu-item {
      padding: 0 10px;
      cursor: pointer;
    }
  }
}
</style>