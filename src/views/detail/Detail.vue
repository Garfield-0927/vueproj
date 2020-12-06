<template>
  <div class="detail">
    <detail-navi-bar class="NaviBar"></detail-navi-bar>
    <scroll class="scrollWrapper" ref="scroll">
      <detail-swiper :swiper-img="swiperImg"></detail-swiper>
      <basic-info :basic-info="basicInfo"></basic-info>
      <shop-info :shop-info="shopInfo"></shop-info>

    </scroll>

  </div>

</template>

<script>
import DetailNaviBar from "@/views/detail/ChildComp/DetailNaviBar";
import {getDetail} from "network/detail.js"
import DetailSwiper from "@/views/detail/ChildComp/DetailSwiper";
import BasicInfo from "@/views/detail/ChildComp/BasicInfo";
import Scroll from "@/components/common/scroll/Scroll";
import ShopInfo from "@/views/detail/ChildComp/ShopInfo";
import {shopInfo} from "@/views/detail/js/detail";

export default {
  name: "Detail",
  components: {
    DetailNaviBar,
    DetailSwiper,
    BasicInfo,
    Scroll,
    ShopInfo,

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
      shopInfo: {},

    }
  },

  created() {
    this.iid = this.$route.params.iid;

    // get detail of goods
    getDetail(this.iid).then(res => {
      console.log(res);
      // get basic info
      this.basicInfo.oldPrice = res.result.itemInfo.oldPrice;
      this.basicInfo.nowPrice = res.result.itemInfo.price;
      this.basicInfo.title = res.result.itemInfo.title;
      this.basicInfo.columns = res.result.columns;
      this.basicInfo.service = res.result.shopInfo.services;
      this.swiperImg = res.result.itemInfo.topImages;


      // get shop info
      this.shopInfo = new shopInfo(res.result.shopInfo.name, res.result.shopInfo.shopLogo,
                                   res.result.shopInfo.shopUrl, res.result.shopInfo.cFans,
                                   res.result.shopInfo.cSells, res.result.shopInfo.score);

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
  top: 0;
  z-index: 2;
}
.scrollWrapper{
  height: calc(100% - 44px);

}
</style>