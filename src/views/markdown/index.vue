<template>
  <div class="components-container">
    <div class="editor-container">
      <markdown-editor id="contentEditor" ref="contentEditor" v-model="content" :height="300" :zIndex="20"></markdown-editor>
    </div>
    <el-button @click="markdown2Html" style="margin-top:80px;" type="primary" icon="el-icon-document">To HTML</el-button>
    <div v-html="html"></div>
  </div>
</template>

<script>
  import MarkdownEditor from '@/components/MarkdownEditor'

  const content = `
**this is test**

* vue
* element
* webpack

## Simplemde
`

  export default {
    name: 'markdown-demo',
    components: { MarkdownEditor },
    data() {
      return {
        content: content,
        html: ''
      }
    },
    methods: {
      markdown2Html() {
        import('showdown').then(showdown => {
          const converter = new showdown.Converter()
          this.html = converter.makeHtml(this.content)
        })
      }
    }
  }
</script>


