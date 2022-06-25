<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-06-08 22:52:17
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-25 11:38:58
 * @@param: 
-->
<template>
  <el-row justify="center">
    <el-col :md="6" :lg="3" :xl="4" class="avatar-wrapper">
      <h2>封面图片</h2>
      <UploadAvatar
        v-model:imagURL="state.researchItemData.imageURL"
        class="avatar"
      ></UploadAvatar>
    </el-col>
    <el-col :md="16" :lg="10" :xl="12" class="infoForm">
      <el-form
        :mode="state.researchItemData"
        label-width="80px"
        :style="{ width: isMobile != true ? '600px' : '90%' }"
      >
        <el-form-item label="标题" prop="title">
          <el-input
            v-model="state.researchItemData.title"
            placeholder=""
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
          />
        </el-form-item>
        <el-form-item label="摘要" prop="description">
          <el-input
            v-model="state.researchItemData.description"
            placeholder=""
            type="textarea"
            :autosize="{ minRows: 15, maxRows: 30 }"
          />
        </el-form-item>
        <el-form-item label="发布时间" prop="date">
          <el-date-picker
            v-model="state.researchItemData.date"
            type="date"
            placeholder="选择日期"
            size="large"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
        <el-form-item label="置顶" prop="latest">
          <el-switch
            v-model="state.researchItemData.latest"
            inline-prompt
            active-text="yes"
            inactive-text="no"
            active-color="#13ce66"
            inactive-color="#ff4949"
            size="large"
          />
        </el-form-item>
        <!-- <el-form-item>
          <el-button type="success">保存</el-button>
          <el-button type="info" @click="handlePreView">预览</el-button>
        </el-form-item> -->
      </el-form>
    </el-col>
    <el-col :md="22" :lg="13" :xl="16" class="info-editor">
      <EditorInfo
        v-model:htmlValue="state.researchItemData.vhtml"
        ref="ediforRef"
      ></EditorInfo>
    </el-col>
    <el-col :span="24" class="operation-button">
      <div>
        <el-button
          type="success"
          @click="handle_save_News"
          v-if="newsId == null"
          >保存</el-button
        >
        <el-button type="success" @click="handle_update_News" v-else
          >更新</el-button
        >
        <el-button type="info" @click="handlePreView">预览</el-button>
      </div>
    </el-col>
    <el-drawer
      v-model="state.drawer"
      title="新闻稿预览"
      direction="ltr"
      size="60%"
    >
      <div style="display: flex; justify-content: center"></div>
    </el-drawer>
  </el-row>
</template>

<script setup>
import { DeviceType } from "@/store/modules/app.js";
import UploadAvatar from "../team/info-editor/upload-avatar.vue";
import { onBeforeMount, reactive, computed, ref } from "vue";
import useResize from "@/pages/dashboard/layout/useResize.js";
import { useRoute } from "vue-router";
import EditorInfo from "./editor/wangEditor.vue";
import { addNews, getNews_byId, updateNews } from "@/API/news.js";
import { ElMessage } from "element-plus";
const { device } = useResize();
const isMobile = computed(() => {
  //device属于计算属性，需要使用value获取其值
  if (device.value === DeviceType.Desktop) {
    return false;
  }
  //移动端
  return true;
});
const ediforRef = ref(null);
const state = reactive({
  researchItemData: {
    imageURL: null,
    date: "",
    title: "",
    description: "",
    id: null,
    vhtml: "",
    latest: false, //是否属于置顶新闻
    check: false,
  },
  drawer: false,
});

const handlePreView = () => {
  state.drawer = !state.drawer;
};
const handle_save_News = () => {
  //TODO 手动触发editor中的事件
  ediforRef.value.upDateHtmlValue();
  addNews(state.researchItemData).then((res) => {
    //保存数据
    console.log(res);
  });
};

const handle_update_News = () => {
  //点击保存后，图片才会和news进行关联
  //未保存前的图片，需要进一步清理
  ediforRef.value.upDateHtmlValue();
  updateNews(state.researchItemData).then((res) => {
    if (res.data.errno == 0) {
      ElMessage.success("数据保存成功!");
    }
  });
};

const route = useRoute();
const newsId = route.query.id;
onBeforeMount(() => {
  //向后端发起数据请求
  /**
   * todo 根据新闻ID，向后端请求对应的数据
   */
  if (newsId == null) {
    //添加新的新闻,API
    console.log("新闻添加");
  } else {
    getNews_byId({ id: newsId }).then((res) => {
      //* 获取后台数据
      state.researchItemData = res.data.data;
    });
  }
});
</script>
<style lang='scss' scoped>
.avatar-wrapper {
  display: flex;
  justify-content: center;
  // margin: 20px 0;
  align-content: center;
  flex-direction: column;
  .avatar {
    display: flex;
    justify-content: center;
    margin: 10px 0px;
  }
}
.infoForm {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>