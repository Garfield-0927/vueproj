<template>
  <div>
    <div class="basicInfo">
      <div class="title">{{detail.title}}</div>
      <div class="price">
        <div class="nowP">{{detail.nowPrice}}</div>
        <div class="oldP">{{detail.oldPrice}}</div>
      </div>
      <div class="sellAndfavor">
        <div class="columnItem" v-for="(item,index) in detail.columns" :key="index">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Price",

  props:{
    detail:{
      type: Object,
      default(){
        return {}
      }
    },
  },

  created() {
    console.log(this.detail)
  }

}
</script>

<style scoped>
.basicInfo{
  width: 96%;
  margin: 0 auto;
}

.title{
  margin-top: 10px;
  font-size: 18px;
  margin-left: 0;
}

.price{
  margin-left: 0;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  width: 50%;
}

.nowP{
  text-align: left;
  flex: 1;
  font-size: 20px;
  color: rgb(18, 150, 219);
}

.oldP{
  text-align: left;
  padding-top: 6px;
  flex: 1;
  font-size: 14px;
  color: grey;
  text-decoration: line-through;
}

.sellAndfavor{
  display: flex;
  padding-bottom: 10px;
  border-bottom: 2px solid lightgrey;
}

.columnItem{
  color: grey;
  height: 20px;
  line-height:20px;
  flex: 1;
}

.columnItem:nth-child(2){
  text-align: center;
}
.columnItem:nth-child(3){
  text-align: right;
}
</style>