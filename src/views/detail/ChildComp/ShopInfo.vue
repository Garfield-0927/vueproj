<template>
  <div class="shopInfoWrapper" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shopBasicInfo">
      <img :src="shopInfo.shopLogo" class="shopLogo">
      <div class="shopName">{{ shopInfo.shopName }}</div>
    </div>
    <div class="shopDetailInfo">
      <div class="sellAndfans">
        <div class="sell">
          <div class="sellValue">{{ getApproxNum(shopInfo.sellNum) }}</div>
          <div class="sellDes">总销量</div>
        </div>
        <div class="fans">
          <div class="fansValue">{{ getApproxNum(shopInfo.fanNum) }}</div>
          <div class="fansDes">总粉丝</div>
        </div>
      </div>
      <div class="shopScore">
        <div class="scoreItem" v-for="(item,index) in shopInfo.shopScore" :key="index">
          <span class="scoreDes">{{item.name}}</span>
          <span class="scoreValue">{{item.score}}</span>
        </div>
      </div>
    </div>
    <div class="IntoShop" @click="goToShop">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "ShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    },
  },

  methods:{
    getApproxNum (num) {
      return num>10000 ? (num/10000).toFixed(1) + "万" : num;
    },
    goToShop(){
      alert("元素溢出：lsp,禁止进入！！！")
    }
  }

}
</script>

<style scoped>
.shopInfoWrapper{
  width: 100%;
  height: 200px;
  border-top: 4px solid #e3e3e3;
  border-bottom: 1px solid #000;
}

.shopBasicInfo{
  height: 66px;
  width: 96%;
  margin: 0 auto;
  display: flex;
}
.shopBasicInfo img{
  flex: 1;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 100px;
  height: 50px;
}
.shopName{
  flex: 5;
  margin-left: 10px;
  font-size: 18px;
  color: #5e5e5e;
  line-height: 66px;
}
.shopDetailInfo{
  width: 88%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 80px;
}

.sellAndfans{
  flex: 1;
  display: flex;
}
.sell{
  flex:1;
}
.sellValue{
  text-align: center;
  font-size: 18px;
}
.sellDes{
  text-align: center;
}

.fans{
  flex: 1;
  border-right: 2px solid #e3e3e3;
}
.fansValue{
  text-align: center;
  font-size: 18px;
}
.fansDes{
  text-align: center;
}

.shopScore{
  flex: 1;
}
.scoreItem{
  margin-top: 10px;
  display: flex;
}
.scoreDes{
  text-align: right;
  flex: 1;
  font-size: 13px;
}
.scoreValue{
  color: #d43e2e;
  text-align: center;
  font-size: 13px;
  flex: 1;
}

.IntoShop{
  margin-top: 10px;
  position: relative;
  text-align: center;
}
.IntoShop button{
  border: none;
  border-radius: 5px;
  width: 150px;
  height: 30px;
}
</style>