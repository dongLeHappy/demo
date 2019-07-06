<template>
  <div>
    <pull-to :top-load-method="refresh">
      <ul v-for="item in dataList">
        <li>{{ item }}</li>
      </ul>
    </pull-to>
  </div>
</template>

<script>
  import PullTo from 'vue-pull-to'

    export default {
      name: "pull_page",
      components:{
        PullTo
      },
      data(){
        return{
          dataList:[],
          pege:1,
          size:10,
        }
      },
      mounted(){
        this.getDataList()
      },
      methods:{
        getDataList(){
          this.axios.post("http://192.168.50.81/mock/5ca84cc2ea866b0dc477bbd9/wap/getbetsRecord_copy").then(res=>{
            console.log("返回：",res);

          }).catch(error =>{
            console.log(response);
          })
        },

        refresh(loaded){
          let data = {
            lotteryId:'',
            page:this.page,
            size:this.size
          }
          this.axios.post("http://192.168.50.81/mock/5ca84cc2ea866b0dc477bbd9/wap/getbetsRecord",data).then(res=>{
            console.log("返回：",res);
            this.dataList = res.data.dataList
            loaded('done')
          })
        }
      }
    }
</script>

<style scoped>

</style>
