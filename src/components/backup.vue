<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-01 09:39:12
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-09 22:34:49
 * @@param: 
  回到顶部按钮，增加了进度条选项
-->
<template>
  <el-backtop :bottom="100">
    <el-progress
      type="circle"
      :percentage="precentage"
      :width="50"
      :visibility-height="200"
      style="background-color: transparent"
      :duration="0.5"
    >
      <el-button circle style="font-size: 30">
        <!-- <i class="el-icon-caret-top"></i> -->
        <svg-icon :name="'up'" />
      </el-button>
    </el-progress>
  </el-backtop>
</template>

<script>
// import {arrow-up-bold} from
export default {
  name: "back_up",
  data() {
    return {
      precentage: 0,
    };
  },
  methods: {
    //监听滚动事件,修改进度条
    handleScrollx() {
      //body 全文高度
      const BodyHeigh = document.body.scrollHeight;
      //已经完成浏览的高度：不可见高度加当前视窗高度
      const readedHeigh =
        document.documentElement.scrollTop + document.body.clientHeight;
      this.precentage = Number(100 * (readedHeigh / BodyHeigh));
    },
  },
  mounted() {
    // 滚动条的获取
    window.addEventListener("scroll", this.handleScrollx, true);
  },
};
</script>
<style lang='scss' scoped>
</style>