<template>
  <div id="home">
    <navi-bar class="home-navi"><div slot="mid">购物街</div></navi-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommends :recommends="recommends"></recommends>
    <tab-control :titles="titles"></tab-control>
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
import TabControl from "components/content/tabControl/TabControl"

import { getHomeMultidata } from "network/home.js";

export default {
  name: "Home",

  components: {
    NaviBar,
    HomeSwiper,
    Recommends,
    TabControl
  },

  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["精选","新款","流行"]
    };
  },

  created() {
    let that = this;
    getHomeMultidata().then((res) => {
      that.banners = res.data.banner.list;
      that.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>

#home{
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
</style>