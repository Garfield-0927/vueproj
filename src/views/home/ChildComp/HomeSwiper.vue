<template>
  <swiper>
    <swiper-item v-for="item in banners" v-bind:key="item.img">
      <a :href="item.link">
        <img :src="item.image" @load="imgload"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem"
export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type: Array,
      defauly(){
        return [];
      }
    }
  },

  data(){
    return{
      isload: false
    }
  },

  methods: {
    imgload(){
      // 事件只发生一次
      if (!this.isload)
      {
        this.$emit("imgload");
        this.isload = true;
      }

    }
  }
};
</script>

<style>
</style>