<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-06 17:06:44
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-09 10:24:24
 * @@param: 
-->
/* <!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-06 17:06:44
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-06 20:03:11
 * @@param: 
-->
<template>
  <div class="newCard-wrapper">
    <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
      <img :src="newsItem.imageURL" class="image-card" />
      <div style="padding: 14px" class="card-content">
        <div class="card-title">
          <h3>{{ newsItem.title }}</h3>
        </div>
        <div class="news-date">
          <span>
            <el-icon :size="21"><Timer /></el-icon>
            {{ newsItem.date }}
          </span>
        </div>
        <div class="card-abstract">
          <!-- //描述性文字的收缩 -->
          <TextCollapse
            :id="'news' + newsItem.id"
            :width="'98%'"
            :content="newsItem.description"
          ></TextCollapse>
        </div>
        <div class="bottom">
          <!-- <time class="time">{{ currentDate }}</time> -->
          <el-row justify="start" align="middle">
            <el-col :span="8">
              <el-icon :size="24" @click="handleEditor(newsItem.id)">
                <Edit /> </el-icon
            ></el-col>
            <el-col :span="8">
              <el-popconfirm
                confirm-button-text="Yes"
                cancel-button-text="No"
                :icon="InfoFilled"
                icon-color="#626AEF"
                title="Are you sure to delete this?"
                @confirm="handleDelete(newsItem.id)"
              >
                <template #reference>
                  <el-icon :size="24">
                    <Delete />
                  </el-icon>
                </template> </el-popconfirm
            ></el-col>
            <el-col :span="8">
              <el-switch
                v-model="check"
                inline-prompt
                active-text="已审"
                inactive-text="未审"
                active-color="#13ce66"
                inactive-color="#ff4949"
                size="large"
                @change="handleCheckChange(newsItem.id)"
              />
            </el-col>
          </el-row>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import TextCollapse from "@/components/text-collapse.vue";
import { Timer } from "@element-plus/icons-vue";
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
import { Delete, Edit, InfoFilled } from "@element-plus/icons-vue";
defineProps({
  newsItem: {
    type: Object,
    required: true,
  },
});
const check = ref(false);
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

const handleDelete = (newsId) => {
  //新闻是否删除
  console.log("删除新闻", newsId);
};
const handleCheckChange = (newsId) => {
  console.log("修改新闻状态", newsId);
};
const handleEditor = (newId) => {
  const routeUrl = router.resolve({
    name: "dashboard-news-editor",
    query: {
      id: newId,
    },
  });
  router.push(routeUrl).catch((error) => {
    console.warn(error);
  });
};
</script>
<style lang='scss' scoped>
.newCard-wrapper {
  margin: 20px 0px;
}
.card {
  max-width: 400px;
}
.image-card {
  object-fit: contain;
  max-height: 300px;
}
.news-date {
  text-align: start;
  padding-left: 20px;
  font-size: 20px;
}
</style> 