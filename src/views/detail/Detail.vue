<template>
  <div>
    <detail-navi-bar></detail-navi-bar>
  </div>

</template>

<script>
import DetailNaviBar from "@/views/detail/ChildComp/DetailNaviBar";

  export default {
    name: "Detail",
    components:{
      DetailNaviBar
    },
    data(){
      return{
        iid: null
      }
    },

    created() {
      this.iid = this.$route.params.iid;
    },

    deactivated() {
      this.$destroy('Detail');
    },


    methods:{

    }
  }
</script>

<style scoped>

</style>