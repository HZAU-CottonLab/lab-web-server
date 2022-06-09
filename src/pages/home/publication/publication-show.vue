<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-07 21:55:21
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-09 10:29:51
 * @@param: 
-->
<template>
  <el-row :gutter="10" justify="center">
    <el-col
      :md="4"
      :lg="4"
      :xl="4"
      :sm="3"
      :xs="3"
      v-show="publicationList.length != 0"
    >
      <el-menu :default-active="activateIndex" class="el-menu-vertical">
        <el-menu-item
          :index="String(index)"
          v-for="(publicationItem, index) in publicationList"
          :key="index"
          @click="handleClickNevgation(index.toString())"
        >
          <span>{{ publicationItem.year }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <!-- //文章数据 -->
    <el-col
      :md="20"
      :lg="20"
      :xl="20"
      :sm="21"
      :xs="21"
      v-show="publicationList.length != 0"
    >
      <el-timeline
        v-for="(publicationItem, index) in publicationList"
        :key="index"
        v-show="index == activateIndex"
        style="text-align: start"
      >
        <el-button type="primary" color="#e8f5fd" round class="time-title">
          {{ publicationItem.year }}
        </el-button>
        <!-- //显示文章 -->
        <el-timeline-item
          v-for="(publication, index) in publicationItem.content"
          :key="index"
          :timestamp="publication.date"
          placement="top"
        >
          <el-card>
            <!-- //文章标题 -->
            <template #header>
              <div class="card-header">
                <el-icon><Document /></el-icon>
                <span>{{ publication.Title }}</span>
              </div>
            </template>
            <!-- //文章作者信息 -->
            <el-row justify="start">
              <el-col :md="16" :sm="24" :xs="24" class="publication_author">
                <el-tooltip :content="publication.author">
                  <p>
                    <i class="el-icon-user-solid"></i>{{ publication.author }}
                  </p>
                </el-tooltip>
              </el-col>
              <el-col :md="4" :sm="24" :xs="24" class="publication_periodical">
                <!-- 期刊名称 -->
                <el-tag class="ml-2" type="info">{{
                  publication.periodical
                }}</el-tag>
              </el-col>
              <el-col :md="3" :sm="24" :xs="24" class="publication_doi">
                <!-- 原文地址 -->
                <el-icon><Paperclip /></el-icon>
                <el-link type="primary" :href="publication.doi" target="_blank"
                  >原文</el-link
                >
              </el-col>
            </el-row>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-col>
    <el-col :span="24" v-show="publicationList.length == 0">
      <!-- //搜索数据的响应 -->
      <span>空空如也</span>
    </el-col>
  </el-row>
</template>

<script setup>
import { Paperclip, Document } from "@element-plus/icons-vue";
import { defineProps, ref } from "vue";
defineProps({
  publicationList: {
    type: Array,
    default: () => [],
  },
});
const activateIndex = ref("0");
const handleClickNevgation = (itemIndex) => {
  activateIndex.value = itemIndex;
};
</script>
<style lang='scss' scoped>
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
.time-title {
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