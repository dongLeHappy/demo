<template>
  <div>
    <div class="page-cell">
      <mt-cell-swipe
        :key="index" v-for="(n,index) in 10"
        :right="[
                {
                    content: '删除',
                    style: { background: '#ff7900', color: '#fff'},
                    handler: () => deleteSection(index)
                }
            ]"
        title="11111">
      </mt-cell-swipe>
    </div>
  </div>
</template>

<script>

    export default {
      name: "mainMove",
      data(){
        return {

        }
      },
      methods: {
        deleteSection(index) {
          console.log(index);
        },
      }
    }
</script>

<style scoped>
  .tab_manage_wrap{
    width: 100%;
    height: 100%;
  }
  .tab_manage{
    width: 16rem;
    margin: 0 auto;
    overflow-x: hidden;
    position: relative;
  }
  .tab_manage li{
    position: relative;
    width:18.56rem;
    height: 2.56rem;
    border-bottom: 0.05rem solid #dedede;
  }
  .tab_manage_list{
    height: 2.56rem;
    width: 15.573333rem;
  }
  .swipeleft.tab_manage_list{
    margin-left: -3rem;
  }
  .tab_manage li .tab{
    font-size: 0.64rem;
    color: #555;
    padding-top: 0.426667rem;
    padding-bottom: 0.213333rem;
  }
  .tab_manage li .tab_content{
    font-size: 0.554667rem;
    color: #999;
    width: 15.36rem;
  }
  .tab_manage li .tab_delete{
    height: 2.56rem;
    width: 2.986667rem;
    line-height: 2.56rem;
    text-align: center;
    font-size: 0.725333rem;
    color: #fff;
    background-color: #fe4d57;
  }
</style>
