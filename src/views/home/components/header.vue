<template>
    <section class="v-header">
      <div class="menu-folding">
        {{isCollapse? '收起' : '展开'}}
        <el-switch v-model="isCollapse" @change="menuFolding"></el-switch>
      </div>
      <div class="logo">后台管理系统</div>
      <div class="user-info"><el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../img/img.jpg">
                    {{username}}
                </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
    </section>
</template>
<script>
    export default {
        name: "vHeader",
        data() {
            return {
              name: '',
              isCollapse: true
            };
        },
        props: {
            //props 参数接收
        },
        computed: {
            //计算属性
          username(){
            let username = sessionStorage.getItem('USERNAME');
            return username ? username : this.name;
          }
        },
        mounted() {
            // 代替ready
        },
        methods: {
            //方法集合
          handleCommand(command) {
            if(command == 'loginout'){
              window.location.href = '/views/login/index.html'
            }
          },
          //  菜单展开收起
          menuFolding(){
            this.$emit('change1',this.isCollapse);
          }
        },
        components: {
            //子组件挂载
        }
    };
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .v-header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 49px;
    font-size: 22px;
    line-height: 49px;
    color: #fff;
    display: flex;
    .menu-folding{
      flex: 0 0 100px;
      font-size: 16px;
    }
    .logo{
      flex: 1;
      text-align: left;
    }
    .user-info {
      flex: 0 0 150px;
      font-size: 16px;
      color: #fff;
      height: 49px;
      .el-dropdown{
        display: block;
        height: 49px;
      }
      .el-dropdown-link{
        position: relative;
        display: block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
      }
      .user-logo{
        position: absolute;
        left:0;
        top:5px;
        width:40px;
        height:40px;
        border-radius: 50%;
      }
      .el-dropdown-menu__item{
        text-align: center;
      }
    }
  }
</style>
