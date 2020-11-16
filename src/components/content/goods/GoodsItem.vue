<template>
  <div class="itemwrapper">
    <img class="itemImage" :src="goodsItem.show.img" alt="" />
    <div>
      <p class="title">{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="favorites">{{ goodsItem.cfav }}</span>
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
}

.itemImage {
  width: 100%;
}

.title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>