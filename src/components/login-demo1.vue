<template>
  <div class="login-demo1">
    <div class="form">
      <div class="login-form">
        <el-form label-width="80px">
          <el-form-item>
            <el-input v-model="account" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input type="password" v-model="pwd" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" @click="loginSubmit" :loading="loading">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <p><img src="../assets/logo.png" alt=""></p>
        <p>温馨提示</p>
        <p class="tishiyu">欢迎使用后台系统，请登录!</p>
      </div>
    </div>

    
  </div>
</template>
<script>
export default {
  data(){
    return{
      account:"",
      pwd:"",
      loading:false,
    }
  },
  methods:{
    loginSubmit(){
      this.loading = true;
      setTimeout(()=>{
        this.loading = false;
      },3000)
    }
  }
}
</script>

<style>
  html{
    width: 100%;
    height: 100%;
    /* background-image: url('../assets/loginBg.jpg'); */
  }
  body{
    width: 100%;
    height: 100%;
    background-image: url('../assets/loginBg.jpg');
  }
  .login-demo1 .acc{
    position: relative;
    top: -92px;
    left: 100px;
  }
  .login-demo1{
    position: absolute;
    top: 15%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .login-demo1 .form{
    width: 700px;
    display: flex;
    flex-direction: row;
  }
  .login-demo1 .form >div{
    width: 380px;
    text-align: center;
  }
  .login-demo1 .el-form{
    width: 260px;
  }
  .login-demo1 .el-form-item{
    margin-bottom: 15px;
  }
  .login-demo1 .form >div:first-child{
    border-right: 1px solid gray;
  }
  .login-demo1 .form >div:nth-child(2){
    color: #ffffff;
    line-height: 45px;
  }
  .login-demo1 .form input{
    height: 30px;
    text-align: center;
  }
  .login-demo1 .form .el-button{
    height: 30px;
    padding: 0;
    width: 100%;
  }
  
  .login-demo1 .form input::-webkit-input-placeholder {
    text-align: center;
  }
  .login-demo1 .form input:-moz-placeholder {
    text-align: center;
  }
  .login-demo1 .form input:-ms-input-placeholder {
    text-align: center;
  }
  .login-demo1 .attention p:nth-child(2){
    color: #ffffff;
  }
  .login-demo1 .tishiyu {
    color: #EE9C3C !important;
  }
</style>
