<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-03-31 13:20:33
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-02 15:20:02
 * @@param: 
-->
<template>
  <el-row justify="center" v-if="people_Cat_infs">
    <el-col><headCom></headCom></el-col>
    <el-col :md="4" class="hidden-sm-and-down navigation-people">
      <el-timeline style="width: 120px; margin-top: 200px; position: fixed">
        <el-timeline-item
          v-for="(peopleType, index) in scroolActivities"
          :key="index"
          size="large"
          :hollow="true"
          :hide-timestamp="true"
          @click="handleNavClick(index)"
        >
          <!-- 颜色属性绑定到label -->
          <span :style="{ color: '' + peopleType.color + '' }">{{
            peopleType.title
          }}</span>
        </el-timeline-item>
      </el-timeline>
    </el-col>
    <el-col class="people-item" :md="16" :sm="18" :xs="24">
      <!-- #* lead的描述 -->
      <div ref="people_lead" v-if="leader_info" id="people0">
        <el-row justify="start" align="center" style="align-items: center">
          <el-col :md="16" :sm="24" class="people-lead">
            <!-- //团队lead 类别 -->
            <span class="people-lead-title">{{ leader_info.title }}</span>
            <div class="people-lead-description">
              <span></span>
              <p>
                {{ leader_info.description }}
              </p>
            </div>
          </el-col>
          <el-col :md="8" :sm="24"
            ><avatar_card :imageURL="leader_info.imageURL"></avatar_card>
          </el-col>
        </el-row>
      </div>
      <!-- #* 其他团队成员，批量选择的 -->
      <!-- <el-col  :md="16" :sm="18" :xs="24"> -->
      <peopleType
        v-for="(item, index) in people_Cat_infs.slice(1,)"
        :key="index"
        :id="item.id"
        :CategoryTitle="item.title"
        :imageList="item.peopleInfos"
      ></peopleType>
      <!-- </el-col> -->
    </el-col>
    <el-col><footerCom></footerCom></el-col>
    <backup></backup>
  </el-row>
</template>

<script>
// import { Edit  } from "@element-plus/icons-vue";
import peopleType from "@/components/peopleType";
import backup from "@/components/backup";
import avatar_card from "@/components/avatar";
import footerCom from "@/components/footer";
import headCom from "@/components/header";
import { mapState } from "vuex";
// 请求后端的API
import { PeopleItem } from "@/API/User";

export default {
  name: "people_brief",
  data() {
    const people_Cat_infs = Array();
    return {
      people_Cat_infs,
    };
  },
  components: {
    peopleType,
    backup,
    avatar_card,
    headCom,
    footerCom,
  },
  computed: {
    leader_info() {
      /**
       * 存在异步请求带来的问题，对请求结果进行判断
       *
       */
      let tmpData = this.people_Cat_infs[0];
      if (tmpData) {
        return {
          title: tmpData.title,
          email: tmpData.peopleInfos[0].email,
          imageURL: tmpData.peopleInfos[0].imageURL,
          name: tmpData.peopleInfos[0].name,
          description: tmpData.peopleInfos[0].description,
        };
      } else {
        return null;
      }
    },
    ...mapState({
      //获取当前处于活跃状态的PeopleType
      activatePeopleTypeItem: (store) => store.main.activatePeopleType,
    }),
    scroolActivities() {
      let abs_Distance = this.activatePeopleTypeItem.map(Math.abs);
      let activeIndex = abs_Distance.indexOf(Math.min(...abs_Distance));
      //根据当前所有组件距离视窗的高度，计算此时距离最近的组件是哪个
      let tableActiveItem = [];
      this.people_Cat_infs.forEach((element, index) => {
        //索引从0开始
        if (index === activeIndex) {
          element.color = "#66befc";
          tableActiveItem.push(element);
        } else {
          element.color = "grey";
          tableActiveItem.push(element);
        }
      });
      return tableActiveItem;
    },
  },
  methods: {
    handleNavClick(peopleIndex) {
      //获取页面内元素进行跳转
      const scrollDom = document.getElementById("people" + peopleIndex);
      //点击后进行页面内锚点跳转
      scrollDom.scrollIntoView();
    },
    handleScrollx() {
      // 由于people_Cat_infs中第一个元素没有单独拎出来了
      //计算其距离视窗的高度，改变对应的导航栏
      const disant_to_top = this.$refs.people_lead.getBoundingClientRect().top;
      this.$store.commit("main/setActivatePeopleType", {
        id: 0, //lead 栏目，默认赋值为0
        distance: disant_to_top,
      });
    },
  },
  created() {
    PeopleItem().then(
      //向后端发起请求，用于获取用户信息,得到信息之后赋值给data中定义的数据
      (res) => {
        this.people_Cat_infs = res.data.info;
        // this.leader_info=
        // console.log(res);
      }
    );
  },
  mounted() {
    //对于people lead 栏目的监听
    window.addEventListener("scroll", this.handleScrollx, true);
  },
};
</script>
<style lang='scss' scoped>
body {
  background-color: #f5fdfe;
}
.people-item {
  margin-top: 30px;
  .people-lead {
    text-align: start;
    .people-lead-title {
      //图片分类的Header类型所在的标题栏
      min-width: 360px;
      width: 200px;
      background-color: #e9f5fe;
      border: 2px;
      border-radius: 10px;
      position: absolute;
      font-size: 30px;
      text-align: start;
      padding: 5px;
      margin-bottom: 45px;
    }
    .people-lead-description {
      margin-top: 50px;
      font-size: 20px;
      line-height: 1.5;
    }
  }
}
</style>