<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-02 08:39:44
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-03 08:43:24
 * @@param: 
-->
<template>
  <div></div>
</template>

<script>
import { useLoading } from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  name: "loading_status",
  methods: {
    loading() {
      let loader = useLoading();
      loader.show(
        {
          // Pass props by their camelCased names
          container: null,
          canCancel: null, // default false
          onCancel: false,
          color: "green",
          loader: "bars",
          width: 64,
          height: 64,
          backgroundColor: "#ffffff",
          opacity: 0.5,
          zIndex: 999,
        },
        setTimeout(() => {
          loader.hide();
        }, 5000)
      );
    },
  },
};
</script>
<style lang='scss' scoped>
</style>