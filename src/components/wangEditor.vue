<template>
  <div>
    <div v-if="isEditorShow" style="border: 1px solid #ccc">
      <Toolbar
        :editorId="editorId"
        :defaultConfig="toolbarConfig"
        :mode="mode"
        style="border-bottom: 1px solid #ccc"
      />
      <Editor
        :editorId="editorId"
        :defaultConfig="editorConfig"
        :defaultContent="defaultContent"
        :defaultHtml="defaultHtml"
        :mode="mode"
        style="height: 500px; overflow-y: hidden"
      />
      <!-- 注意: defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一 -->
      <button @click="insertText">insert text</button>
    </div>

    <p v-else>loading</p>
  </div>
</template> 
<script>
import { onBeforeUnmount, ref } from "vue";
import {
  Editor,
  Toolbar,
  getEditor,
  removeEditor,
} from "@wangeditor/editor-for-vue";

export default {
  components: { Editor, Toolbar },
  setup() {
    const editorId = `w-e-${Math.random().toString().slice(-5)}`; //【注意】编辑器 id ，要全局唯一

    // defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一
    const defaultHtml = ref("");

    // const defaultContent = []
    const defaultContent = ref([]);

    const isEditorShow = ref(false);

    const toolbarConfig = {};
    const editorConfig = { placeholder: "请输入内容..." };
    // 模拟 ajax 异步获取内容
    setTimeout(() => {
      // defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一
      defaultHtml.value = "<p>ajax&nbsp;异步获取的内容1</p>";
      defaultContent.value = [
        { type: "paragraph", children: [{ text: "ajax 异步获取的内容11" }] },
      ];

      isEditorShow.value = true;
    }, 1000);
    const insertText = () => {
      const editor = getEditor(editorId); // 获取 editor ，必须等待它渲染完之后
      if (editor == null) return;

      console.log(editor.getText()); // 执行 editor API
    };

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = getEditor(editorId);
      if (editor == null) return;

      editor.destroy();
      removeEditor(editorId);
    });

    return {
      editorId,
      mode: "default",
      defaultContent,
      defaultHtml,
      toolbarConfig,
      editorConfig,
      isEditorShow,
      insertText
    };
  },
};
</script>    
<style src="@wangeditor/editor/dist/css/style.css"></style>