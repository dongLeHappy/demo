<template>
  <div class="wrap">
    <div class="box" ref="box" :style="{transform:'translateX(' + distance + 'px)'}">
      <div class="marquee" ref="marquee">{{text}}</div>
      <div>{{copyText}}</div>
    </div>
    <div class="node">{{text}}</div>
  </div>
</template>

<script>
  export default {
    name: "playMsg",
    data(){
      return{
        lists: [
          '连雨不知春去,由于overflow的存在，直接获取不到，需要独立的node计算获取文字text 的计算后宽度  （由于overflow的存在，直接获取不到，需要独立的node计算）',
          // '一晴方觉夏深,获取文字text 的计算后宽度'
        ],
        text: '',
        copyText:'',
        width:200,
        distance:0
      }
    },
    methods:{
      move () {
        // 获取文字text 的计算后宽度  （由于overflow的存在，直接获取不到，需要独立的node计算）
        this.copyText = this.text; // 文字副本填充
        //设置位移
        this.width = this.$refs.marquee.clientWidth;
        this.distance = this.distance - 1;
        // 如果位移超过文字宽度，则回到起点
        console.log("1111：",this.distance)
        if (this.distance <= -(this.width)) {
          console.log("2222：",-this.distance)
          // debugger;
          this.distance = 1
        }
      }
    },
    mounted() {
      this.text += ' ' + this.lists;
      setInterval(() => {
        this.move();
      },20)
    },
    // 更新的时候运动
    updated() {


    }
  }
</script>

<style scoped>
  .wrap {
    overflow: hidden;
    width: 20%;
    border: 1px solid red;
  }
  .box {
    width: 80000%;
  }
  .box div {
    float: left;
  }
  .marquee {
    margin: 0 16px 0 0;
  }
  .node {
    position: absolute;
    z-index: -999;
    top: -999999px;
  }
</style>
