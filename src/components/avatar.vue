<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-01 17:13:59
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-02 10:32:24
 * @@param: 
-->
<template>
  <el-image :src="imageURL" fit="cover" :lazy="true" class="avatar-img">
  </el-image>
</template>

<script>
export default {
  name: "avatar_card",
  props: {
    imageURL: {
      type: String,
      default: () => "",
    },
  },
};
</script>
<style lang='scss' scoped>
.avatar-img {
  //圆角矩阵加阴影
  border: 2px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  margin: 0, 0;
  max-width: 400px;
  max-height: 400px;
}
</style>