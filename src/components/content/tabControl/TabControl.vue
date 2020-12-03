<template>
  <div class="tabcontrol">
    <div class="tab-item" v-for="(item, index) in titles" v-bind:key="index" @click="changeTab(index)">
      <span :class="{active: index===currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
    titles:{
      type: Array,
      default(){
        return [];
      }
    }
  },

  data() {
    return {
      currentIndex: 0,
      lastIndex: 0
    }
  },


  methods: {
    changeTab(e){
    //  console.log(e);
      this.lastIndex = this.currentIndex;
      this.currentIndex = e;
      this.$emit('tabClick', e, this.lastIndex)
    }
  },
}
</script>

<style>

.tabcontrol{
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  background-color: #fff;
}

.tab-item{
  flex: 1;
  text-align: center;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-item span{
  width: 80px;
  padding-bottom: 10px;

}

.active{
  border-bottom: 5px solid #1A7BBB;
}


</style>