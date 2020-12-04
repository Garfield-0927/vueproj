<template>
  <div>
  <swiper class="detailSwiper">
    <swiper-item v-for="(item, index) in swiperImg" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";

export default {
  name: "DetailSwiper",
  components: {
    SwiperItem,
    Swiper
  },
  props: {
    swiperImg:{
      type: Array,
      default(){
        return [];
      }
    }
  },



}
</script>

<style scoped>
.detailSwiper{
  height: 300px;
  overflow: hidden;
}
</style>