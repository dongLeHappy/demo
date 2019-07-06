<template>
  <div>
<!--    <div v-for="" >-->
<!--      <el-radio @change="changeState" v-model="radio" :label="item.id">{{item.name}}</el-radio>-->
<!--      <el-input :disabled="able" v-model="item.name"></el-input>-->
<!--    </div>-->
    <el-radio-group v-for="(item,index) in arr" :key="index" v-model="radio" @change="change">
      <el-radio :label="item.id">{{item.name}}</el-radio>
      <el-input v-model="item.name" :disabled="radio !== 1?false:true" ></el-input>
    </el-radio-group>
  </div>

</template>

<script>
    export default {
        name: "radio",
      data () {
        return {
          arr:[
            {name:'qqq',id:1,value:1},
            {name:'www',id:2,value:2},
            {name:'eee',id:3,value:3},
            {name:'rrr',id:4,value:4},
            {name:'ttt',id:5,value:5},
          ],
          able:false,
          radio: '1'
        };
      },
      methods:{
        change(val){
          console.log(val)
          if(val == 1){
            this.able = true;
            console.log(this.able)
          }
        }
      }
    }
</script>

<style scoped>

</style>
