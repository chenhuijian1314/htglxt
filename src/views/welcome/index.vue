<template>
  <section class="welcome">
    <p>欢迎使用XXX管理系统</p>
  </section>
</template>
<script>
  export default {
    name: "welcome",
    data() {
      return {};
    },
    props: {
      //props 参数接收
    },
    computed: {
      //计算属性
    },
    mounted() {
      // 代替ready
    },
    methods: {
      //方法集合
    },
    components: {
      //子组件挂载
    }
  };
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .welcome {
    text-align: center;
    font-size: 36px;
    padding-top: 200px;
  }
</style>
