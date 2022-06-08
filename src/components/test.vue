<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-07 17:30:19
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-08 21:38:15
 * @@param: 
-->
<template>
  <div>
    <h1 class="ml6" ref="ml">
      <span class="text-wrapper">
        <span class="letters" ref="letters">Beautiful Questions</span>
      </span>
    </h1>
  </div>
</template>

<script setup>
import anime from "animejs";
import { onMounted, ref } from "vue";
const ml = ref(null);
const letters = ref(null);
onMounted(() => {
  var textWrapper = document.querySelector(".ml6 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter' style='display: inline-block; line-height: 1em;'>$&</span>"
  );
  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml6 .letter",
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => {
        return 50 * i;
      },
    })
    .add({
      targets: ".ml6",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
});
</script>

<style lang="scss" scoped>
.ml6 {
  position: relative;
  font-weight: 900;
  font-size: 3.3em;
}

.ml6 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
  .letter {
    display: inline-block;
    line-height: 1em;
  }
}
</style>
