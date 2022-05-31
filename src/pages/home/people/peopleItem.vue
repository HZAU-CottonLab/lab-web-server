<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-13 10:59:43
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-31 22:36:50
 * @@param: 
-->
<template>
  <div class="pageType" :id="'people' + id">
    <el-row justify="start">
      <!-- 使用具名插槽区分不同类型数据 -->
      <el-col class="PeopleHeader" :span="24">
        <span>{{ CategoryTitle }}</span>
      </el-col>
      <el-col
        :md="10"
        :sm="24"
        :xs="24"
        v-for="(User, index) in imageList"
        :key="index"
        style="text-align: center; margin-top: 20px"
      >
        <div style="position: relative" class="people-info">
          <el-image
            :src="User.imageURL"
            fit="cover"
            :lazy="true"
            class="avatar-img"
            @click="handAvatrClick(User.id)"
            @mouseover="handleHover(index)"
            @mouseout="handleHover(index)"
          >
          </el-image>
          <!-- //hover时显示图标 -->
          <el-icon
            v-if="state.hoverList[index]"
            :size="30"
            :color="'white'"
            style="position: absolute; left: 48%; top: 25%"
            ><Search
          /></el-icon>
          <div class="people-name">
            <span>{{ User.name }}</span>
          </div>
          <div class="people-position">
            <span>{{ User.position }}</span>
          </div>
          <div class="people-contact">
            <a :href="'mailto:' + User.email" target="_blank"
              ><span>{{ User.email }}</span></a
            >
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { defineProps, getCurrentInstance, onMounted, reactive } from "vue";
import { useMutations } from "@/utils/storehook.js";
import { Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const state = reactive({
  //初始化hover列表
  hoverList: Array.from({ length: props.imageList.length }, () => false),
});
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  CategoryTitle: {
    type: String,
    required: true,
    default: () => "Custome Title",
  },
  imageList: {
    type: Array,
    default: () => [
      {
        email: "1944532210@qq.com",
        position: "associate profesor",
        name: "zpliu",
        imageURL:
          "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      },
      {
        email: "1944532210@qq.com",
        position: "associate profesor",
        name: "zpliu1",
        imageURL:
          "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      },
      {
        email: "1944532210@qq.com",
        position: "associate profesor",
        name: "zpliu2",
        imageURL:
          "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      },
    ],
  },
});
const instance = getCurrentInstance();
const { proxy } = instance;
const { setActivatePeopleType } = useMutations("main", [
  "setActivatePeopleType",
]);
const handleScrollx = () => {
  const disant_to_top = proxy.$el.getBoundingClientRect().top;
  //将当前的高度，存储到store中
  setActivatePeopleType({
    id: props.id,
    distance: disant_to_top,
  });
};
const router = useRouter();
const handAvatrClick = (personId) => {
  //进行_klack跳转
  const routeUrl = router.resolve({
    name: "person",
    query: {
      id: personId,
    },
  });
  window.open(routeUrl.href, "_blank");
};
//显示图标
const handleHover = (index) => {
  state.hoverList[index] = !state.hoverList[index];
};
onMounted(() => {
  //鉴定滚动事件
  window.addEventListener("scroll", handleScrollx, true);
});
</script>
<style lang='scss' scoped>
.pageType {
  margin-top: 10px;
  .PeopleHeader {
    text-align: start;
  }
  .PeopleHeader {
    margin-bottom: 55px;
    margin-top: 10px;
    span {
      //图片分类的Header类型所在的标题栏
      min-width: 360px;
      // width: 150px;
      background-color: #e9f5fe;
      border: 2px;
      border-radius: 10px;
      position: absolute;
      font-size: 30px;
      text-align: start;
      padding: 5px;
    }
  }
}
//用户图片
.avatar-img {
  //圆角矩阵加阴影
  border: 2px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  margin: 0, 0;
  max-width: 200px;
  max-height: 200px;
}
//hover显示阴影背景
.avatar-img:hover::after {
  content: "";
  width: 100%;
  height: 100%;
  background-size: 100% auto;
  background-color: rgb(41, 42, 43, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
}
.people-info {
  font-family: "Lato-Black";
  .people-name {
    font-size: 26px;
    color: #5b5657;
    letter-spacing: 0em;
    line-height: 1em;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .people-position {
    font-family: "Lato-Regular";
    font-size: 16px;
    line-height: 1.4;
    color: #5b5657;
    font-weight: bold;
    letter-spacing: 0em;
    font-style: italic;
  }
  .people-contact {
    font-family: "Lato-Regular";
    font-size: 16px;
    line-height: 1.4;
    color: #5b5657;
    font-weight: bold;
    letter-spacing: 0em;
    font-style: italic;
    color: #00498f;
    a {
      text-decoration: none;
      color: #00498f;
    }
  }
}
</style>