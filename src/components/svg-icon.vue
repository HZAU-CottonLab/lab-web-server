<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-22 20:46:54
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-22 21:41:52
 * @@param: 
-->
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
