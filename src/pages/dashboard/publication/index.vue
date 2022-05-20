<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-14 21:47:08
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-20 11:12:41
 * @@param: 
-->
<template>
  <div class="publication_wrap">
    <el-table :data="tableData" style="width: 100%" stripe height="700">
      <el-table-column label="Date">
        <template #default="scope">
          <el-icon><timer /></el-icon>
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Title" prop="Title" />
      <el-table-column align="right">
        <template #header>
          <el-select
            v-model="SelectValue"
            filterable
            placeholder="Select"
            :loading="selectLoading"
          >
            <el-option
              v-for="item in state.selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
        <template #default="scope">
          <el-button
            size="small"
            @click="handlePublicationEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handlePublicationdelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="Select_tableData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-size="pageSize"
      class="publication-pagination"
    />
    <DeleteDialog
      v-model:deleteDialogVisible="state.deleteDialogVisible"
      :id="state.deletId"
    ></DeleteDialog>
    <EditorDialog
      v-model:editorDialogVisible="state.editorDialogVisible"
      :id="state.editorId"
    ></EditorDialog>
  </div>
</template>

<script setup>
import { get_publication } from "@/API/publication";
import { computed, onBeforeMount, reactive, ref } from "vue";
import { Timer } from "@element-plus/icons-vue";
import DeleteDialog from "./publication-delete.vue";
import EditorDialog from "./publication-editor";
const state = reactive({
  PublicationData: [],
  selectOptions: [],
  deletId: -1,
  editorId: -1,
  deleteDialogVisible: false, //对话框是否开启
  editorDialogVisible: false, //对话框是否开启
});
//* 单选框值与是否loading
const SelectValue = ref(); //初始激活
const selectLoading = ref(true);
const page = ref(1); //默认第一页
const pageSize = ref(15);

//选择器中得到的总数据
const Select_tableData = computed(() => {
  //获取选择框初始激活的渲染数据
  if (state.PublicationData.length != 0) {
    if (SelectValue.value) {
      return state.PublicationData[SelectValue.value].content;
    } else {
      //初始化时，选择框内容填充；
      return state.PublicationData[0].content;
    }
  } else {
    return [];
  }
});

/**
 * 表格分页数据
 */
const tableData = computed(() => {
  if (Select_tableData.value.length > 0) {
    return Select_tableData.value.slice(
      (page.value - 1) * pageSize.value,
      page.value * pageSize.value
    );
  } else {
    return [];
  }
});
const handleSizeChange = (val) => {
  pageSize.value = val;
  page.value = 1;
};
const handleCurrentChange = (val) => {
  //修改当前所属页数
  page.value = val;
};

/**
 *
 */
const handlePublicationEdit = (index, row) => {
  state.editorDialogVisible = true;
  state.editorId = row.id;
  console.log(index);
};
const handlePublicationdelete = (index, row) => {
  state.deleteDialogVisible = true;
  state.deletId = row.id;
  //判断有没有成功删除；如果删除成功则修改table数据
  console.log(index);
};
onBeforeMount(() => {
  get_publication().then((res) => {
    state.PublicationData = res.data.info;
    //获取到文献数据后，将其填充到selectOptions中
    state.PublicationData.forEach((item, index) => {
      state.selectOptions.push({
        value: index,
        label: item.year,
      });
    });
    selectLoading.value = false;
  });
});
</script>
<style lang='scss' scoped>
// .publication_wrap {
//   margin-top: 5px 5px;
// }
.publication-pagination {
  width: 100%;
  justify-content: center;
  padding: 0px;
}
</style>