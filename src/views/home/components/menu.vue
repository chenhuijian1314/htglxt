<template>
    <section class="menu">
      <el-menu
        :collapse="isCollapse"
        class="sidebar"
        @select="goToPage"
        background-color="#324157"
        text-color="#fff"
        active-text-color="#ffd04b">
        <template v-for="(item,index) in items">
          <el-submenu :index="item.index" v-if="item.subs">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item :index="sub.index" v-for="(sub,index) in item.subs" :key="index">
              <i :class="item.icon"></i>
              <span slot="title">{{sub.title}}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item :index="item.index" v-else>
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </section>
</template>
<script>
    export default {
        name: "menus",
        data() {
            return {
              items: [
                {
                  icon: 'el-icon-star-on',
                  index: '/views/svgIcons/index.html',
                  title: 'icon图标'
                },
                {
                  icon: 'el-icon-menu',
                  index: '/views/table/index.html',
                  title: '基础表格'
                },
                {
                  icon: 'el-icon-tickets',
                  index: 'components',
                  title: '组件',
                  subs: [
                    {
                      index: '/views/tinymce/index.html',
                      title: '富文本'
                    },
                    {
                      index: '/views/markdown/index.html',
                      title: 'markdown'
                    },
                    {
                      index: '/views/countTo/index.html',
                      title: '金额动画'
                    }
                  ]
                },
                {
                  icon: 'el-icon-star-on',
                  index: '/views/form/index.html',
                  title: '基础表单'
                },
                {
                  icon: 'el-icon-upload2',
                  index: 'excel',
                  title: 'excel',
                  subs: [
                    {
                      icon: 'el-icon-upload2',
                      index: '/views/exportExcel/index.html',
                      title: '导出excel'
                    },
                    {
                      icon: 'el-icon-upload2',
                      index: '/views/selectExcel/index.html',
                      title: '选择导出excel'
                    },
                    {
                      icon: 'el-icon-upload2',
                      index: '/views/uploadExcel/index.html',
                      title: '导入excel'
                    }
                  ]
                },
                {
                  icon: 'el-icon-upload2',
                  index: '/views/404/index.html',
                  title: '错误页面'
                }
              ]
            };
        },
        props: {
            //props 参数接收
          isCollapse: {
            type: Boolean,
            default: false
          }
        },
        computed: {
            //计算属性
        },
        mounted() {
            // 代替ready
        },
        methods: {
            //方法集合
          goToPage(key){
            this.$emit('select',key)
          }
        },
        components: {
            //子组件挂载
        }
    };
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .el-menu{
    width: 200px;
    border-right: none;
    &.el-menu--collapse{
      width: auto;
    }
    .el-menu-item, .el-submenu__title{
      padding: 0 40px;
    }
  }
</style>
