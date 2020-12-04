<template>
  <div>
    <detail-navi-bar></detail-navi-bar>
    <detail-swiper :swiper-img="swiperImg"></detail-swiper>
    <price :detail="detail"></price>
  </div>

</template>

<script>
import DetailNaviBar from "@/views/detail/ChildComp/DetailNaviBar";
import {getDetail} from "network/detail.js"
import DetailSwiper from "@/views/detail/ChildComp/DetailSwiper";
import Price from "@/views/detail/ChildComp/Price";

  export default {
    name: "Detail",
    components:{
      DetailNaviBar,
      DetailSwiper,
      Price

    },
    data(){
      return{
        iid: null,
        swiperImg: null,
        detail: {},

      }
    },

    created() {
      this.iid = this.$route.params.iid;

      // get detail of goods
      getDetail(this.iid).then(res =>{
        console.log(res);
        this.detail.oldPrice = res.result.itemInfo.oldPrice;
        this.detail.nowPrice = res.result.itemInfo.price;
        this.detail.title = res.result.itemInfo.title;
        this.detail.columns = res.result.columns;
        console.log(this.detail)
        this.swiperImg = res.result.itemInfo.topImages;
        // console.log(this.swiperImg)
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