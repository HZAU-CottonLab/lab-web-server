<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-14 21:47:08
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-25 20:51:15
 * @@param: 
-->
<template>
  <div class="publication_wrap">
    <el-table :data="tableData" style="width: 100%" stripe height="700">
      <el-table-column label="Date">
        <template #default="scope">
          <el-icon><Timer /></el-icon>
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="title" prop="title" />
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
          <div>
            <el-button size="small" @click="handlePublicationEdit(scope.row)"
              >Edit</el-button
            >
            <el-popconfirm
              v-if="!searchCom"
              confirm-button-text="Yes"
              cancel-button-text="No"
              :icon="InfoFilled"
              icon-color="#626AEF"
              title="Are you sure to delete this?"
              @confirm="handlePublicationdelete(scope.row.id)"
            >
              <template #reference>
                <el-button size="small" type="danger">Delete</el-button>
              </template>
            </el-popconfirm>
          </div>
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
    <!-- //文章编辑对话框 -->
    <el-dialog
      v-model="state.editorDialogVisible"
      title="文章编辑"
      width="50%"
      destroy-on-close
      center
      @close="handleEditorDialogClick"
    >
      <publicationEditor
        :publicationItem="state.EditorObject"
      ></publicationEditor>
      <!-- <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleEditorDialogClick">Cancel</el-button>
          <el-button type="primary" @click="handleEditorDialogClick"
            >Confirm</el-button
          >
        </span>
      </template> -->
    </el-dialog>
  </div>
</template>
<script>
export default { name: "dashboard-article-show" };
</script>

<script setup>
import { computed, reactive, ref, watch,defineProps } from "vue";
import { Timer, InfoFilled } from "@element-plus/icons-vue";
import publicationEditor from "./publication-add.vue";
import { useRouter } from "vue-router";
import {delete_publication} from '@/API/publication.js'
import { ElMessage } from "element-plus";
const props = defineProps({
  PublicationData: {
    type: Array,
    required: true,
  },
  searchCom: {
    type: Boolean, //判断其是否作为搜索结果的子组件
    default: () => false,
  },
  EditorObject: null,
});

const state = reactive({
  PublicationData: [],
  selectOptions: [],
  editorDialogVisible: false, //对话框是否开启
});
const router = useRouter();

//* 单选框值与是否loading
const SelectValue = ref(); //初始激活
const selectLoading = ref(true);
const page = ref(1); //默认第一页
const pageSize = ref(15);

//选择器中得到的总数据
const Select_tableData = computed(() => {
  //获取选择框初始激活的渲染数据
  if (props.PublicationData.length != 0) {
    if (SelectValue.value) {
      return props.PublicationData[SelectValue.value].content;
    } else {
      //初始化时，选择框内容填充；
      return props.PublicationData[0].content;
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

const handleEditorDialogClick = () => {
  //判断对话框是否需要关闭
  state.editorDialogVisible = false;
};

/**
 *
 */
const handlePublicationEdit = (publicationObject) => {
  if (props.searchCom == true) {
    //作为搜索组件，将进行路由跳转
    const routeUrl = router.resolve({
      name: "dashboard-article-editor",
      query: {
        id: publicationObject.id,
      },
    });
    router.push(routeUrl).catch((error) => {
      console.warn(error);
    });
    return;
  }
  //非搜索组件直接显示对话框，并获得正在编辑的对象
  state.editorDialogVisible = true;
  state.EditorObject = publicationObject;
};
const handlePublicationdelete = (id) => {
  // state.deleteDialogVisible = true;
  //判断有没有成功删除；如果删除成功则修改table数据
  delete_publication({id:id}).then(res=>{
    if(res.data.error==0){
       ElMessage.success(res.data.message);
    }
  })
};
watch(
  () => props.PublicationData,
  (newVal) => {
    //父组件传来新的值
    newVal.forEach((item, index) => {
      state.selectOptions.push({
        value: index,
        label: item.year,
      });
    });
    selectLoading.value = false;
  }
);
</script>
<style lang='scss' scoped>
// .publication_wrap {
//   width: 100%;
//   margin-top: 5px 5px;
//   display: flex;
//   justify-content: center;
// }
.publication-pagination {
  width: 100%;
  justify-content: center;
  padding: 0px;
}
</style>