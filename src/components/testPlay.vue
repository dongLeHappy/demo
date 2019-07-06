<template>
  <div class="section">
    <div>1 显示完后再显示</div>
    <div class="example">
      <div class="marquee_box">
        <div class="marquee_text" :style="{'left':marqueeDistance + 'px','font-size': size + 'px' }">
          {{text}}
        </div>
      </div>
    </div>
    <div>2 出现白边后即显示</div>
    <div class="example">
      <div class="marquee_box">
        <div class="marquee_text" :style="{'left':marqueeDistance2 + 'px','font-size': size + 'px' }">
          <text>{{text}}</text>
          <text v-if="marquee2copy_status" :style="{'margin-left':marquee2_margin + 'px'}">{{text}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "testPlay",
      data(){
          return{
            text: '这是一条会滚动的文字滚来滚去的文字跑马灯，哈哈哈哈哈哈哈哈',
            marqueePace: 1,//滚动速度
            marqueeDistance: 0,//初始滚动距离
            marqueeDistance2: 0,
            marquee2copy_status: false,
            marquee2_margin: 60,
            size: 14,
            orientation: 'left',//滚动方向
            interval: 20, // 时间间隔
            windowWidth:0,
          }
      },
      mounted () {
        // 页面显示
        this.length = this.text.length * this.size;//文字长度
        this.windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
        this.marquee2_margin = this.length < this.windowWidth ? this.windowWidth - this.length : this.marquee2_margin//当文字长度小于屏幕长度时，需要增加补白
        this.run1();// 水平一行字滚动完了再按照原来的方向滚动
        this.run2();// 第一个字消失后立即从右边出现
      },
      methods:{
        run1() {
          var interval = setInterval(()=>{
            if (-this.marqueeDistance < this.length) {
              console.log(this.marqueeDistance)
              this.marqueeDistance = this.marqueeDistance - this.marqueePace
            } else {
              clearInterval(interval);
              this.marqueeDistance = this.windowWidth
              this.run1();
            }
          }, this.interval);
        },


        run2 () {
          var interval = setInterval(()=>{
            if (-this.marqueeDistance2 < this.length) {
              // 如果文字滚动到出现marquee2_margin=30px的白边，就接着显示
              this.marqueeDistance2 = this.marqueeDistance2 - this.marqueePace
              this.marquee2copy_status = this.length + this.marqueeDistance2 <= this.windowWidth + this.marquee2_margin
            } else {
              if (-this.marqueeDistance2 >= this.marquee2_margin) { // 当第二条文字滚动到最左边时
                this.marqueeDistance2 = this.marquee2_margin // 直接重新滚动
                clearInterval(interval);
                this.run2();
              } else {
                clearInterval(interval);
                this.marqueeDistance2 = -this.windowWidth
                this.run2();
              }
            }
          }, this.interval);
        }

      }
    }
</script>

<style scoped>
  .section{
    background: gray;
  }
  .example {
    display: block;
    width: 100%;
    height: 100rpx;
  }

  .marquee_box {
    width: 100%;
    position: relative;
  }

  .marquee_text {
    white-space: nowrap;
    position: absolute;
    top: 0;
  }

</style>
