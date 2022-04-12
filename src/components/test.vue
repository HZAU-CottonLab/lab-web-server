<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-09 10:33:33
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-11 21:57:35
 * @@param: 
-->
<template>
  <div></div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "",
  computed: {
    ...mapState({
      //获取登录状态
      token: (store) => store.user.token,
    }),
  },
  methods: {
    ...mapActions({
      login: "user/authenticate",
    }),
  },
  beforeMount(){
    this.login()
  }
};
</script>
<style lang='' scoped>
</style>