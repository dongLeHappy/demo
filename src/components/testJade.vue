<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="5">
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <div class="loading-box" v-if="loading">
      <mt-spinner type="fading-circle" class="loading-more"  color="#0188fd"></mt-spinner>
    </div>
    <div class="no-more" v-if="noMore">亲，已经到底了哦！</div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        loading:false,
        list:[
          {id:"1",name:"未完全而非"},
          {id:"2",name:"未完全而非"},
          {id:"3",name:"未完全而非"},
          {id:"4",name:"未完全而非"},
          {id:"5",name:"未完全而非"},
          {id:"6",name:"未完全而非"},
          {id:"7",name:"未完全而非"},
          {id:"8",name:"未完全而非"},
          {id:"9",name:"未完全而非"},
          {id:"10",name:"未完全而非"},
          {id:"11",name:"未完全而非"},
          {id:"12",name:"未完全而非"},
          {id:"13",name:"未完全而非"},
          {id:"14",name:"未完全而非"},
          {id:"15",name:"未完全而非"},
          {id:"16",name:"未完全而非"},
          {id:"17",name:"未完全而非"},
          {id:"18",name:"未完全而非"},
          {id:"19",name:"未完全而非"},
          {id:"20",name:"未完全而非"},
          {id:"21",name:"未完全而非"},
          {id:"22",name:"未完全而非"},
          {id:"23",name:"未完全而非"},
          {id:"24",name:"未完全而非"},
          {id:"25",name:"未完全而非"},
          {id:"26",name:"未完全而非"},
          {id:"27",name:"未完全而非"},
          {id:"28",name:"未完全而非"},
          {id:"29",name:"未完全而非"},
          {id:"30",name:"未完全而非"},
        ]
      };
    },
    methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }
    }
  };



</script>

<style>

</style>
