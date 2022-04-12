<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-03-29 15:45:42
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-12 09:44:38
 * @@param: 
-->
<template>
   <span v-permission="['admin']" class="permission-alert">
          只有
          <el-tag>admin</el-tag>可以看见这个
  </span>
  <span v-permission="['editor']" class="permission-alert">
          只有
          <el-tag>editor</el-tag>可以看见这个
   </span>
</template>

<script>
export default {
  name: "dashboard",
};
</script>
<style lang='' scoped>
</style>