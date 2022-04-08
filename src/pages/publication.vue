<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-02 20:18:52
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-08 23:25:42
 * @@param: 
-->
<template>
  <div>
    <headCom></headCom>
    <el-row class="publication" justify="center">
      <el-col :span="4">
        <!-- 设置导航栏 -->
        <el-menu default-active="0" class="el-menu-vertical">
          <el-menu-item
            :index="String(index)"
            v-for="(publicationItem, index) in publicationList"
            :key="index"
            @click="handleClickNevgation(index)"
          >
            <!-- <el-icon><icon-menu /></el-icon> -->
            <span>{{ publicationItem.year }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="16">
        <!-- //遍历每年的数据 -->
        <el-timeline
          v-for="({publicationItem, index}) in publicationList"
          :key="index"
          v-show="index == activateIndex"
          style="text-align: start"
        > 
        <!-- //显示栏目类别 -->
          <el-button type="primary" color="#e8f5fd" round class="time-title">{{
            publicationItem.year
          }}</el-button>
          <el-timeline-item
            v-for="(publication, index) in publicationItem.content"
            :key="index"
            :timestamp="publication.date"
            placement="top"
          >
            <el-card>
              <template #header>
                <div class="card-header">
                  <i class="el-icon-document"></i
                  ><span>{{ publication.Title }}</span>
                </div>
              </template>
              <el-row justify="start">
                <!-- //css控制防止溢出，使用文字提示显示全部作者 -->
                <el-col :md="16" :sm="24" :xs="24" class="publication_author">
                  <el-tooltip :content="publication.author">
                    <p>
                      <i class="el-icon-user-solid"></i>{{ publication.author }}
                    </p>
                  </el-tooltip>
                </el-col>
                <el-col
                  :md="4"
                  :sm="24"
                  :xs="24"
                  class="publication_periodical"
                >
                  <!-- 期刊名称 -->
                  <el-tag class="ml-2" type="info">{{
                    publication.periodical
                  }}</el-tag>
                </el-col>
                <el-col :md="3" :sm="24" :xs="24" class="publication_doi">
                  <!-- 原文地址 -->
                  <i class="el-icon-paperclip"></i>
                  <el-link
                    type="primary"
                    :href="publication.doi"
                    target="_blank"
                    >原文</el-link
                  >
                </el-col>
              </el-row>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
      <!-- 显示浏览进度条与返回第一层 -->
      <backup></backup>
    </el-row>
    <footerCom></footerCom>
  </div>
</template>
<script>
import backup from "@/components/backup";
import { get_publication } from "@/API/publication";
import footerCom from "@/components/footer";
import headCom from "@/components/header";
export default {
  data() {
    return {
      publicationList: [],
      activateIndex: 0,
    };
  },
  name: "publication",
  methods: {
    handleClickNevgation(itemIndex) {
      this.activateIndex = itemIndex;
      //   console.log(itemIndex, this.activateIndex);
    },
  },
  created() {
    //loading
    let loader = this.$loading.show({
      // Optional parameters
      container: this.fullPage ? null : this.$refs.formContainer,
      canCancel: true,
      color: "#3a78ff",
      loader: "spinner",
      height: 128,
      width: 128,
    });
    get_publication().then((res) => {
      this.publicationList = res.data.info;
      //请求到数据，关闭loading
      loader.hide();
    });
  },
  components:{
    backup,
    footerCom,
    headCom
  }
};
</script>
<style lang='scss' scoped>
.publication{
  margin-top: 20px;
}
.el-menu-vertical {
  border-right: 0px;
}
.publication_author {
  p {
    max-width: 400px;
    /*强制文字在一行文本框内*/
    white-space: nowrap;
    /*溢出部分文字隐藏*/
    overflow: hidden;
    /*溢出部分省略号处理*/
    text-overflow: ellipsis;
  }
}
.time-title{
  font-size: 25px;
  min-width: 100px;
  margin-bottom: 20px;
  background-color: #7dbbe1;
  border-color: white;

}
.card-header {
  font-size: 25px;
  i {
    margin-right: 4px;
  }
}
.publication_author,
.publication_periodical,
.publication_doi {
  font-size: 20px;
  margin: 5px 5px;
  text-align: start;
}
</style>