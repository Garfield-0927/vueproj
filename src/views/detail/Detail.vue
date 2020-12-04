<template>
  <div>
    <detail-navi-bar></detail-navi-bar>
    <detail-swiper :swiper-img="swiperImg"></detail-swiper>
  </div>

</template>

<script>
import DetailNaviBar from "@/views/detail/ChildComp/DetailNaviBar";
import {getDetail} from "network/detail.js"
import DetailSwiper from "@/views/detail/ChildComp/DetailSwiper";
  export default {
    name: "Detail",
    components:{
      DetailNaviBar,
      DetailSwiper,

    },
    data(){
      return{
        iid: null,
        swiperImg: null,

      }
    },

    created() {
      this.iid = this.$route.params.iid;

      // get detail of goods
      getDetail(this.iid).then(res =>{
        console.log(res);
        this.swiperImg = res.result.itemInfo.topImages;
        console.log(this.swiperImg)
      })


    },

    deactivated() {
      // 离开时销毁组件 否则会keep-alive
      this.$destroy('Detail');
    },


    methods:{

    }
  }
</script>

<style scoped>

</style>