<template>
  <div  class="cartWrapper">
    <div class="Cart">    <h2 class="context">Shopping Cart</h2>
      <h2 class="context1">您的购物车为空</h2>
      <h2 class="context2" ref="context2">哦不！！</h2>
      <h2 class="context3" ref="context3">调查发现您的购物车里</h2>
      <h2 class="context4" ref="context4">有张佳辉这个小宝贝！！</h2></div>

  </div>

</template>

<script>
export default {
  name: "Cart",
  mounted() {
    if(this.$refs.context2 && this.$refs.context3 && this.$refs.context4)
    {
      setTimeout(()=>{
        this.$refs.context2.style.height = "40px"
      },500)
      setTimeout(()=>{
        this.$refs.context3.style.height = "40px"
      },1000)
      setTimeout(()=>{
        this.$refs.context4.style.height = "40px"
      },1500)
    }


  },

  deactivated() {
    this.$destroy('Cart');
  },

  destroyed() {
    console.log('---')
  }
}
</script>

<style>
.cartWrapper{
  height: calc(100vh - 44px);
  width: 100%;
  background-image: url("./img/preview.jpg");
  margin: 0;
  padding: 0;
}

.Cart{
  width: 96%;
  margin: 0 auto;
}
.context{
  margin-top: 0;
}

.context,
.context1{
  font-size: 30px;
  color: pink;
}

.context2,
.context3,
.context4{
  font-size: 30px;
  color: pink;
  height: 0;
  overflow: hidden;
  transition: height 1s;
}
</style>