<template>
  <div class="demo-container">
    <div class="login-demo2">
      <div class="form">
        <div class="attention">
            <p><img src="../assets/logo.png" alt=""></p>
            <!-- <p>温馨提示</p> -->
            <p class="tishiyu">欢迎使用后台系统，请登录!</p>
        </div> 
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
      loading:false
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
  }
  body{
    width: 100%;
    height: 100%;
  }
  .demo-container{
    width: 100%;
    height: 100%;
    background-image: url('../assets/mou.jpg');
    background-repeat: cover;
    background-size: 150% 150%;
    background-position: center;
  }
  .login-demo2{
    width: 100%;
    height: 100%;
    background: rgba(58, 54, 54, 0.6);
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .login-demo2 .el-form-item__content{
    padding: 20px;
    margin-left: 0!important;
  }
  .login-demo2 .form{
    width: 450px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 20px;
    background-color: rgba(224, 220, 220, 0.2)
  }
  .login-demo2 .form .login-form{
    width: 70%;
    margin: auto;
    
  }
  .login-demo2 .el-form-item{
    margin-bottom: 0px;
  }
  .login-demo2 .form input{
    height: 30px;
    text-align: center;
    border: none;
    border-bottom: 1px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
  }
  .login-demo2 .form .el-button{
    height: 30px;
    padding: 0;
    width: 100%;
  }
  
  .login-demo2 .form input::-webkit-input-placeholder {
    text-align: center;
  }
  .login-demo2 .form input:-moz-placeholder {
    text-align: center;
  }
  .login-demo2 .form input:-ms-input-placeholder {
    text-align: center;
  }
  .login-demo2 .attention{
    width: 70%;
    margin: auto;
    height: 150px;
    text-align: center;
    line-height: 35px;
  }
  .login-demo2 .attention p:nth-child(2){
    color: #ffffff;
  }
  .login-demo2 .tishiyu {
    color: #EE9C3C !important;
  }
</style>
