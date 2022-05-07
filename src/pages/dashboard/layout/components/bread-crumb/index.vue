<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-05 20:36:40
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-05 20:47:40
 * @@param: 
-->
<template>
  <el-breadcrumb class="app-breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in state.breadcrumbs"
        :key="item.path"
      >
        <span
          v-if="
            item.redirect === 'noRedirect' ||
            index === state.breadcrumbs.length - 1
          "
          class="no-redirect"
          >{{ item.meta.title }}</span
        >
        <a v-else @click.prevent="state.handleLink(item)">
          {{ item.meta.title }}
        </a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template> 
<script setup>
import { onBeforeMount, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { compile } from "path-to-regexp";
const currentRoute = useRoute(); //获取当前route
const router = useRouter(); //所有的router
const pathCompile = (path) => {
  const { params } = currentRoute;
  const toPath = compile(path);
  return toPath(params);
};
const state = reactive({
  breadcrumbs: [],
  getBreadcrumb: () => {
    //获取当前路由，以及其子路由
    const matched = currentRoute.matched.filter(
      (item) => item.meta && item.meta.title
    );
    state.breadcrumbs = matched.filter((item) => {
      return item.meta && item.meta.title && item.meta.breadcrumb !== false;
    });
  },
  handleLink(item) {
    // 处理点击事件
    const { redirect, path } = item;
    if (redirect) {
      router.push(redirect).catch((err) => {
        console.warn(err);
      });
      return;
    }
    router.push(pathCompile(path)).catch((err) => {
      console.warn(err);
    });
  },
});
//监听当前路径的变化
watch(
  () => currentRoute.path, //监听当前路由是否会发生发生变化
  (path) => {
    // 路由发生变化时的钩子函数
    if (path.startsWith("/redirect/")) {
      return;
    }
    state.getBreadcrumb();
  }
);
onBeforeMount(() => {
  state.getBreadcrumb();
});
</script>

<style lang='scss' scoped>
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>