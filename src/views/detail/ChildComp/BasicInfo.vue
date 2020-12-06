<template>
  <div>
    <div class="basicInfo" v-if="Object.keys(basicInfo).length!==0">
      <div v-cloak class="title">{{basicInfo.title}}</div>
      <div v-cloak class="price">
        <div v-cloak class="nowP">{{basicInfo.nowPrice}}</div>
        <div v-cloak class="oldP">{{basicInfo.oldPrice}}</div>
      </div>
      <div  class="sellAndfavor">
        <div v-cloak class="columnItem" v-for="(item,index) in basicInfo.columns" :key="index">{{item}}</div>
      </div>
      <div class="postSell">
        <div class="postSellItem" v-for="(item, index) in basicInfo.service" :key="index">

          <span><img :src="item.icon" alt="">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "BasicInfo",

  props:{
    basicInfo:{
      type: Object,
      default(){
        return {}
      }
    },
  },

  created() {
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

.postSell{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  padding-bottom: 18px;
  border-bottom: 2px solid lightgrey;
}
.postSellItem{
  height: 20px;
}
.postSellItem img{
  height: 13px;
  position: relative;
  top: 2px;
}
.postSellItem span{
  line-height: 20px;
  font-size: 13px;
  height: 20px;
}
</style>