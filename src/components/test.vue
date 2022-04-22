<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-09 10:33:33
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-22 15:36:15
 * @@param: 
-->
<template>
  <h5>
    文章信息修改
  </h5>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  computed: {
    ...mapState({
      //获取登录状态
      token: (store) => store.user.token,
    }),
  },
};
</script>
<style lang='' scoped>
</style>