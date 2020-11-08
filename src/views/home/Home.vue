<template>
  <div id='home'>
    <navi-bar class='home-navi'><div slot='mid'>购物街</div></navi-bar>
    <h2>Home</h2>
  </div>
</template>

<script>
import NaviBar from "components/common/navibar/NaviBar";
export default {
  name: "Home",
  components: {
    NaviBar,
  },
};
</script>

<style>
.home-navi{
  background-color: rgb(18,150,219);
  color: #ffffff;
}
</style>