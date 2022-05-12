<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-12 09:18:48
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 11:39:11
 * @@param: 
-->
<template>
  <div v-if="!item.meta || !item.meta.hidden">
    <template
      v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children"
    >
      <!-- 没有子路由，或者只有一个子路由的情况 -->
      <SidebarItemLink
        v-if="theOnlyOneChild.meta"
        :to="resolvePath(theOnlyOneChild.path)"
      >
        <el-menu-item :index="resolvePath(theOnlyOneChild.path)">
          <template v-if="theOnlyOneChild.meta.title" #title>
            {{ theOnlyOneChild.meta.title }}
          </template>
        </el-menu-item>
      </SidebarItemLink>
    </template>
    <!-- //如果存在多个子路由的情况 -->
    <el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <span v-if="item.meta && item.meta.title">{{ item.meta.title }}</span>
      </template>
      <template v-if="item.children">
        <menu-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :is-collapse="isCollapse"
          :base-path="resolvePath(child.path)"
        >
        </menu-item>
      </template>
    </el-sub-menu>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { isExternal } from "@/utils/validate";
import path from "path";
import SidebarItemLink from "@/pages/dashboard/layout/components/side-bar/sider-bar-item-link.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isCollapse: {
    type: Boolean,
    required: false,
  },
  basePath: {
    type: String,
    required: true,
  },
});

const alwaysShowRootMenu = computed(() => {
  return !!(props.item.meta && props.item.meta.alwaysShow);
});
const showingChildNumber = computed(() => {
  if (props.item.children) {
    const showingChildern = props.item.children.filter((item) => {
      //判断子路由是否有隐藏项目
      return !(item.meta && item.meta.hidden);
    });
    return showingChildern.length;
  }
  return 0;
});
const theOnlyOneChild = computed(() => {
  if (showingChildNumber.value > 1) {
    return null;
  }
  //只有一个子路由的情况
  if (props.item.children) {
    for (const child of props.item.children) {
      if (!child.meta || !child.meta.hidden) {
        return child;
      }
    }
  }
  return { ...props.item, path: "" };
});
const resolvePath = (routerPath) => {
  if (isExternal(routerPath)) {
    return routerPath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routerPath);
};
</script>
<style lang='scss' scoped>
</style>