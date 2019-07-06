<template>
  <div class="demo-container1">
    <div class="login-demo3">
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
  .demo-container1{
    width: 100%;
    height: 100%;
    background-image: url('../assets/325.jpg');
    background-repeat: cover;
    background-size: 150% 150%;
    background-position: center;
  }
  .login-demo3{
    width: 100%;
    height: 100%;
    background: rgba(58, 54, 54, 0.6);
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .login-demo3 .el-form-item__content{
    padding: 20px;
    margin-left: 0!important;
  }
  .login-demo3 .form{
    width: 450px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 20px;
    
  }
  .login-demo3 .form .login-form{
    width: 70%;
    margin: auto;
    border: 1px solid red;
    background-color: #ffffff;
    border-radius: 7px;
  }
  .login-demo3 .el-form-item{
    margin-bottom: 0px;
  }
  .login-demo3 .form input{
    height: 30px;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #1d1b1b;
    background-color: transparent;
    color: gray;
    font-size: 16px;
  }
  .login-demo3 .form .el-button{
    height: 30px;
    padding: 0;
    width: 100%;
    background-color: #403039;
  }
  
  .login-demo3 .attention{
    width: 70%;
    margin: auto;
    height: 100px;
    text-align: center;
    line-height: 35px;
  }
  .login-demo3 .attention p:nth-child(2){
    color: #ffffff;
  }
  .login-demo3 .tishiyu {
    color: #EE9C3C !important;
  }
</style>
