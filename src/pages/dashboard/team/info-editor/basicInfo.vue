<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-27 15:38:32
 * @LastEditors: zpliu
 * @LastEditTime: 2022-07-06 16:05:58
 * @@param: 
-->
<template>
  <div class="info">
    <el-row justify="center" align="top">
      <el-col :md="12" :lg="3" :xl="4" class="avatar">
        <Avatar v-model:imagURL="formInline.imgURL"></Avatar>
      </el-col>
      <el-col :md="12" :lg="20" :xl="18">
        <div style="width: 90%">
          <div class="title-wrap">
            <div class="title">
              <span>基本信息</span>
            </div>
          </div>
          <el-form
            :model="formInline"
            class="info-form"
            ref="ruleFormRef"
            :rules="rules"
          >
            <el-form-item label="姓名" prop="name">
              <el-input
                v-model="formInline.name"
                placeholder=""
                class="input-form"
              />
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-select v-model="formInline.sex">
                <el-option label="男" value="0" />
                <el-option label="女" value="1" />
              </el-select>
            </el-form-item>
            <el-form-item label="身份" prop="peopleType">
              <el-select v-model="formInline.peopleType">
                <el-option label="Teacher" value="0" />
                <el-option label="Post doctor" value="1" />
                <el-option label="PhD student" value="2" />
                <el-option label="Master Student" value="3" />
                <el-option label="Visiting Scholar" value="4" />
              </el-select>
            </el-form-item>
            <div v-if="teacher_form">
              <el-form-item label="职称" prop="jobTitle">
                <el-input
                  v-model="formInline.jobTitle"
                  placeholder=""
                  class="input-form"
                />
              </el-form-item>
              <el-form-item label="招生资格" prop="recruit">
                <el-input
                  v-model="formInline.recruit"
                  placeholder=""
                  class="input-form"
                />
              </el-form-item>
              <el-form-item label="办公地点" prop="officeSite">
                <el-input
                  v-model="formInline.officeSite"
                  placeholder=""
                  class="input-form"
                />
              </el-form-item>
              <el-form-item label="联系方式" prop="contact">
                <el-input
                  v-model="formInline.contact"
                  placeholder=""
                  class="input-form"
                />
              </el-form-item>
            </div>
            <!-- /**学生身份才显示这些 */ -->
            <div v-if="!teacher_form">
              <el-form-item label="导师">
                <el-select
                  v-model="formInline.teacher"
                  loading-text="Loading"
                  :loading="teacherSelectShow"
                >
                  <el-option
                    v-for="teacherInfor in state.teacherArray"
                    :label="teacherInfor.name"
                    :key="teacherInfor.id"
                    :value="teacherInfor.id"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="联系方式" prop="contact">
                <el-input
                  v-model="formInline.contact"
                  placeholder=""
                  class="input-form"
                />
              </el-form-item>
            </div>
            <!-- <el-button @click="submit(ruleFormRef)">111</el-button> -->
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, computed, onBeforeMount, ref, defineExpose } from "vue";
import { useState } from "@/utils/storehook.js";
import Avatar from "./upload-avatar.vue";
import {TeamItem} from '@/API/User.js'
const { personInfo } = useState("user", ["personInfo"]);
const ruleFormRef = ref();
//属性暴露给父组件
const formInline = ref(personInfo.value.basic);
defineExpose({
  ruleFormRef,
  formInline,
});
const state = reactive({
  teacherArray: [],
});
const validateContent_V1 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("内容不能为空"));
  }
  callback();
};
const rules = reactive({
  name: [{ validator: validateContent_V1, trigger: "blur" }],
  sex: [{ validator: validateContent_V1, trigger: "blur" }],
  peopleType: [{ validator: validateContent_V1, trigger: "blur" }],
  jobTitle: [{ validator: validateContent_V1, trigger: "blur" }],
  recruit: [{ validator: validateContent_V1, trigger: "blur" }],
  contact: [{ validator: validateContent_V1, trigger: "blur" }],
  officeSite: [{ validator: validateContent_V1, trigger: "blur" }],
  teacher: [{ validator: validateContent_V1, trigger: "blur" }],
});
const teacherSelectShow = computed(() => {
  /**
   * 等待后台响应数据,选择框
   */
  return state.teacherArray.length == 0;
});

const teacher_form = computed(() => {
  //只有选择的是老师的身份才进行展示
  if (
    formInline.value.peopleType == "Teacher" ||
    formInline.value.peopleType == 0
  ) {
    return true;
  }
  return false;
});
// 表单验证交给父组件
// const submit = (formInstance) => {
//   console.log("jiaoy");
//   formInstance.validate((valid) => {
//     if (valid) {
//       console.log("submit!");
//     } else {
//       console.log("error submit!");
//       return false;
//     }
//   });
// };
onBeforeMount(() => {
  TeamItem().then((res)=>{
      state.teacherArray = res.data.data
  })
  // setTimeout(() => {
  //   state.teacherArray = [
  //     { id: 0, name: "张献龙" },
  //     { id: 1, name: "朱龙付" },
  //     { id: 2, name: "林忠旭" },
  //     { id: 3, name: "涂礼莉" },
  //     { id: 4, name: "杨细燕" },
  //     { id: 5, name: "金双侠" },
  //     { id: 6, name: "王茂军" },
  //     { id: 7, name: "袁道军" },
  //     { id: 8, name: "闵林" },
  //   ];
  // }, 5000);
});
</script>
<style lang='scss' scoped>
.info {
  margin: 20px 0;
  .avatar {
    display: inherit;
    justify-content: center;
    margin: 20px 5px;
  }
}
.input-form {
  max-width: 214px;
}

.title-wrap {
  width: 100%;
  display: flex;
  padding: 5px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 0px 10px 10px 20px;
  background: #007e43;
  margin: 20px 10px;
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