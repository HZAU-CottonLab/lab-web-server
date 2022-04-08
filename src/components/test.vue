<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-04 11:22:09
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-07 21:37:44
 * @@param: 
-->
<template>
  <Carousel :settings="settings" :breakpoints="breakpoints" class="carousel1">
    <Slide
      v-for="(slide, index) in carouselList"
      :key="index"
      class="carousel__slide"
    >
      <div class="carousel__item">
        <el-image class="carousel__img" :src="slide.imageURL"></el-image>
        <div class="carousel__label">
          <h3>{{ slide.title }}</h3>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Pagination></Pagination>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
// import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "Breakpoints",
  props: {
    carouselList: {
      type: Array,
      default: () => [
        {
          imageURL:
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          title: "11",
          clickURL: "",
        },
        {
          imageURL:
            "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          title: "22",
          clickURL: "",
        },
        {
          imageURL:
            "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          title: "33",
          clickURL: "",
        },
        {
          imageURL:
            "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
          title: "44",
          clickURL: "",
        },
        {
          imageURL:
            "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
          title: "55",
          clickURL: "",
        },
        {
          imageURL:
            "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
          title: "66",
          clickURL: "",
        },
        {
          imageURL:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "77",
          clickURL: "",
        },
        {
          imageURL:
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          title: "88",
          clickURL: "",
        },
      ],
    },
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
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
    //单向数据流，拷贝一份数据
  }),
};
</script>
<style lang="scss" scopped>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
.carousel__slide {
  padding: 0 5px;
}
.carousel__item {
  //使用图层
  .carousel__img {
    position: relative;
    // position: inherit;
    z-index: -1;
  }
  .carousel__label {
    display: none;
    position: absolute;
    z-index: 1;
    top: 50%;
    right: 50%;
    color: red;
  }
}
//父节点获得焦点时，设置其显示
.carousel__item:hover .carousel__label {
  display: inline;
}
</style>