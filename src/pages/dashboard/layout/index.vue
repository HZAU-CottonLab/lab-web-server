<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-03-29 15:45:42
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-30 11:00:25
 * @@param: 
-->
<template>
  <section class="app-main">
    <!-- 显示子路由 -->
    <Siderbar class="sidebar-container"></Siderbar>
    <NavigationBar />
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="key" />
      </transition>
    </router-view>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import AdminDashboard from "../admin/admin.vue";
import EditorDashboard from "../editor/editor.vue";
// import SidebarItem from './layout/components/side-bar/side-bar-item.vue'
import Siderbar from "./components/side-bar/";
import NavigationBar from './components/navgation-bar'
export default {
  name: "dashboard-layout",
  data() {
    return {
      currentRole: "editor",
    };
  },
  components: {
    AdminDashboard,
    EditorDashboard,
    Siderbar,
    NavigationBar
  },
  computed: {
    key() {
      const route = useRoute();
      return route.path;
    },
  },
};
</script>
<style lang='scss' scoped>
$sideBarWidth: 220px;
.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
</style>