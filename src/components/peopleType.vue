<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-03-31 18:53:09
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-02 15:09:03
 * @@param: 
-->
<template>
  <div ref="PeopleType" class="pageType" :id='"people"+id'>
    <el-row justify="start" display="flex">
      <!-- 使用具名插槽区分不同类型数据 -->
      <el-col class="PeopleHeader" :span="24">
        <span>{{CategoryTitle}}</span>
      </el-col>
      <el-col
        :md="10"
        :sm="24"
        :xs="24"
        v-for="(User, index) in imageList"
        :key="index"
        style="text-align:center"
      >
      <!-- //同一类型中的所有人 -->
        <avatar_card :imageURL="User.imageURL"> </avatar_card>
        <div>
          <span>{{ User.name }}</span>
        </div>
        <div>
          <span>{{ User.position }}</span>
        </div>
        <div>
          <span>{{ User.email }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import avatar_card from "@/components/avatar";
export default {
  name: "peopleType",
  props: {
    id: Number,
    CategoryTitle: {
      type: String,
      default: () => "Custome Title",
    },
    imageList: {
      type: Array,
      //ES6 return a Array
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
  },
  methods: {
    handleScrollx() {
      //滚动事件的响应函数
      //   const CompoentHeight=this.$refs.PeopleType.offsetHeight
      const disant_to_top = this.$refs.PeopleType.getBoundingClientRect().top;
      //修改状态, 指示当前处于活跃中的peopleItem
      // console.log(this.id,disant_to_top),计算每个子组件距离视窗的高度
      this.$store.commit("main/setActivatePeopleType", {
        id: this.id,
        distance: disant_to_top,
      });
    },
  },
  mounted() {
    // 滚动条的获取
    window.addEventListener("scroll", this.handleScrollx, true);
  },
  components: {
    avatar_card,
  },
};
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
</style>