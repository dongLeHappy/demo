<template>
  <div>
    <el-form >

      <el-form-item label="院系" >
        <el-select v-model="searchForm.firstEnableState" placeholder="请选择院系" @change="selectMajor">
          <el-option v-for="(institute,index) in firstSelect"
                     :value="institute.value" :label="institute.name" :key="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业" >
        <el-select v-model="searchForm.SecondEnableState" placeholder="请选择专业" ref="major">
          <el-option v-for="(major,index) in secondSelect" :label="major.name" :value="major.value" :key="index"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
    export default {
        name: "selectTest",
        data(){
            return{
              searchForm:{
                firstLevel:"",
                firstEnableState:"",
                SecondEnableState:""
              },
              secondSelect: [],
              firstSelect: [
                {id: "1", name: "香港彩",value:"1",isActive:true},
                {id: "2", name: "时时彩",value:"2",isActive:false},
                {id: "3", name: "快三",value:"3",isActive:false},
                {id: "4", name: "11选5",value:"4",isActive:false},
                {id: "5", name: "PK10",value:"5",isActive:false},
                {id: "6", name: "快乐十分",value:"6",isActive:false},
              ],
            }
        },
      methods:{
        selectMajor(){
          console.log("11111")
          const self=this;
          this.searchForm.SecondEnableState = null
          this.secondSelect.push(
            {id: "1", name: "香港六合彩",value:"1"},
            {id: "2", name: "重庆时时彩",value:"2"},
            {id: "3", name: "江苏快三",value:"3"},
            {id: "4", name: "广东11选5",value:"4"},
            {id: "5", name: "北京赛车",value:"5"},
            {id: "6", name: "天津快乐十分",value:"6"}
          )
        },
      }
    }
</script>

<style scoped>

</style>
