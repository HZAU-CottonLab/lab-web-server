<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-24 23:31:32
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-31 14:28:18
 * @@param: 
-->
<template>
  <div class="dynamic-menu">
    <ul class="menu-tag">
      <li
        v-for="(tag, index) in personInfo.infoDetail"
        :key="tag.tagName"
        @mouseover="handleClosableHover(tag.tagName)"
        @mouseout="handleClosableHover(tag.tagName)"
        @click="handleTagClick(tag.tagName)"
        :style="{ background: activetedBackground[index] }"
      >
        <span>{{ tag.tagName }}</span>
        <el-popconfirm
          confirm-button-text="Yes"
          cancel-button-text="No"
          :icon="InfoFilled"
          icon-color="#626AEF"
          title="Are you sure to delete this?"
          @confirm="handleClose(tag.tagName)"
        >
          <template #reference>
            <el-icon
              class="menu-close"
              v-show="
                state.closeButtonVisible[
                  personInfo.infoDetail.findIndex(
                    (value) => value.tagName == tag.tagName
                  )
                ]
              "
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
          size="large"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <span v-else> + New Tag </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {
  ref,
  nextTick,
  reactive,
  defineEmits,
  defineProps,
  watch,
  computed,
} from "vue";
import { useState, useMutations } from "@/utils/storehook.js";
import { Close, InfoFilled } from "@element-plus/icons-vue";
const { personInfo } = useState("user", ["personInfo"]);
const { del_infoTag, add_infoTag } = useMutations("user", [
  "del_infoTag",
  "add_infoTag",
]);
const props = defineProps({
  closable: {
    //是否显示关闭按钮
    type: Boolean,
    default: true,
  },
  activedItem: {
    type: Number,
    default: 0,
  },
});
//进行双向绑定
const inputValue = ref("");
const inputVisible = ref(false);
const InputRef = ref(); //为了获取dom元素设定的响应变量
const state = reactive({
  //hover时显示关闭按钮
  closeButtonVisible: Array.from(
    { length: personInfo.value.infoDetail.length },
    () => false
  ),
});

const activetedBackground = computed(() => {
  const backgroundColor = Array.from(
    { length: personInfo.value.infoDetail.length },
    () => "#f2f2f2"
  );
  //修改处于活跃状态的li
  backgroundColor[props.activedItem] = "#b1aeae";
  return backgroundColor;
});

const handleClosableHover = (tag) => {
  //hover时显示删除按钮
  //搜索tag对应的索引,修改state中的属性值
  const tagIndex = personInfo.value.infoDetail.findIndex(
    (value) => value.tagName == tag
  );
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
    //子组件对父组件的内容进行修改,并且直接进行update
    add_infoTag(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = "";
};
const handleClose = (tag) => {
  //关闭Tag后修改父组件值
  const tagIndex = personInfo.value.infoDetail.findIndex(
    (value) => value.tagName == tag
  );
  del_infoTag(tagIndex);
};
const emits = defineEmits(["click"]);
const handleTagClick = (tag) => {
  //标签被点击时，向上传递该标签索引
  emits("click", tag);
};

watch(personInfo.value.infoDetail, (newValue) => {
  //关闭按钮随标签数而改变，因此需要监听标签数
  state.closeButtonVisible = Array.from(
    { length: newValue.length },
    () => false
  );
});
// onBeforeMount(() => {
//   console.log(props.dynamicTags);
// });
</script>
<style lang='scss' scoped>
.dynamic-menu {
  width: 200px; //导航栏的宽度
  .menu-tag {
    display: flex;
    flex-direction: column;
    li {
      position: relative;
      height: 40px;
      background: #f2f2f2;
      margin: 5px;
      width: 100%;
      border-radius: 10px;
      display: inherit;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    li:hover {
      background: #b1aeae;
    }
  }
  .tag-add {
    background-color: #f2f2f2 !important; //优先显示
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