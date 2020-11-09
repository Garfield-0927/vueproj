<template>
  <div id='home'>
    <navi-bar class='home-navi'><div slot='mid'>购物街</div></navi-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NaviBar from "components/common/navibar/NaviBar";
import HomeSwiper from "./ChildComp/HomeSwiper"


import {getHomeMultidata} from "network/home.js"

export default {
  name: "Home",


  components: {
    NaviBar,
    HomeSwiper
  },


  data(){
    return {
      banners: [],
      recommends: []
    }
  },


  created(){
    let that = this;
    getHomeMultidata().then( res => {
      that.banners = res.data.banner.list;
      that.recommends = res.data.recommend.list
    })
  }
};
</script>

<style>
.home-navi{
  background-color: rgb(18,150,219);
  color: #ffffff;
}
</style>