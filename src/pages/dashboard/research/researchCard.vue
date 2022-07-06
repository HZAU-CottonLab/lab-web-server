<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-06 17:06:44
 * @LastEditors: zpliu
 * @LastEditTime: 2022-07-06 17:26:33
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
          <!-- //描述性文字的收缩 ,必须要有一个唯一性的ID作为标识符-->
          <TextCollapse
            :id="newsItem.id == null ? 'research0' : 'research' + newsItem.id"
            :width="'98%'"
            :content="newsItem.description"
          ></TextCollapse>
        </div>
        <div v-if="roles.includes('admin') ? true : false">
          <div class="bottom" v-if="!demoCom">
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
import { deleteResearchItem, checkResearchItem } from "@/API/research.js";
import { ElMessage } from "element-plus";
import { useState } from "@/utils/storehook.js";
const props = defineProps({
  newsItem: {
    type: Object,
    required: true,
  },
  demoCom: {
    type: Boolean,
    default: false,
  },
});
const { roles } = useState("user", ["roles"]);
//从items复制数据
const check = ref(props.newsItem.check);
const router = useRouter();
const handleDelete = (researchId) => {
  //新闻是否删除
  deleteResearchItem({ id: researchId }).then((res) => {
    if (res.data.errno == 0) {
      ElMessage.success(res.data.message);
    }
  });
};
const handleCheckChange = (researchId) => {
  //改变新闻状态
  checkResearchItem({ id: researchId, check: check.value }).then((res) => {
    if (res.data.errno == 0) {
      ElMessage.success(res.data.message);
    }
  });
};
const handleEditor = (newId) => {
  const routeUrl = router.resolve({
    name: "dashboard-research-editor",
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