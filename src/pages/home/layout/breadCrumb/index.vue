<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-05 20:36:40
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 17:50:43
 * @@param: 
-->
<template>
  <div class="bread-crumb-wrapper">
    <div
      :style="{
        'background-image': 'url(' + backgroundURL + ')',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
      }"
      class="bread-crumb-bg"
    >
      <el-row>
        <el-col :span="6" :offset="9">
          <h1>{{ breadTile }}</h1>
        </el-col>
      </el-row>
    </div>
    <el-row justify="start" class="bread-crumb-url">
      <el-col :span="6" :offset="2">
        <span>
          <el-icon :size="20"><location-filled /></el-icon
        ></span>
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
      </el-col>
    </el-row>
  </div>
</template> 
<script setup>
import { computed, onBeforeMount, reactive, watch, defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";
import { compile } from "path-to-regexp";
import { LocationFilled } from "@element-plus/icons-vue";
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

//图片地址可以从路由meta中获取,
const props = defineProps({
  breadCrumObject: {
    type: Object,
    required: true,
  },
});

const backgroundURL = computed(() => {
  if (props.breadCrumObject.breadcrumbURL) {
    return props.breadCrumObject.breadcrumbURL;
  }
  //默认图片
  return "https://btiscience.org/wp-content/uploads/Our-Research-1.jpg";
});

const breadTile = computed(() => {
  if (props.breadCrumObject.title) {
    return props.breadCrumObject.title;
  }
  return null;
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
  font-size: 20px;
  //   line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
.bread-crumb-bg {
  height: 350px;
  display: flex;
  align-items: center;
  .el-row {
    width: 100%;
    h1 {
      color: white;
    }
  }
}
.bread-crumb-url {
  margin-top: 10px;
}
</style>