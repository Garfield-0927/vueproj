<template>
  <div>
    <goods-item v-for="(item, index) in goods" :key="index" :goods-item="item"></goods-item>
  </div>
</template>



<script>
import GoodsItem from "./GoodsItem"


export default {
  name: 'Goods',
  components: {
    GoodsItem
  },

  props: {
    goods: {
      type: Array,
      default(){
        return [];
      }
    }
  }
}
</script>



<style>

</style>