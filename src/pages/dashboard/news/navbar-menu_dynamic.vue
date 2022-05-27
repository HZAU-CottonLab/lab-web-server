<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-24 23:31:32
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-26 15:18:02
 * @@param: 
-->
<template>
  <div class="dynamic-menu">
    <ul class="menu-tag">
      <li
        v-for="tag in dynamcTags_copy"
        :key="tag"
        @mouseover="handleClosableHover(tag)"
        @mouseout="handleClosableHover(tag)"
        @click="handleTagClick(tag)"
      >
        <span>{{ tag }}</span>
        <el-popconfirm
          confirm-button-text="Yes"
          cancel-button-text="No"
          :icon="InfoFilled"
          icon-color="#626AEF"
          title="Are you sure to delete this?"
          @confirm="handleClose(tag)"
        >
          <template #reference>
            <el-icon
              class="menu-close"
              v-show="state.closeButtonVisible[dynamcTags_copy.indexOf(tag)]"
            >
              <Close />
            </el-icon>
          </template>
        </el-popconfirm>
      </li>
      <li @click="showInput" class="tag-add">
        <el-input
          v-if="inputVisible"
          ref="InputRef"
          v-model="inputValue"
          size="default"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <span v-else> + New Tag </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, nextTick, reactive, defineEmits, defineProps, watch } from "vue";
import { Close, InfoFilled } from "@element-plus/icons-vue";

const props = defineProps({
  closable: {
    //是否显示关闭按钮
    type: Boolean,
    default: true,
  },
  dynamicTags: {
    //采样v-mode进行双向绑定
    type: Array,
    // default: () => ["Tag 1", "Tag 2", "Tag 3"],
    required: true,
  },
});
//进行双向绑定
const dynamcTags_copy = reactive(props.dynamicTags);
const inputValue = ref("");
const inputVisible = ref(false);
const InputRef = ref(); //为了获取dom元素设定的响应变量
const state = reactive({
  //hover时显示关闭按钮
  closeButtonVisible: Array.from(
    { length: dynamcTags_copy.length },
    () => false
  ),
});

const handleClosableHover = (tag) => {
  //hover时显示删除按钮
  //搜索tag对应的索引,修改state中的属性值
  const tagIndex = props.dynamicTags.indexOf(tag);
  if (props.closable) {
    state.closeButtonVisible[tagIndex] = !state.closeButtonVisible[tagIndex];
  }
};
const showInput = () => {
  //点击按钮时候，展示输入框
  inputVisible.value = true;
  nextTick(() => {
    //Dom元素更新时进行操作,使得input获得焦点
    InputRef.value.focus();
  });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    //子组件对父组件的内容进行修改,直接进行update
    dynamcTags_copy.push(inputValue.value);
    emits("update:dynamicTags", dynamcTags_copy);
  }
  inputVisible.value = false;
  inputValue.value = "";
};
const handleClose = (tag) => {
  //关闭Tag后修改父组件值
  dynamcTags_copy.splice(dynamcTags_copy.indexOf(tag), 1);
  emits("update:dynamicTags", dynamcTags_copy);
};
const emits = defineEmits(["update:dynamicTags", "click"]);
const handleTagClick = (tag) => {
  //标签被点击时，向上传递事件
  emits("click", tag);
};

watch(dynamcTags_copy, (newValue) => {
  //关闭按钮随标签数而改变，因此需要监听标签数
  state.closeButtonVisible = Array.from(
    { length: newValue.length },
    () => false
  );
});
</script>
<style lang='scss' scoped>
.dynamic-menu {
  width: 200px; //导航栏的宽度
  .menu-tag {
    display: flex;
    flex-direction: column;
    li {
      position: relative;
      height: 30px;
      background: #f2f2f2;
      margin: 5px;
      width: 100%;
      border-radius: 10px;
      display: inherit;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
    li:hover {
      background: #dddada;
    }
  }
  .tag-add {
    background-color: #5b9cff !important; //优先显示
  }
}
.menu-close {
  background: #e76b6d;
  border-radius: 4em;
  color: white;
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>