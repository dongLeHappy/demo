<template>
  <div class="demo-container4">
    <div class="login-demo4">
      <div class="form">
        <div class="attention">
            <p><img src="../assets/logo.png" alt=""></p>
            <!-- <p>温馨提示</p> -->
            <p :class="fontMove == true ? 'moveFont' : ''" class="tishiyu">{{name}}</p>
        </div> 
        <div class="login-form">
          <el-form label-width="80px">
            <el-form-item :class="showBorder1 == true ? 'showStyle' :users == true ? '' : 'errors'">
              <span :class="showSmallFont1 == true ? 'smallFont':''">请输入账号</span>
              <el-input v-model="account" @focus="getInputStyle(1)" @blur="loseStyle(1)"></el-input>
            </el-form-item>
            <el-form-item :class="showBorder2 == true ? 'showStyle' :pwds == true ? '' : 'errors'">
              <span :class="showSmallFont2 == true ? 'smallFont':''">请输入密码</span>
              <el-input type="password" v-model="pwd" @focus="getInputStyle(2)" @blur="loseStyle(2)"></el-input>
            </el-form-item>
            <!-- <el-form-item > -->
              <el-button type="primary" @click="loginSubmit" :loading="loading">登录</el-button>
            <!-- </el-form-item> -->
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
      name:"欢迎使用后台系统，请登录!",
      loading:false,
      showBorder1:false,
      showBorder2:false,
      showSmallFont1:false,
      showSmallFont2:false,
      pwds:true,
      users:true,
      fontMove:false,
    }
  },
  methods:{
    loginSubmit(){
      if(!this.account){
        this.name = "请输入账号！";
        this.users = false;
        this.fontMove = true;
        setTimeout(()=>{
          this.fontMove = false;
        },300)
        return
      }
      if(!this.pwd){
        this.name = "请输入密码！"
        this.pwds = false;
        this.fontMove = true;
        setTimeout(()=>{
          this.fontMove = false;
        },300)
        return
      }
      this.loading = true;
      setTimeout(()=>{
        this.loading = false;
      },3000)
    },
    getInputStyle(val){
      if(val == 1){
        this.showBorder1 = true;
        this.showSmallFont1 = true;
      }
      if(val == 2){
        this.showBorder2 = true;
        this.showSmallFont2 = true;
      }
    },
    loseStyle(val){
      if(val == 1 && this.account == ""){
        this.showBorder1 = false;
        this.showSmallFont1 = false;
        this.users = true;
      }
      if(val == 2 && this.pwd == ""){
        this.showBorder2 = false;
        this.showSmallFont2 = false;
         this.pwds = true;
      }
      if((this.account == "" && this.pwd == "")||(this.account != "" && this.pwd != "")){
        this.name = "欢迎使用后台系统，请登录!";
      }
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
  .demo-container4{
    width: 100%;
    height: 100%;
    background-image: url('../assets/loginBg.jpg');
    background-repeat: cover;
    background-size: 150% 150%;
    background-position: center;
  }
  .moveFont{
    animation:moveR ease-out 0.2s forwards;
    position:absolute;
    
  }
  
  @keyframes moveR {
      from{left: 120px;}
      to{left: 150px;}
  }
  /* .login-demo4{
    width: 100%;
    height: 100%;
    background: rgba(58, 54, 54, 0.6);
    display: flex;
    flex-direction: row;
    position: relative;
  } */
  .login-demo4 .el-form-item__content{
    padding: 20px;
    margin-left: 0!important;
  }
  .login-demo4 .form{
    width: 380px;
    height: 380px;
    /* border: 1px solid red; */
    background: rgba(58, 56, 77, 0.315);
    box-shadow: 1px 1px 10px 20px rgba(58, 56, 77, 0.315);
    position: absolute;
    top: 8%;
    left:10%;
    padding-top: 20px;
  }
  .login-demo4 .form .login-form{
    margin: auto;
    border-radius: 7px;
  }
  .login-demo4 .el-form-item{
    margin-bottom: 0px;
    height: 50px;
  }
  .login-demo4 .el-form-item{
    /* border-bottom: 1px solid #ffffff; */
    margin-top: 10px;
    position: relative;
  }
  .showStyle{
    box-shadow: 1px 1px 5px 1px #409EFF;
    border: 1px solid #ffffff;
  }
  .errors{
    box-shadow: 1px 1px 5px 1px red;
    border: 1px solid red;
  }
  .login-demo4 .el-form-item span{
    position: absolute;
    top: 5px;
    left: 30px;
    color: gray;
    font-size: 16px;
  }
  .smallFont{
    top: -10px!important;
    left: 30px;
    color: gray;
    font-size: 14px!important;
  }
  .login-demo4 .form input{
    height: 30px;
    border: none;
    border-radius: 0px;
    /* outline: none; */
    /* border: 1px solid #ffffff; */
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    position: absolute;
    bottom: -5px;
  }
  /* .el-input.is-active .el-input__inner, .el-input__inner:focus{
      border-color:#409EFF;
      box-shadow: 1px 1px 5px 1px #409EFF;
    } */
  .login-demo4 .form .el-button{
    height: 30px;
    padding: 0;
    width: 80%;
    margin-top: 20px;
    margin-left: 30px;
    background-color: #409EFF;
    border: none;
  }
  
  .login-demo4 .attention{
    width: 70%;
    margin: auto;
    height: 100px;
    text-align: center;
    line-height: 35px;
  }
  .login-demo4 .attention p:nth-child(2){
    color: #ffffff;
  }
  .login-demo4 .tishiyu {
    color: #EE9C3C !important;
    left: 140px;
    position: absolute;
  }
</style>
