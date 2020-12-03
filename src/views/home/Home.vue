<template>
  <div id="home">
    <navi-bar class="home-navi"><div slot="mid">购物街</div></navi-bar>
    <tab-control
      class="tab-control-copy"
      :titles="titles"
      @tabClick="tabclick"
      ref="tabControl2"
      v-show="TabFixed"
    ></tab-control>
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      :pulling-up="true"
      @positionchange="positionchange"
      @pullingUp="LoadMore"
    >
      <home-swiper :banners="banners" @imgload="swiperLoadDone"></home-swiper>
      <recommends :recommends="recommends"></recommends>
      <tab-control
        class="tab-control"
        :titles="titles"
        @tabClick="tabclick"
        ref="tabControl"
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
import { debounce } from "common/utils";


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
      tabBarOffSetTop: 0,
      TabFixed: false,
      scrollY: [0, 0, 0],
      lastIndex: 0,

    };
  },

  created() {
    // 请求轮播图数据
    this.getHomeMultidata();

    // 请求商品数据
    this.getHomeGood("pop");
    this.getHomeGood("sell");
    this.getHomeGood("new");
  },

  mounted() {
    // 监听组件中图片加载完成 防抖
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });


  },

  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.scrollY[this.$refs.tabControl.currentIndex], 0);
    this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    this.scrollY[this.$refs.tabControl.currentIndex] = this.$refs.scroll.scroll.y;
    // console.log(this.$refs.tabControl.currentIndex)
    // console.log(this.scrollY);
    // console.log(this.scrollY);
  },
  methods: {

    // 监听tab bar 点击
    tabclick(index, lastIndex) {
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
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;


      /*
      *   让tabbar切换的时候保持原来的页面不变
      */
      this.lastIndex = lastIndex;
      this.scrollY[this.lastIndex] = this.$refs.scroll.scroll.y;
      let currentHeight = 0;
      if (this.scrollY[this.$refs.tabControl.currentIndex] == 0)
      {
        currentHeight = -this.tabBarOffSetTop;
      }
      else
      {
        currentHeight = this.scrollY[this.$refs.tabControl.currentIndex];
      }
      this.$refs.scroll.scroll.scrollTo(0, currentHeight, 0);
      this.$refs.scroll.scroll.refresh();
    },

    // 获取滚动位置来显示backtotop悬浮窗 获取tabcontrol的位置，判断是否吸顶
    positionchange(pos) {
      if (pos.y < -1100) {
        this.showBackTop = true;
      } else {
        this.showBackTop = false;
      }

      this.TabFixed = pos.y < -this.tabBarOffSetTop;
    },

    // 上拉加载更多
    LoadMore() {
      this.getHomeGood(this.currentType);
      this.$refs.scroll.finishPullUp();
    },

    // 回到顶部函数
    backTop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
    },

    // 轮播图加载完成
    swiperLoadDone(){
      // console.log(this.$refs.tabControl.$el.offsetTop);
      // let aaa = this.$refs.tabControl.$el;

      // 拿到tabbar的offsetTop  注意：不能再mounted中获取，因为那时候 图片还未请求过来，高度不确定
      this.tabBarOffSetTop = this.$refs.tabControl.$el.offsetTop;
      // console.log(this.tabBarOffSetTop)
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


  },

};
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
}

.home-navi {
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  background-color: rgb(18, 150, 219);
  color: #ffffff;
  /*z-index: 9;*/
}

.wrapper {
  height: calc(100% - 93px);
  overflow: hidden;
  position: fixed;
  width: 100%;
}

.tab-control-copy{
  position: fixed;
  z-index: 9;
}

</style>