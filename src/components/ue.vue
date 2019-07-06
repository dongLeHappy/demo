<template>
  <div>
    <ul class="box">
      <li v-for="item,index in cityOptions" :key="index">item</li>
    </ul>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: [],
        cityOptions:['上海', '北京', '广州', '深圳','广州', '深圳','深圳','广州', '深圳'],
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? this.cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cityOptions.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityOptions.length;
      }
    }
  };
</script>
<style>
  .box{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .box li{
    list-style: none;
    width: 25%;
    text-align: center;
    border-right: 1px solid red;
    background-color: blue;
    line-height: 30px;
  }


</style>
