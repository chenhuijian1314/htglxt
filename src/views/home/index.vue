<template>
  <section class="home">
    <el-container class="main-warp">
      <v-menu @select="goToPage" :isCollapse="isCollapse"></v-menu>
      <el-container>
        <el-header class="header" height="49px">
          <v-header @change1="menuFolding"></v-header>
        </el-header>
        <el-main class="main" ref="main">
          <iframe class="sub-warp" :src="subUrl" :style="iFrameStyle"></iframe>
        </el-main>
        <!--<el-footer class="footer" height="29px"> Footer</el-footer>-->
      </el-container>
    </el-container>
  </section>
</template>
<script>
  import vMenu from './components/menu'
  import vHeader from './components/header'
  export default {
    name: "home",
    data() {
      return {
        subUrl: '/views/welcome/index.html',
        isCollapse: false,
        iFrameStyle: {
        }
      };
    },
    props: {
      //props 参数接收
    },
    computed: {
      //计算属性
    },
    mounted() {
      // 代替ready
      //this.setIFrameSize()
    },
    methods: {
      //方法集合
      //  获取浏览器宽度
      setIFrameSize(){
        let elMain = this.$refs.main.$el;
        console.log(elMain.offsetWidth)
        let elWidth = `${elMain.offsetWidth - 70}px`;
        let elHeight = `${elMain.offsetHeight}px`;
        this.iFrameStyle = {
          width: elWidth,
          height: elHeight
        };
        console.log(elWidth,elHeight)
      },

      //  菜单折叠
      menuFolding(isCollapse){
        this.isCollapse = !isCollapse;
      },

      //页面跳转
      goToPage(key){
        this.subUrl = key;
      }
    },
    components: {
      //子组件挂载
      vMenu,
      vHeader
    }
  };
</script>
<style rel="stylesheet/less" lang="less">
  html,body{
    height: 100%;
  }
  .home {
    height: 100%;
    .main-warp{
      height: 100%;
    }
    .menu {
      background-color: #324157;
      max-width: 250px;
    }
    .header {
      background-color: #242f42;
    }
    .main {
      padding: 0;
      overflow: hidden;
      .sub-warp{
        border: none;
        width: 100%;
        height: 100%;
      }
    }
    .footer {
      background-color: #b3c0d1;
    }
  }
</style>
