<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-10-12 21:28:15
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-09 22:54:33
 * @@param: 
-->
<template>
  <el-row class="news_event">
    <el-col :span="4">
      <el-image
        src="https://btiscience.org/wp-content/uploads/222222222222.jpg"
        fit="contain"
      ></el-image>
    </el-col>
    <el-col :span="20">
      <el-row justify="center" align="middle">
        <el-col :span="24"><h4>Congratulations on Tao, our former CSC-supported visiting student, for publication in PLoS Pathogen. Good job, Tao!</h4></el-col>
        <el-col :span="24"><span>May 6, 2020</span></el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "news_cards",
};
</script>
<style lang='scss' scoped>
.news_event {
  margin: 30px 0;
  height: 100px;
}
</style>