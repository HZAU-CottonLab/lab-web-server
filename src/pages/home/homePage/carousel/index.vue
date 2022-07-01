<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-07 17:05:29
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-28 19:46:25
 * @@param: 
-->
<template>
  <el-carousel
    :interval="6000"
    arrow="always"
    :height="carouselHeigh"
    v-if="state.carousels_list.length != 0"
    ref="carouselRef"
  >
    <el-carousel-item v-for="item in state.carousels_list" :key="item.id">
      <div
        :style="{
          'background-image': 'url(' + item.imageURL + ')',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
        }"
        class="carousel-item-bg"
      >
        <div class="carousel-wraper">
          <div class="carousel-title">
            <div class="carousel-content">
              <h3 class="ml6">
                <span class="text-wrapper">
                  <span class="letters">
                    <span
                      v-for="(text, index) in item.title"
                      :key="index"
                      class="letter"
                    >
                      {{ text }}
                    </span>
                  </span>
                </span>
              </h3>
            </div>
            <div class="carousel-click">
              <el-button type="info" @click="handleClick(item.id)"
                >Learn More</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import { getCarouselsList } from "@/API/news.js";
import { reactive, onBeforeMount, defineProps, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import anime from "animejs";
defineProps({
  carouselHeigh: {
    type: String,
    required: true,
  },
});
const state = reactive({
  carousels_list: [],
});

const carouselRef = ref(null);
const router = useRouter();
const handleClick = (newsId) => {
  //进行_klack跳转
  const routeUrl = router.resolve({
    name: "news",
    query: {
      id: newsId,
    },
  });
  window.open(routeUrl.href, "_blank");
};

onBeforeMount(() => {
  getCarouselsList().then((res) => {
    //图片加载时间太长了,将会导致title不会显示
    state.carousels_list = res.data.data;
  });
});
onMounted(() => {
  //虽然挂载到dom,但是需要显示的dom元素不一定会出现
  // 将字体格式化为对应的元素
  setTimeout(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml6 .letter",
        translateY: ["1.3em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i,
      })
      .add({
        targets: ".ml6",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }, 1000);
});
</script>
<style lang='scss' scoped>
.carousel-item-bg {
  width: 100%;
  height: 100%;
}
.carousel-wraper {
  height: 100%;
  position: relative;
  .carousel-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    .carousel-content {
      border-radius: 8px;
      padding: 20px;
      max-width: 60%;
      // box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
      background-color: rgba(45, 45, 45, 0.5);
      .ml6 {
        position: relative;
        display: inline-block;
        padding-top: 0.2em;
        padding-right: 0.05em;
        padding-bottom: 0.1em;
        overflow: hidden;
      }
      span {
        color: white;
        height: 100%;
        word-wrap: break-word;
        display: inline-block;
      }
      .letter {
        display: inline-block;
        line-height: 0.6em;
      }
    }
  }
  .carousel-click {
    position: relative;
    float: right;
    margin-top: 20px;
    .el-button {
      cursor: pointer;
      font-size: 24px;
    }
  }
}
</style>