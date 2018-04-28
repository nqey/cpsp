<template>
<section class="index_content clearfix" style="margin-top: 60px;">
  <div class="col-md-10 col-md-offset-1">
    <div class="index_table index_table_con clearfix">
      <div class="col-md-6 col-md-offset-3 clearfix">
      <div class="form-group clearfix">
          <div class="content_left"><b>标题</b></div>
          <div class="content_right clearfix">
            <input type="text" class="form-control" v-model="title"/>
          </div>
        </div>
        <div style="height: 550px;"> 
          <!-- 双向数据绑定 -->
          <quill-editor ref="myTextEditor"
                        v-model="content"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)">
          </quill-editor>
        </div>
        <div class="text-center">
          <button class="btn btn_sure wz_btn" type="button" @click="submit">发布</button>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { quillEditor } from 'vue-quill-editor';
import { PUBLICS_GET_NOTICES_ADDITIONS } from '@/config/env';

export default {
  name: 'system',
  components: {
    quillEditor,
  },
  data() {
    return {
      title: null,
      content: '<h2>I am Example</h2>',
      editorOption: {
       // something config
      },
    };
  },
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur() {
      // console.log('editor blur!', editor);
    },
    onEditorFocus() {
      // console.log('editor focus!', editor);
    },
    onEditorReady() {
      // console.log('editor ready!', editor);
    },
    onEditorChange() {
      // console.log('editor change!', editor, html, text);
      // this.content = html;
    },
    async submit() {
      const param = {};
      param.title = this.title;
      param.content = this.content;
      const res = await this.$xhr('post', PUBLICS_GET_NOTICES_ADDITIONS, param);
      if (res.data.code === 0) {
        this.title = '';
        this.content = '';
        alert('发布成功！');
      }
    },
  },
  // 如果你需要得到当前的editor对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的editor对象，实际上这里的$refs对应的是当前组件内所有关联了ref属性的组件元素对象
  computed: {
    editor() {
      return this.$refs.myTextEditor.quillEditor;
    },
  },
  mounted() {
    // you can use current editor object to do something(editor methods)
    // console.log('this is my editor', this.editor);
    // this.editor to do something...
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';
.index_table {
  background: #fff;
  padding: 40px;
  border-radius: 4px 4px 0 0;
  min-height: 600px;
}
.quill-editor {
  height: 445px;
  .ql-container {
    height: 380px;
  }
}
.limit {
  height: 30px;
  border: 1px solid #ccc;
  line-height: 30px;
  text-align: right;
  span {
    color: #ee2a7b;
  }
}
.ql-snow .ql-editor img {
  max-width: 480px;
}
.ql-editor .ql-video {
  max-width: 480px;
}
</style>