<template>
  <div class="goodsdetailInfo" v-if="Object.keys(GoodsDetailInfo).length!==0">
    <div class="topText">{{GoodsDetailInfo.desc}}</div>
    <div class="imgDesc">{{GoodsDetailInfo.detailImage[0].key}}</div>
    <div class="detailImage">
      <div class="imgItem" v-for="(item,index) in GoodsDetailInfo.detailImage[0].list" :key="index">
        <img :src="item" alt="" @load="detailImageLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsDetailInfo",
  props:{
    GoodsDetailInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },

  methods:{
    detailImageLoad(){
      this.$bus.$emit("detailImageLoad")
    }
  }

}
</script>

<style scoped>
.goodsdetailInfo{
  margin-top: 20px;
}

.imgItem img{
  width: 100%;
}
</style>