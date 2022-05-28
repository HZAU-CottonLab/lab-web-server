<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-27 15:38:32
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-27 21:57:20
 * @@param: 
-->
<template>
  <div class="info">
    <el-row justify="center" align="middle">
      <el-col :md="6" :lg="3" :xl="4" :sm="6">
        <!-- action="/dev-api/login" -->
        <!--//todo 跨域请求需要解决 -->
        <!-- https://juejin.cn/post/7067463716119248903 -->
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <img class="avatar" v-if="imageUrl" :src="imageUrl" fit="cover" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-col>
      <el-col :md="16" :lg="20" :xl="18" :sm="16" style="height: 400px">
        <div class="title-wrap">
          <div class="title">
            <span>基本信息</span>
          </div>
        </div>
        <el-form :model="formInline" class="info-form">
          <el-form-item label="姓名">
            <el-input v-model="formInline.name" placeholder="" />
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="formInline.sex">
              <el-option label="男" value="0" />
              <el-option label="女" value="1" />
            </el-select>
          </el-form-item>
          <el-form-item label="身份">
            <el-select v-model="formInline.peopleType">
              <el-option label="教师" value="0" />
              <el-option label="博后" value="1" />
              <el-option label="博士" value="2" />
              <el-option label="硕士" value="3" />
              <el-option label="访问学者" value="4" />
            </el-select>
          </el-form-item>
          <div v-if="teacher_form">
            <el-form-item label="职称">
              <el-input v-model="formInline.jobTitle" placeholder="" />
            </el-form-item>
            <el-form-item label="招生资格">
              <el-input v-model="formInline.recruit" placeholder="" />
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="formInline.contact" placeholder="" />
            </el-form-item>
            <el-form-item label="办公地点">
              <el-input v-model="formInline.officeSite" placeholder="" />
            </el-form-item>
          </div>
          <!-- /**学生身份才显示这些 */ -->
          <div v-if="formInline.peopleType.length != 0 && !teacher_form">
            <el-form-item label="导师">
              <el-select v-model="formInline.teacher">
                <el-option label="张献龙" value="0" />
                <el-option label="朱龙付" value="1" />
                <el-option label="林忠旭" value="2" />
                <el-option label="涂礼莉" value="3" />
                <el-option label="杨细燕" value="4" />
                <el-option label="金双侠" value="5" />
                <el-option label="王茂军" value="6" />
                <el-option label="袁道军" value="7" />
                <el-option label="闵林" value="8" />
              </el-select>
            </el-form-item>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
const imageUrl = ref("");
const formInline = reactive({
  name: "",
  sex: "",
  peopleType: "",
  jobTitle: "",
  recruit: "",
  contact: "",
  officeSite: "",
  teacher: "",
});

const teacher_form = computed(() => {
  if (formInline.peopleType != "0") {
    return false;
  }
  return true;
});

/**
 * 头像上传
 */
const handleAvatarSuccess = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw);
  //阻止原有的点击事件
};
const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("Avatar picture must be JPG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
};
const handlePictureCardPreview = () => {
  console.log("111");
};
const handleRemove = () => {
  console.log("22");
};
</script>
<style lang='scss' scoped>
.info {
  margin: 20px 0;
}
.avatar-uploader {
  box-shadow: 0 0 5px 1px #999;
  width: 250px;
  height: 300px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  text-align: center;
}
.avatar {
  //   width: 100%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 40px 40px 40px 40px;
}

.title-wrap {
  width: 100%;
  display: flex;
  padding: 5px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 0px 10px 10px 20px;
  background: #007e43;
  .title {
    border-radius: 0px 10px 10px 20px;
    background: white;
    width: 150px;
    display: inherit;
    span {
      margin-left: 20px;
      color: #007e43;
    }
  }
}
.info-form {
  margin: 10px 0;
}
</style>