<template>
  <div class="itemwrapper">
    <img class="itemImage" :src="goodsItem.show.img" alt="" />
    <div>
      <p class="title">{{ goodsItem.title }}</p>
      <div class="priceAndfav">
        <span class="price">$ {{ goodsItem.price }}</span>
        <span class="favorites">{{ goodsItem.cfav }}</span>
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

.itemImage {
  width: 100%;
}

.title {
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
}

.favorites{
  text-align: center;
  flex: 1;
}
</style>