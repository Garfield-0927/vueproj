<template>
  <div>
    <navi-bar class="navibar">
      <div slot="left" class="left" @click="goBack">&lt;</div>
      <div slot="mid" class="mid">
        <div class="titleItem"
             v-for="(item, index) in titles"
             :key="index"
             :class="{titleactive: index === currentIndex}"
              @click="titleChange(index)">
          {{item}}
        </div>
      </div>
    </navi-bar>


  </div>
</template>

<script>
import NaviBar from "@/components/common/navibar/NaviBar";


export default {
  name: "DetailNaviBar",
  components:{
    NaviBar

  },

  data(){
    return{
      titles:['商品', '详情', '评论', '推荐', ],
      currentIndex: 0,
    }
  },

  methods:{
    goBack(){
      this.$router.back();
    },

    titleChange(index){
      this.currentIndex = index
      this.$emit("NaviBarChange", index)
    }
  }

}
</script>

<style scoped>
.navibar{
  background-color: rgb(18, 150, 219);
  color: #ffffff;
}
.left{
  font-size: larger;
}

.mid{
  display: flex;
  align-content: center;
  justify-content: center;

}

.titleItem{
  flex: 1;
}

.titleactive{
  color: lightpink;
}
</style>