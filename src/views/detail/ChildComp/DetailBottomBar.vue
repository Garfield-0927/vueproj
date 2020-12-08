<template>
  <div class="bottomBar">
    <div class="bottombarItem service" @click="callService">客服</div>
    <div class="bottombarItem shop " @click="goToShop">商铺</div>
    <div class="bottombarItem favor" @click="Clickfavor">收藏</div>
    <div class="bottombarItem addToCart" @click="ClickAddCart">加入购物车</div>
    <div class="bottombarItem purchase" @click="ClickPurchase">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    callService(){
      alert("没有客服，只有渣渣灰，要的话直接抱走~")
    },

    goToShop(){
      alert("没有商店，只有渣渣辉的心~")
    },

    Clickfavor(){
      alert("你都愿意收藏商品，为什么不愿意收藏我呢？")
    },

    ClickAddCart(){
      alert("把zjh宝宝成功加入购物车啦！！")
    },

    ClickPurchase(){
      alert("点什么点，反正你又不买！")
    }

  }
}
</script>

<style scoped>
.bottomBar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: lightpink;
  height: 49px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bottombarItem{
  height: 49px;
  line-height: 49px;
  text-align: center;
  color: #ffffff;
}




</style>