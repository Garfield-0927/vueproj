<template>
  <div class="goodsComments" ref="goodsComments">
    假装这里有评论 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt exercitationem maiores minima molestias neque odit porro repellat voluptatem! Blanditiis natus nemo neque nisi optio pariatur quae reiciendis! Accusantium, alias aliquam aperiam architecto culpa dignissimos dolorem enim explicabo fugit ipsum minus natus nemo perferendis quidem quod sed, velit voluptate. Aperiam dolores harum nihil perspiciatis repellendus. Assumenda aut, corporis debitis deserunt dicta dignissimos dolore eveniet hic id ipsum iste, magnam necessitatibus neque officia quaerat recusandae repudiandae soluta, sunt. Accusamus accusantium asperiores aut ducimus maxime neque nihil obcaecati officia quae qui quis quod recusandae, sint soluta velit veniam voluptate voluptates?
  </div>
</template>

<script>
export default {
name: "GoodsComments",
  props:{
    isLoading:{
      type: Boolean,
      default(){return false}
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    isLoading(newVal, oldVal){
      if(!newVal) {
        this.$nextTick(() => { //使用nextTick为了保证dom元素都已经渲染完毕
          this.$emit("offsetTopOfComments", this.$refs.goodsComments.offsetTop)
        });
      }
    }
  },
}
</script>

<style scoped>
.goodsComments{
  width: 96%;
  margin: 10px auto;
}
</style>