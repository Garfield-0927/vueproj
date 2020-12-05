<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props:{
    probeType:{
      type: Number,
      default: 0
    },
    pullingUp:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // init bscroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullingUp
    });

    // listen rolling
    if (this.probeType!==0)
    {
      this.scroll && this.scroll.on('scroll', position => {
        this.$emit('positionchange',position);
      })


    }

    if (this.pullingUp){
      // pulling up
      this.scroll && this.scroll.on('pullingUp', ()=>{
        this.$emit('pullingUp');
      })
    }

  },

  methods:{

    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },

    refresh(){
      this.scroll && this.scroll.refresh()
    }
  },

};
</script>

<style>
</style>