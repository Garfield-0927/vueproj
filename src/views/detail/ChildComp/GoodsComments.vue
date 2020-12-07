<template>
  <div class="goodsComments" ref="goodsComments">
    <div>假装这里有评论 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt exercitationem maiores minima molestias neque odit porro repellat voluptatem! Blanditiis natus nemo neque nisi optio pariatur quae reiciendis! Accusantium, alias aliquam aperiam architecto culpa dignissimos dolorem enim explicabo fugit ipsum minus natus nemo perferendis quidem quod sed, velit voluptate. Aperiam dolores harum nihil perspiciatis repellendus. Assumenda aut, corporis debitis deserunt dicta dignissimos dolore eveniet hic id ipsum iste, magnam necessitatibus neque officia quaerat recusandae repudiandae soluta, sunt. Accusamus accusantium asperiores aut ducimus maxime neque nihil obcaecati officia quae qui quis quod recusandae, sint soluta velit veniam voluptate voluptates?
    </div>
    <div>真实开发中，服务器返回的时间不会是yyyy-mm-dd之类的格式</div>
    <div>返回的是以Unix时间元年为起点，对应时间的时间戳，比如1535694719</div>
    <div>那么如何将时间戳转化为yyyy-mm-dd的格式呢？</div>
    <div class="code" v-highlight>
      <pre><code v-html="code"></code></pre>
    </div>
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
  data(){
    return {
      code:`
  // 时间戳(m) 转成 毫秒（ms）
  // 将时间戳转成Date对象
  // 将Date格式化，转成对应的字符串
  // formateDate网上js代码
  const date = new Date(timeStamp*1000)
  formatDate(date, 'yyyy/MM/dd');
      `
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


.code code{
  font-size:13px;
  padding: 0;
}
</style>