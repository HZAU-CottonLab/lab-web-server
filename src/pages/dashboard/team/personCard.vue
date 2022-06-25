<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-06 17:06:44
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-23 21:22:26
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
      <!-- <img :src="newsItem.imageURL" class="image-card" /> -->
      <Avatar :imgURL="newsItem.imageURL" class="image-card" />
      <div style="padding: 14px" class="card-content">
        <div class="card-title">
          <h3>{{ newsItem.name }}</h3>
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
// import TextCollapse from "@/components/text-collapse.vue";
// import { Timer } from "@element-plus/icons-vue";
import Avatar from "./info-show/avatar.vue";
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


const handleDelete = (newsId) => {
  //新闻是否删除
  console.log("删除研究", newsId);
};
const handleCheckChange = (newsId) => {
  console.log("修改研究领域状态", newsId);
};
const handleEditor = (newId) => {
  const routeUrl = router.resolve({
    //编辑个人信息
    name: "dashboard-team-editor",
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
  justify-content: center;
  display: flex;
}
.card {
  max-width: 255px;
}
.image-card {
  // object-fit: contain;
  max-height: 300px;
}
.news-date {
  text-align: start;
  padding-left: 20px;
  font-size: 20px;
}
</style> 