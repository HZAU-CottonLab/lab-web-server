<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-11 20:32:25
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 11:04:05
 * @@param: 
-->
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    :mode="props.mobile ? 'vertical' : 'horizontal'"
  >
    <MenuItem
      v-for="routeItem in routes"
      :key="routeItem.path"
      :item="routeItem"
      :base-path="routeItem.path"
      :is-collapse="isCollapse"
    ></MenuItem>
  </el-menu>
</template>


<script setup>
// 根据device类型改变菜单栏模式
import { defineProps, onBeforeMount, ref } from "vue";
import { whiteRouter } from "@/routers/whiteRouter";
import MenuItem from "./menu-item.vue";

const filter_routes = (routers) => {
  const resRoute = [];
  routers.forEach((router) => {
    if (router.meta && router.meta.header) {
      //保留header导航栏路由
      resRoute.push(router);
    }
  });
  return resRoute;
};
//获取导航栏的routes
const routes = filter_routes(whiteRouter);
const isCollapse = ref(true);
const props = defineProps({
  mobile: {
    type: Boolean,
    required: true,
  },
  activeIndex: {
    type: String,
    default: "1",
  },
});
onBeforeMount(() => {
  // console.log(routes);
});
</script>
<style lang='scss' scoped>
</style>