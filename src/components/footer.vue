<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-22 15:09:50
 * @LastEditors: zpliu
 * @LastEditTime: 2021-10-14 09:42:59
 * @@param: 
-->
<template>
  <el-container class="el-footer">
    <el-row justify="center" align="center">
      <!-- <el-col :span="24">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
            fill="#00cba9"
            fill-opacity="1"
            d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,208C672,235,768,213,864,197.3C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          </svg>
        </el-col > -->
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