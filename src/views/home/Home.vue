<template>
  <div id="home">
    <navi-bar class="home-navi"><div slot="mid">购物街</div></navi-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommends :recommends="recommends"></recommends>
    <tab-control class="tab-control" :titles="titles"></tab-control>
    <ul>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ul>
  </div>
</template>

<script>
import NaviBar from "components/common/navibar/NaviBar";
import HomeSwiper from "./ChildComp/HomeSwiper";
import Recommends from "./ChildComp/Recommends";
import TabControl from "components/content/tabControl/TabControl";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",

  components: {
    NaviBar,
    HomeSwiper,
    Recommends,
    TabControl,
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
    };
  },

  created() {
    // 请求轮播图数据
    this.getHomeMultidata();

    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
  },


  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      let page = this.goods[type].page ;
      getHomeGoods(type, page).then( res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
    },
  },



};
</script>

<style>
#home {
  padding-top: 44px;
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
  position: sticky;
  top: 44px;
}
</style>