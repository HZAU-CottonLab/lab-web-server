<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-06 22:30:06
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-06 22:44:25
 * @@param: 
-->
<template>
  <div class="wrapper" :style="{ width: width }">
    <input :id="id" class="exp" type="checkbox" />
    <div class="text">
      <label class="btn" :for="id"></label>
      {{ content }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    require: true,
    type: String,
    default: "exp1",
  },
  content: {
    require: true,
    type: String,
  },
  width: {
    require: true,
    default: "300px", //设置父元素的宽度
  },
});
</script>
<style lang='scss' scoped>
.wrapper {
  display: flex;
  margin: 15px auto;
  width: 800px;
  overflow: hidden;
  /*   resize: horizontal; */
  // border-radius: 8px;
  // padding: 10px;
  // box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}
.text {
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  /* display: flex; */
  /*   display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; */
  position: relative;
  line-height: 1.5;
  max-height: 4.5em;
  transition: 0.3s max-height;
}
.text::before {
  content: "";
  height: calc(100% - 26px);
  float: right;
}
.text::after {
  content: "";
  width: 999vw;
  height: 999vw;
  position: absolute;
  box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
  margin-left: -100px;
}
.btn {
  position: relative;
  float: right;
  clear: both;
  margin-left: 20px;
  font-size: 16px;
  padding: 0 8px;
  background: #3f51b5;
  line-height: 24px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  /* margin-top: -30px; */
}
.btn::after {
  content: "展开";
}
.exp {
  display: none;
}
.exp:checked + .text {
  max-height: none;
}
.exp:checked + .text::after {
  visibility: hidden;
}
.exp:checked + .text .btn::before {
  visibility: hidden;
}
.exp:checked + .text .btn::after {
  content: "收起";
}
.btn::before {
  content: "...";
  position: absolute;
  left: -5px;
  color: #333;
  transform: translateX(-100%);
}
</style>