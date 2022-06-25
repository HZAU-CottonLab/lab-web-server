<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-04 11:22:09
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-10 19:29:19
 * @@param: 
-->
<template>
  <Carousel
    v-if="carouselList.length !== 0"
    :settings="state.settings"
    :breakpoints="state.breakpoints"
    class="carousel1"
  >
    <Slide
      v-for="(slide, index) in carouselList"
      :key="index"
      class="carousel__slide"
    >
      <div class="carousel__item">
        <el-image class="carousel__img" :src="slide.imageURL" fit="cover">
        </el-image>
        <div class="carousel__label">
          <el-link
            type="primary"
            :underline="false"
            target="_blank"
            style="font-size: 20px; color: #d4d4d4"
            @click.prevent="handleClick(slide.id)"
          >
            <el-icon :size="20"><search /></el-icon>
            <div>{{ slide.name }}</div>
          </el-link>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Pagination></Pagination>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>
// import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import { useRouter } from "vue-router";
import { Search } from "@element-plus/icons-vue";
import "vue3-carousel/dist/carousel.css";
import { reactive } from "vue-demi";
const props = defineProps({
  carouselList: {
    type: Array,
    default: () => [
      {
        imageURL:
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        title: "11",
        id: 0,
      },
      {
        imageURL:
          "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        title: "22",
        id: 0,
      },
      {
        imageURL:
          "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        title: "33",
        id: 0,
      },
      {
        imageURL:
          "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        title: "44",
        id: 0,
      },
      {
        imageURL:
          "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        title: "55",
        id: 0,
      },
      {
        imageURL:
          "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        title: "66",
        id: 0,
      },
      {
        imageURL:
          "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
        title: "77",
        id: 0,
      },
      {
        imageURL:
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        title: "88",
        id: 0,
      },
      {
        imageURL:
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        title: "88",
        id: 0,
      },
      {
        imageURL:
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        title: "10",
        id: 0,
      },
    ],
  },
});
const state = reactive({
  // carousel settings
  settings: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  breakpoints: {
    // 700px and up
    700: {
      itemsToShow: 3.5, //item数目不足是会有留白
      snapAlign: "center",
    },
    // 1024 and up
    1024: {
      itemsToShow: 5,
      snapAlign: "start",
    },
  },
});
const router = useRouter();
const handleClick = (personId) => {
  //进行_klack跳转
  const routeUrl = router.resolve({
    name: "person",
    query: {
      id: personId,
    },
  });
  window.open(routeUrl.href, "_blank");
};
</script>
<style lang="scss" scopped>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
// .carousel__slide {
//   padding: 0 5px;
// }
.carousel__item {
  //使用图层
  .carousel__img {
    position: relative;
    // position: inherit;
    z-index: -1;
    max-width: 160px;
    max-height: 160px;
  }
  .carousel__label {
    display: none;
    position: absolute;
    z-index: 1;
    bottom: 20%;
    left: 0%;
    right: 0%;
    margin: auto;
    font-size: 20px;
    // color: #f5f5f5;
    // color: red;
    font-weight: bold;
  }
}

//父节点获得焦点时，设置其显示
.carousel__item:hover {
  max-height: 160px; //遮罩和图片一样高，将会有一个动画效果
  background: rgba(0, 0, 0, 0.4);
  .carousel__label {
    display: inline;
  }
}
</style>