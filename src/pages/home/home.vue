<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-04-26 14:19:28
 * @LastEditors: zpliu
 * @LastEditTime: 2021-09-22 08:10:26
 * @@param: 
-->
<template>
   <el-carousel :interval="5000" arrow="always" height='450px'>
      <el-carousel-item v-for="item in carousels_list" :key="item.url">
        <el-image :src="item.url" fit="contain">
          <template v-slot:placeholder> 111 </template>
        </el-image>
      </el-carousel-item>
    </el-carousel>
</template>

<script>

// import request from "@/utils/axios.js";
import { useLoading } from "vue3-loading-overlay";
// Import stylesheet
import {mapState} from 'vuex'
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

export default {
  name: "home_layout",
  components: {},
  data() {
    return {
      show: true,
      label: "loading",
      overlay: true,
      fullPage: true
    };
  },
  setup(){

  },
  computed: {
      ...mapState(
        {
          carousels_list:(state)=> state.main.carousels_list
        }
      )
  },
  methods: {
    increment() {
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
  created() {},
};
</script>
<style lang='scss' scoped>
div {
  // min-width: 820px;
  width: 100%;
  // height: 100%;
  margin: 0;
  padding: 0;
}
</style>