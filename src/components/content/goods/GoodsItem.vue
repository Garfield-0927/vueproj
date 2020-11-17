<template>
  <div class="itemwrapper">
    <div class="imgwrapper">
      <img class="itemImage" :src="goodsItem.show.img" alt="" />
    </div>

    <div class="detailwrapper">
      <p class="title">{{ goodsItem.title }}</p>
      <div class="priceAndfav">
        <span class="price">$ {{ goodsItem.price }}</span>
        <span class="favorites">收藏 {{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>



<style>
.itemwrapper {
  width: 50%;
  display: inline-block;
  margin-top: 10px;
}

.imgwrapper{
  text-align: center;
}

.itemImage {
  width: 92%;
  border-radius: 10px;

}

.title {
  margin: 5px auto;
  width: 92%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.priceAndfav{
  display: flex;
  justify-content: center;
  align-items: center;
}

.price{
  text-align: center;
  flex: 1;
  color: rgb(18, 150, 219);
}

.favorites{
  text-align: center;
  flex: 1;
  color: rgb(18, 150, 219);
}
</style>