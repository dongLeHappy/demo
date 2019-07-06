<template>
  <div id="scrollobj">
    <p>獲得國家的放開換個地方機構獲得了抗日反腐敗</p>
  </div>
</template>

<script>
    export default {
        name: "playMsgTwe",
      data(){
          return{

          }
      },
      methods:{
        scroll(obj){
          let temp = (obj.scrollTop)++;
          console.log("++:",temp);
          // console.log(obj.scrollLeft);
          if(obj.scrollTop == temp){
            obj.innerHTML += obj.innerHTML;
          }
          console.log("1111:",obj.firstChild.offsetHeight)
          console.log("2222:",obj.scrollTop)
          if(obj.scrollTop >= obj.firstChild.offsetHeight){
            obj.scrollTop = 0
          }
        }
      },
      mounted() {
         let scrollObj = document.getElementById('scrollobj');
         let that = this;
         setInterval(function(){
           that.scroll(scrollObj)
         },50)

      }
    }
</script>

<style scoped>
  #scrollobj{
    overflow: hidden;
    height: 50px;
    width: 500px;
    background-color: #DDDDDD;
  }
</style>
