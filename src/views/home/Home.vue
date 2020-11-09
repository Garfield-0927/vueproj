<template>
  <div id='home'>
    <navi-bar class='home-navi'><div slot='mid'>购物街</div></navi-bar>
    <h2>Home</h2>
  </div>
</template>

<script>
import NaviBar from "components/common/navibar/NaviBar";
import {getHomeMultidata} from "network/home.js"

export default {
  name: "Home",


  components: {
    NaviBar,
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