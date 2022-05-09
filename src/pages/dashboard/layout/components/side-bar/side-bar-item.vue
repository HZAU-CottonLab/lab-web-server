<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-12 22:31:12
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-08 11:30:41
 * @@param: 
-->
<template>
  <!-- 定义sider-bar item组件 -->
  <div
    v-if="!item.meta || !item.meta.hidden"
    :class="{ 'simple-mode': isCollapse, 'first-level': isFirstLevel }"
  >
    <template
      v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.child"
    >
      <SidebarItemLink
        v-if="theOnlyOneChild.meta"
        :to="resolvePath(theOnlyOneChild.path)"
      >
        <el-menu-item :index="resolvePath(theOnlyOneChild.path)">
          <svg-icon  v-if="theOnlyOneChild.meta.icon" :name="theOnlyOneChild.meta.icon" />
          <template v-if="theOnlyOneChild.meta.title" #title>
            {{ theOnlyOneChild.meta.title }}
          </template>
        </el-menu-item>
      </SidebarItemLink>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <svg-icon v-if="item.meta && item.meta.icon" :name="item.meta.icon" />
        <span v-if="item.meta && item.meta.title">{{ item.meta.title }}</span>
      </template>
      <template v-if="item.children">
        <!-- //在组件中引用自己 -->
        <!-- {{item.path}} -->
        <siderbar-item
          v-for="child in item.children"
          :key="child.name"
          :item="child"
          :is-collapse="isCollapse"
          :base-path="resolvePath(child.path)"
        ></siderbar-item>
      </template>
    </el-sub-menu>
  </div>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/validate";
import SidebarItemLink from "./sider-bar-item-link.vue";
export default {
  name: "SiderbarItem",
  props: {
    item: {
      //router 对象
      type: Object,
      required: true,
    },
    isCollapse: {
      //是否需要折叠
      type: Boolean,
      required: false,
    },
    isFirstLevel: {
      //是否是根节点
      type: Boolean,
      default: true,
    },
    basePath: {
      type: String,
      required: true,
    },
  },
  components: {
    SidebarItemLink,
  },
  computed: {
    alwaysShowRootMenu() {
      // 是否显示根目录
      return !!(this.item.meta && this.item.meta.alwaysShow);
    },
    showingChildNumber() {
      if (this.item.children) {
        const showingChildern = this.item.children.filter((item) => {
          //返回显示的子路由
          return !(item.meta && item.meta.hidden);
        });
        return showingChildern.length;
      }
      return 0;
    },
    theOnlyOneChild() {
      if (this.showingChildNumber > 1) {
        return null;
      }
      //只有一个子路由
      if (this.item.children) {
        for (const child of this.item.children) {
          if (!child.meta || !child.meta.hidden) {
            return child;
          }
        }
      }
      // no children时候返回itself
      return { ...this.item, path: "" };
    },
  },
  methods: {
    isExternal, //注册外部函数
    resolvePath(routerPath) {
      if (this.isExternal(routerPath)) {
        return routerPath;
      }
      if (isExternal(this.basePath)) {
        //如果绑定的是外部链接，则直接返回
        // 否则基于组件递归，对router进行拼接
        return this.basePath;
      }
      return path.resolve(this.basePath, routerPath);
    },
  },
};
</script>
<style lang='scss' scoped>
.svg-icon {
  margin-right: 20px;
  min-width: 1em;
  font-size: 16px;
}
.simple-mode {
  &.first-level {
    ::v-deep(.el-sub-menu) {
      .el-sub-menu__icon-arrow {
        display: none;
      }
      span {
        visibility: hidden;
      }
    }
  }
}
</style>