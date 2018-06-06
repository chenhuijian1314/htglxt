<template>
  <section class="login-wrap">
    <div class="ms-title">后台管理系统</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="ruleForm.password"
                    @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </section>
</template>
<script>
  export default {
    name: "login",
    data() {
      return {
        ruleForm: {
          username: 'admin',
          password: 'admin'
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
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
    },
    methods: {
      //方法集合
      /*onSubmit() {
        //console.log('submit!');
        let url = this.wapi.GetAPI.MALL('/login');
        this.$router.push('/index');
        this.wapi.fetch(url, {}, {}).done((res) => {
          console.log(res);
        }).fail((err) => {
          console.log(err);
        });
      },*/

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            /*this.$router.push({path: '/base'});
            this.$store.dispatch('Logins', this.ruleForm).then(res => {
              this.$router.push({path: '/base'});
            }).catch(() => {

            })*/
            /*localStorage.setItem('ms_username',self.ruleForm.username);
            self.$router.push('/welcome');*/
            sessionStorage.setItem('USERNAME',this.ruleForm.username);
            window.location.href = '/views/home/index.html'
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    components: {
      //子组件挂载
    }
  };
</script>
<style rel="stylesheet/less" lang="less">
  html,body{
    height: 100%;
  }
  .login-wrap{
    position: relative;
    width:100%;
    height:100%;
    background: #324157;
    .ms-title{
      position: absolute;
      top:50%;
      width:100%;
      margin-top: -230px;
      text-align: center;
      font-size:30px;
      color: #fff;
    }
    .ms-login{
      position: absolute;
      left:50%;
      top:50%;
      width:300px;
      height:160px;
      margin:-150px 0 0 -190px;
      padding:40px;
      border-radius: 5px;
      background: #fff;
    }
    .login-btn{
      text-align: center;
    }
    .login-btn button{
      width:100%;
      height:36px;
    }
  }
</style>
