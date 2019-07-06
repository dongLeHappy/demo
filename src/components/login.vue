<template>
  <div>
    <el-button size="primary" @click="checkDemo(1)">demo1</el-button>
    <el-button size="primary" @click="checkDemo(2)">demo2</el-button>
    <el-button size="primary" @click="checkDemo(3)">demo3</el-button>
    <el-button size="primary" @click="checkDemo(4)">demo4</el-button>
    <el-button size="primary" @click="checkDemo(5)">demo5</el-button>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    checkDemo(val){
      if(val == 1){
        this.$router.push({path:"/login-demo1"})
      }
      if(val == 2){
        this.$router.push({path:"/login-demo2"})
      }
      if(val == 3){
        this.$router.push({path:"/login-demo3"})
      }
      if(val == 4){
        this.$router.push({path:"/login-demo4"})
      }
      if(val == 5){
        this.$router.push({path:"/login-demo5"})
      }
    }
  }
}
</script>
