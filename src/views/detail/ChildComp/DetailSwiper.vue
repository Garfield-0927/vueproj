<template>
  <div>
  <swiper class="detailSwiper">
    <swiper-item v-for="(item, index) in swiperImg" :key="index">
      <img :src="item" alt="" @load="detailSwiperLoadDone">
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
  data(){
    return{
      once:true,

    }
  },

  methods:{
    detailSwiperLoadDone(){
      if(this.once)
      {
        this.$bus.$emit("DetailSwiperDone")
        this.once = false
      }
    }
  }


}
</script>

<style scoped>
.detailSwiper{
  height: 300px;
  overflow: hidden;
}
</style>