<template>
  <div class="recommends">
    <div class="recommend-item" v-for="item in recommends" v-bind:key="item.image">
      <a :href="item.link">
        <img :src="item.image">
      </a>
      <div class="tltle">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommends",


  props:{
    recommends:{
      type: Array,
      default(){
        return [];
      }
    }



  }


}
</script>

<style>
.recommends{
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eeeeee;
}

.recommend-item{
  flex: 1;
}

.recommend-item img{
  width: 65px;
  height: 65x;
  margin-bottom: 10px;
}

</style>