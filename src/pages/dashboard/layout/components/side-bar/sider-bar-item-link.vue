<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-15 00:54:25
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 10:17:04
 * @@param: 
-->
<template>
  <!-- 判断当前绑定的属性是否为外部链接，如果不为外部链接则使用router进行跳转-->
  <a v-if="isExternal(to)" :href="to" target="_blank" rel="noopener">
    <slot />
  </a>
  <div v-else @click="push">
    <slot />
  </div>
</template>

<script>
import { isExternal } from "@/utils/validate";
import { useRouter } from "vue-router";
export default {
  name:'SidebarItemLink',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  data() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    push() {
      // 手动路由跳转
      this.router.push(this.to).catch((error) => {
        console.warn(error);
      });
    },
    isExternal,
  },
};
</script>
<style lang='scss' scoped>
</style>