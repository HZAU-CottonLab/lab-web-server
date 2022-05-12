<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-22 15:09:50
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-09 22:47:39
 * @@param: 
-->
<template>
  <el-container class="el-footer">
    <el-row justify="center" align="middle">
      <el-col :span="8"> </el-col>
      <el-col :span="8">
        <div class="contact_info" >
          <h4>Concact:</h4>
          <div class="contact_localtion">
            Norman Borlaug Center for Southern Crop Improvement 2123 TAMU, Rm
            112. College Station, TX 77840
          </div>
          <div class="contact_email">e-mail: xiuren.zhang@tamu.edu</div>
          <div class="contact_tel">Tel: 979-458-0596</div>
        </div>
      </el-col>
      <el-col :span="24">
        <strong>Copyright © 2021 | All rights reserved</strong>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "footer-main",
};
</script>
<style lang='scss' scoped>
.el-footer {
  background-image: url("https://btiscience.org/wp-content/uploads/polygonal.jpg");
  height: 100%;
  width: 100%;
  padding: 0px 0px;
  .el-row {
    width: 100%;
  }
}
.contact_info {
  line-height: 2;
  text-align: start;
  .contact_localtion {
    font-size: 18px;
  }
  .contact_email,
  .contact_tel {
    font-size: 14px;
    font-style: italic;
  }
}
</style>