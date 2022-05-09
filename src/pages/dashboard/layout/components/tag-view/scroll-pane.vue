<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-08 18:58:26
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-08 18:58:49
 * @@param: 
-->
<template>
  <el-scrollbar :vertical="false" class="scroll-container">
    <slot />
  </el-scrollbar>
</template>

<style lang="scss" scoped>
.scroll-container {
  // 超出窗口长度时，显示滚动条
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
}
</style>