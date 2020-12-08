<template>
  <div class="detail">
    <detail-navi-bar
        class="NaviBar"
        @NaviBarChange="NaviBarChange"
        :index-change="currentIndex"
    >
    </detail-navi-bar>
    <scroll class="scrollWrapper" ref="scroll" :probe-type="3" @positionchange="Detailpositionchange">
      <detail-swiper :swiper-img="swiperImg"></detail-swiper>
      <basic-info :basic-info="basicInfo"></basic-info>
      <shop-info :shop-info="shopInfo"></shop-info>
      <goods-detail-info :goods-detail-info="goodsDetailInfo"></goods-detail-info>
      <goods-params ref="params" :is-loading="isLoading"></goods-params>
      <goods-comments ref="comments" :is-loading="isLoading"></goods-comments>
      <goods-recommends ref="recommends" :is-loading="isLoading"></goods-recommends>
    </scroll>
  <detail-bottom-bar class="bottomBar"></detail-bottom-bar>
  </div>

</template>

<script>
import DetailNaviBar from "@/views/detail/ChildComp/DetailNaviBar";
import {getDetail} from "network/detail.js"
import DetailSwiper from "@/views/detail/ChildComp/DetailSwiper";
import BasicInfo from "@/views/detail/ChildComp/BasicInfo";
import Scroll from "@/components/common/scroll/Scroll";
import ShopInfo from "@/views/detail/ChildComp/ShopInfo";
import GoodsDetailInfo from "@/views/detail/ChildComp/GoodsDetailInfo";
import GoodsParams from "@/views/detail/ChildComp/GoodsParams";
import GoodsComments from "@/views/detail/ChildComp/GoodsComments";
import GoodsRecommends from "@/views/detail/ChildComp/GoodsRecommends";
import DetailBottomBar from "@/views/detail/ChildComp/DetailBottomBar";
import {shopInfo} from "@/views/detail/js/detail";
import {debounce} from "@/common/utils";

export default {
  name: "Detail",
  components: {
    DetailNaviBar,
    DetailSwiper,
    BasicInfo,
    Scroll,
    ShopInfo,
    GoodsDetailInfo,
    GoodsParams,
    GoodsComments,
    GoodsRecommends,
    DetailBottomBar,
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
      goodsDetailInfo: {},
      isLoading: true,
      topOfDetailInfo: [0, 0, 0, 0],
      currentIndex: 0
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

      //get goods detail info
      this.goodsDetailInfo = res.result.detailInfo;


      //change isLoading
      this.isLoading = false
    })


  },

  mounted() {
    let refresh = debounce(() => {
      if (this.$refs.scroll) {
        this.$refs.scroll.refresh()
      }
    }, 500);


    this.$bus.$on("DetailSwiperDone", () => {
      refresh()
    })

    let newRefresh = debounce(() => {
      if (this.$refs.params && this.$refs.comments && this.$refs.recommends) {
        this.topOfDetailInfo[1] = this.$refs.params.$el.offsetTop - 44;
        this.topOfDetailInfo[2] = this.$refs.comments.$el.offsetTop - 44;
        this.topOfDetailInfo[3] = this.$refs.recommends.$el.offsetTop - 44;
        this.$refs.scroll.refresh();
      }
    }, 500)
    this.$bus.$on("detailImageLoad", () => {
      newRefresh()
    })


  },

  // deactivated() {
  //   // 离开时销毁组件 否则会keep-alive
  //   this.$destroy('Detail');
  // },


  methods: {
    // NaviBar切换
    NaviBarChange(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.topOfDetailInfo[index], 500)
    },

    // 获取滚动位置
    Detailpositionchange(position) {
      if(-position.y<this.topOfDetailInfo[1]-44){
        this.currentIndex = 0;
      }else if (-position.y<this.topOfDetailInfo[2]-44){
        this.currentIndex = 1;
      }else if (-position.y<this.topOfDetailInfo[3]-44){
        this.currentIndex = 2;
      }else{
        this.currentIndex = 3;
      }
    }
// // 获取参数距离顶部的高度
// offsetTopOfParams(top){
//   this.topOfDetailInfo[1] = top-44;
// },
//
//
// // 获取评论距离顶部高度
// offsetTopOfComments(top){
//   this.topOfDetailInfo[2] = top-44;
// },
//
//
// // 获取推荐距离顶部高度
// offsetTopOfRecommends(top){
//   this.topOfDetailInfo[3] = top-44;
//
// }
  }
}
</script>

<style scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.NaviBar {
  position: relative;
  top: 0;
  z-index: 2;
}

.scrollWrapper {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>