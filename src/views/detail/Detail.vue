<template>
  <div class="detail">
    <detail-navi-bar class="NaviBar"></detail-navi-bar>
    <scroll class="scrollWrapper" ref="scroll">
      <detail-swiper :swiper-img="swiperImg"></detail-swiper>
      <basic-info :basic-info="basicInfo"></basic-info>

      <ul>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
      </ul>
    </scroll>

  </div>

</template>

<script>
import DetailNaviBar from "@/views/detail/ChildComp/DetailNaviBar";
import {getDetail} from "network/detail.js"
import DetailSwiper from "@/views/detail/ChildComp/DetailSwiper";
import BasicInfo from "@/views/detail/ChildComp/BacisInfo";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Detail",
  components: {
    DetailNaviBar,
    DetailSwiper,
    BasicInfo,
    Scroll,
  },

  data() {
    return {
      iid: null,
      swiperImg: null,
      basicInfo: {
        oldPrice: 0,
        nowPrice: 0,
        title: 'unavailable',
        columns: ['1', '2', '3'],
        service: [],
      },

    }
  },

  created() {
    this.iid = this.$route.params.iid;

    // get detail of goods
    getDetail(this.iid).then(res => {
      console.log(res);
      this.basicInfo.oldPrice = res.result.itemInfo.oldPrice;
      this.basicInfo.nowPrice = res.result.itemInfo.price;
      this.basicInfo.title = res.result.itemInfo.title;
      this.basicInfo.columns = res.result.columns;
      this.basicInfo.service = res.result.shopInfo.services;
      this.swiperImg = res.result.itemInfo.topImages;

    })



  },

  mounted() {
    this.$bus.$on("DetailSwiperDone",()=>{
      this.$refs.scroll.refresh();
    })
  },

  deactivated() {
    // 离开时销毁组件 否则会keep-alive
    this.$destroy('Detail');
  },


  methods: {


  }
}
</script>

<style scoped>
.detail{
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.NaviBar{
  position: relative;
  z-index: 2;
}
.scrollWrapper{
  height: calc(100% - 44px);
}
</style>