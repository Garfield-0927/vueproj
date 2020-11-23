<template>
  <div id="home">
    <navi-bar class="home-navi"><div slot="mid">购物街</div></navi-bar>
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      :pulling-up="true"
      @positionchange="positionchange"
      @pullingUp="LoadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommends :recommends="recommends"></recommends>
      <tab-control
        class="tab-control"
        :titles="titles"
        @tabClick="tabclick"
      ></tab-control>
      <goods :goods="goods[currentType].list"></goods>
    </scroll>
    <back-top v-show="showBackTop === true" @click.native="backTop"></back-top>
  </div>
</template>

<script>
import NaviBar from "components/common/navibar/NaviBar";
import HomeSwiper from "./ChildComp/HomeSwiper";
import Recommends from "./ChildComp/Recommends";
import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",

  components: {
    NaviBar,
    HomeSwiper,
    Recommends,
    TabControl,
    Goods,
    Scroll,
    BackTop,
  },

  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["精选", "新款", "流行"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "sell",
      showBackTop: false,
    };
  },

  created() {
    // 请求轮播图数据
    this.getHomeMultidata();

    // 请求商品数据
    this.getHomeGood("pop");
    this.getHomeGood("sell");
    this.getHomeGood("new");


    // 监听组件中图片假造完成
    this.$bus.$on('itemImgLoad', ()=>{
      this.$refs.scroll.scroll.refresh();
    })
  },

  mounted() {},

  methods: {
    // 监听tab bar 点击
    tabclick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "sell";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "pop";
          break;
        default:
          break;
      }
    },

    // 获取滚动位置来显示backtotop悬浮窗
    positionchange(pos) {
      if (pos.y < -1100) {
        this.showBackTop = true;
      } else {
        this.showBackTop = false;
      }
    },

    // 上拉加载更多
    LoadMore(){
      this.getHomeGood(this.currentType);
      this.$refs.scroll.scroll.finishPullUp();
    },

    // 回到顶部函数
    backTop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
    },



    /*
    请求数据的函数
    */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGood(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(
        (res) => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        },
        (err) => {
          console.log(err);
        }
      );
    },




    //

  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}

.home-navi {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgb(18, 150, 219);
  color: #ffffff;
  z-index: 9;
}

.tab-control {
  top: 44px;
}

.wrapper {
  height: calc(100% - 93px);
  overflow: hidden;
  position: fixed;
  width: 100%;
}
</style>